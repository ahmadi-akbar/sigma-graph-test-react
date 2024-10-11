import { Button, List, Typography } from 'antd';

import { Node } from '@/types';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { openAction } from '@/redux/actionSlice';

const { Text } = Typography;

export default function NodeList() {
  const items = useAppSelector((s) => s.graph.nodes);
  const dispatch = useAppDispatch();

  return (
    <List
      header={<div>Node List</div>}
      bordered
      // @ts-ignore
      dataSource={items}
      renderItem={(node: Node) => (
        <List.Item>
          <Text>ID: {node.id}</Text>
          <Text>Label: {node.label}</Text>
          <Text>Size: {node.size}</Text>
          <Text>
            Color:
            <span style={{ color: node.color }}> {node.color}</span>
          </Text>

          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              danger
              onClick={() =>
                dispatch(openAction({ name: 'delete', payload: node }))
              }>
              Delete
            </Button>

            <Button
              color="primary"
              variant="outlined"
              onClick={() =>
                dispatch(openAction({ name: 'edit', payload: node }))
              }>
              Edit
            </Button>
          </div>
        </List.Item>
      )}
    />
  );
}
