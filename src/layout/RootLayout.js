import React from 'react';
import { Breadcrumb, Button, Dropdown, Layout, Menu, Space, theme } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
import { DownOutlined } from '@ant-design/icons';
const RootLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const items = [
        {
            label: <Link href="/category/processor">CPU /Processor</Link>,
            key: '0',
        },
        {
            label: <Link href="/category/motherboard">Motherboard</Link>,
            key: '1',
        },
        {
            label: <Link href="/category/ram">RAM</Link>,
            key: '2',
        },
        {
            label: <Link href="/category/power-supply">Power Supply Unit</Link>,
            key: '3',
        },
        {
            label: <Link href="/category/storage">Storage Device</Link>,
            key: '4',
        },
        {
            label: <Link href="/category/monitor">Monitor</Link>,
            key: '5',
        },
        {
            label: <Link href="/category/others">Others</Link>,
            key: '6',
        },
    ];
    return (
        <Layout  className="layout">
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "space-between"
                }}
            >
                <div className="demo-logo" >
                    <Link href='/' style={{
                        fontSize: '24px',
                        color: "white"
                    }}>Pc Builer Bd</Link>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Select Category
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    <Link style={{ marginLeft: "10px" }} href="/pc-build"><Button type="primary" ghost>
                        PC Builder
                    </Button></Link>
                    <Link style={{ marginLeft: "10px" }} href="/login"><Button type="primary" ghost>
                        Login
                    </Button></Link>

                </Menu>
            </Header>

            <Content
                style={{
                    padding: '0 50px',
                }}
            >

                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </div>
            </Content>

            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default RootLayout;