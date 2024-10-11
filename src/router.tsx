import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import NodeList from './pages/NodeList';
import NotFound from './pages/NotFound';
import DefaultLayout from './layouts/default';

export default createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/nodes',
        Component: NodeList,
      },
    ],
  },

  {
    path: '*',
    Component: NotFound,
  },
]);
