import { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { useSigma } from '@react-sigma/core';

const NodeTooltip = ({ visible, x, y, data }) => {
  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', top: y + 75, left: x + 30, zIndex: 1000 }}>
      <Tooltip
        open={visible}
        title={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span>ID: {data.id}</span>
            <span>X: {data.x.toFixed(5)}</span>
            <span>Y: {data.y.toFixed(5)}</span>
            <span>Size: {data.size}</span>
            <span>Color: {data.color}</span>
            <span>Label: {data.label}</span>
          </div>
        }>
        {/* Empty div as Tooltip child */}
        <div style={{ height: 0 }} />
      </Tooltip>
    </div>
  );
};

const initialState = {
  visible: false,
  x: 0,
  y: 0,
  data: null,
};

export default function SigmaToolTip() {
  const sigma = useSigma();
  const [tooltip, setTooltip] = useState(initialState);
  const handleClose = () => setTooltip(initialState);

  useEffect(() => {
    const handleClick = (e) => {
      e.event?.original?.preventDefault();
      e.event?.original?.stopPropagation();
      const node = e.node;
      if (node) {
        const data = sigma.getGraph().getNodeAttributes(e.node);

        setTooltip({
          visible: true,
          x: e.event.x,
          y: e.event.y,
          data,
        });
      } else handleClose();
    };

    sigma.on('clickNode', handleClick);

    return () => {
      sigma.off('clickNode', handleClick);
    };
  }, [sigma]);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.ant-tooltip')) handleClose();
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <NodeTooltip
      visible={tooltip.visible}
      x={tooltip.x}
      y={tooltip.y}
      data={tooltip.data}
    />
  );
}
