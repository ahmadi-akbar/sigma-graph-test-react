import '@react-sigma/core/lib/react-sigma.min.css';
import { memo, useEffect } from 'react';
import Graph from 'graphology';
import { SigmaContainer } from '@react-sigma/core';
import { Button } from 'antd';

import { Controls, SigmaActionMenu, SigmaToolTip } from '@/components/sigma';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { openAction } from '@/redux/actionSlice';

interface Props {
  children: React.ReactNode;
}

const Container = memo(function Container({ children }: Props) {
  const nodes = useAppSelector((s) => s.graph.nodes);
  const graph = new Graph();

  useEffect(() => {
    nodes.forEach((n) => {
      if (!graph.hasNode(n.id)) graph.addNode(n.id, structuredClone(n));
    });
  }, [nodes, graph]);

  return (
    <div style={{ height: 'calc(100vh - 64px - 48px)' }}>
      <SigmaContainer graph={graph}>{children}</SigmaContainer>
    </div>
  );
});

const AddButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      onClick={() => dispatch(openAction({ name: 'add', payload: null }))}>
      Add Node
    </Button>
  );
};

export default function HomePage() {
  return (
    <Container>
      <Controls addButton={<AddButton />} />
      <SigmaToolTip />
      <SigmaActionMenu />
    </Container>
  );
}
