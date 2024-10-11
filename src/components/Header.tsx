import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const MenuItems = [
  {
    key: '0',
    href: '/',
    label: 'Graph',
  },
  {
    key: '1',
    href: '/nodes',
    label: 'Node List',
  },
];

export default function AppHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[pathname.includes('/nodes') ? '1' : '0']}
        onSelect={(v) => {
          const link = MenuItems[Number(v.key)].href;
          if (link) navigate(link);
        }}
        items={MenuItems}
      />
    </Layout.Header>
  );
}
