import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { Node } from '@/types';
import { genUniqueId } from '@/utils';

interface StateType {
  nodes: Node[];
}

const initialState: StateType = {
  nodes: [
    {
      id: genUniqueId(),
      x: 0,
      y: 0,
      size: 15,
      label: 'Start Here',
      color: '#FA4F40',
      highlighted: false,
    },
    {
      id: genUniqueId(),
      x: 10,
      y: 10,
      size: 10,
      label: 'Node 2',
      color: '#0000ff',
      highlighted: false,
    },
  ],
};

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<Node>) => {
      state.nodes.push(action.payload);
    },
    removeNode: (state, action: PayloadAction<string>) => {
      return {
        nodes: state.nodes.filter((node) => node.id !== action.payload),
      };
    },
    updateNode: (state, action: PayloadAction<Partial<Node>>) => {
      const { payload } = action;
      const node = state.nodes.find((node) => node.id === payload.id);

      const temp = { ...node, ...payload };

      if (node) {
        node.x = temp.x;
        node.y = temp.y;
        node.size = temp.size;
        node.label = temp.label;
        node.color = temp.color;
      }
    },
  },
});

export const { addNode, removeNode, updateNode } = graphSlice.actions;

export default graphSlice.reducer;
