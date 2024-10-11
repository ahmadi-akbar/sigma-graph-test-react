import { useState, useEffect } from 'react';
import { Dropdown } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSigma } from '@react-sigma/core';

import { openAction } from '@/redux/actionSlice';
import { useAppDispatch } from '@/redux/store';

const MenuItems = [
  {
    key: 'edit',
    label: 'Edit',
    icon: <EditOutlined />,
  },
  {
    key: 'delete',
    label: 'Delete',
    icon: <DeleteOutlined />,
  },
];

const ContextMenu = ({ visible, x, y, onClose, onMenuItemClick }) => {
  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', top: y + 90, left: x + 30, zIndex: 1000 }}>
      <Dropdown
        menu={{ items: MenuItems, onClick: onMenuItemClick }}
        trigger={['click']}
        open={visible}
        onOpenChange={(open) => !open && onClose()}>
        {/* Empty div as Dropdown child */}
        <div style={{ height: 0 }} />
      </Dropdown>
    </div>
  );
};

const initialState = {
  visible: false,
  x: 0,
  y: 0,
  data: null,
};

export default function SigmaActionMenu() {
  const sigma = useSigma();
  const dispatch = useAppDispatch();

  const [contextMenu, setContextMenu] = useState(initialState);
  const handleClose = () => setContextMenu(initialState);

  useEffect(() => {
    const handleRightClick = (e) => {
      e.event?.original?.preventDefault();
      const data = sigma.getGraph().getNodeAttributes(e.node);
      const nodeId = e.node;

      if (nodeId) {
        setContextMenu({
          visible: true,
          x: e.event.x,
          y: e.event.y,
          data,
        });
      } else handleClose();
    };

    sigma.on('rightClickNode', handleRightClick);

    return () => {
      sigma.off('rightClickNode', handleRightClick);
    };
  }, [sigma]);

  const handleMenuItemClick = ({ key }) => {
    if (key === 'edit')
      dispatch(openAction({ name: 'edit', payload: contextMenu.data }));
    else if (key === 'delete')
      dispatch(openAction({ name: 'delete', payload: contextMenu.data }));

    handleClose();
  };

  return (
    <ContextMenu
      visible={contextMenu.visible}
      x={contextMenu.x}
      y={contextMenu.y}
      onClose={handleClose}
      onMenuItemClick={handleMenuItemClick}
    />
  );
}
