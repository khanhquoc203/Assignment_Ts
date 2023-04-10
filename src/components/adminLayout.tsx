import React, { useState } from 'react'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hook';

const { Header, Content, Footer, Sider } = Layout;


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem('Quản lý sản phẩm', '/admin/products', <DesktopOutlined />),
    getItem('Quản lý người dùng', '/admin/user', <UserOutlined />),
    getItem('Quản lý danh mục', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    // getItem('Files', '6', <FileOutlined />),
];
type Props = {}

const AdminLayout = (props: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate()
    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={(items) => navigate(`${items.key}`)} />
                </Sider>
                <Layout className="site-layout">
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>

                        </Breadcrumb>
                        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default AdminLayout