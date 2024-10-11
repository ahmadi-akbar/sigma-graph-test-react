import { useCallback } from 'react';
import { Modal } from 'antd';
import { type FormikHelpers } from 'formik';

import { Node } from '@/types';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { addNode } from '@/redux/graphSlice';
import { genUniqueId } from '@/utils';

import NodeForm from './NodeForm';
import { closeAction } from '@/redux/actionSlice';

export default function AddModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s) => s.action.name) === 'add';
  const onClose = () => dispatch(closeAction());

  const handleSubmit = useCallback(
    (v: Node, { setSubmitting, resetForm }: FormikHelpers<Node>) => {
      const newNode = {
        id: genUniqueId(),
        x: v.x ?? (Math.random() > 0.5 ? 1 : -1) * Math.random() * 10,
        y: v.y ?? (Math.random() > 0.5 ? 1 : -1) * Math.random() * 10,
        size: v.size,
        color: v.color ?? '#dddddd',
        label: v.label,
        highlighted: false,
      };
      dispatch(addNode(newNode));
      setSubmitting(false);
      resetForm();
      onClose();
    },
    [dispatch]
  );

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Add Node"
      okButtonProps={{
        htmlType: 'submit',
        form: 'main-form',
      }}
      okText="OK"
      onCancel={() => onClose()}
      style={{
        maxWidth: 500,
        margin: 'auto',
      }}>
      <NodeForm data={{}} handleSubmit={handleSubmit} />
    </Modal>
  );
}
