import { Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { removeNode } from '@/redux/graphSlice';
import Title from 'antd/es/typography/Title';
import { closeAction } from '@/redux/actionSlice';

export default function DeleteModal() {
  const dispatch = useAppDispatch();
  const action = useAppSelector((s) => s.action);
  const onClose = () => dispatch(closeAction());

  return (
    <Modal
      open={action.name === 'delete'}
      onClose={onClose}
      title="Delete Node"
      onOk={() => {
        dispatch(removeNode(action.payload.id));
        onClose();
      }}
      okText="Delete"
      okButtonProps={{
        danger: true,
      }}
      onCancel={() => onClose()}>
      <Title level={3}>Are you Sure?</Title>
    </Modal>
  );
}
