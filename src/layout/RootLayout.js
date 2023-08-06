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
            label: <Link href="/category/Processor">Processor</Link>,
            key: '0',
        },
        {
            label: "ggg",
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '3',
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
                    <Link style={{ marginLeft: "10px" }} href="/"><Button type="primary" ghost>
                        PC Builder
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