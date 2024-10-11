import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import AppHeader from '@/components/Header';
import EditModal from '@/components/sigma/actions/EditModal';
import DeleteModal from '@/components/sigma/actions/DeleteModal';
import AddModal from '@/components/sigma/actions/AddModal';

const { Content } = Layout;

export default function DefaultLayout() {
  return (
    <Layout className="layout" style={{ minHeight: '100dvh' }}>
      <AppHeader />

      <Content style={{ padding: '24px' }}>
        <div className="site-layout-content">
          <Outlet />
        </div>
      </Content>

      {/* modals */}
      <EditModal />
      <DeleteModal />
      <AddModal />
    </Layout>
  );
}
