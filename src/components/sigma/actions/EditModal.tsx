import { useCallback } from 'react';
import { Modal } from 'antd';

import { Node } from '@/types';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { updateNode } from '@/redux/graphSlice';
import { closeAction } from '@/redux/actionSlice';

import NodeForm from './NodeForm';

export default function EditModal() {
  const dispatch = useAppDispatch();
  const action = useAppSelector((s) => s.action);
  const onClose = () => dispatch(closeAction());

  const item = action.payload;

  const handleSubmit = useCallback(
    (v: Node, { setSubmitting }: any) => {
      const newNode = {
        id: item.id,
        x: v.x ?? (Math.random() > 0.5 ? 1 : -1) * Math.random() * 10,
        y: v.y ?? (Math.random() > 0.5 ? 1 : -1) * Math.random() * 10,
        size: v.size,
        color: v.color ?? '#dddddd',
        label: v.label,
        highlighted: false,
      };
      dispatch(updateNode(newNode));
      setSubmitting(false);
      onClose();
    },
    [dispatch, item]
  );

  return (
    <Modal
      open={action.name === 'edit'}
      onClose={onClose}
      title="Edit Node"
      okText="OK"
      okButtonProps={{
        htmlType: 'submit',
        form: 'main-form',
      }}
      onCancel={() => onClose()}>
      <NodeForm data={item} handleSubmit={handleSubmit} />
    </Modal>
  );
}
