import React, { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { Select } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  DashboardOutlined,
  ShoppingOutlined,
  MoneyCollectOutlined,
  TeamOutlined,
  PhoneOutlined,
  SettingOutlined,
  MailOutlined,
  FormOutlined,
  FieldTimeOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const MainLayout1 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">
              <img src={"https://demo.lead-pro.in/images/small_light.png"} alt="Small Logo" />
            </span>
            <span className="lg-logo">
              <img src={"https://demo.lead-pro.in/images/light.png"} style={{ width: "130px" }} alt="Large Logo" />
            </span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          onClick={({ key }) => {
            if (key === "logout") {
              // Add logout logic here
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: 'dashboard',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: 'product',
              icon: <ShoppingOutlined />,
              label: 'Product',
            },
            {
              key: 'expenses_manager',
              icon: <MoneyCollectOutlined />,
              label: 'Expenses Manager',
              children: [
                {
                  key: 'expenses_category',
                  icon: <FormOutlined className="fs-4" />,
                  label: 'Expense Category',
                },
                {
                  key: 'expenses',
                  icon: <MoneyCollectOutlined className="fs-4" />,
                  label: 'Expenses',
                }
              ]
            },
            {
              key: 'user_management',
              label: 'User Management',
              type: 'group',
              children: [
                {
                  key: 'staff_members',
                  label: 'Staff Members',
                  icon: <TeamOutlined className="fs-4" />,
                },
                {
                  key: 'salesmans_group',
                  label: 'Salesmans',
                  children: [
                    {
                      key: 'salesmans',
                      icon: <TeamOutlined className="fs-4" />,
                      label: 'Salesmans',
                    },
                    {
                      key: 'salesmans_booking',
                      icon: <ShoppingOutlined className="fs-4" />,
                      label: 'Salesmans Booking',
                    }
                  ]
                },
              ],
            },
            {
              key: 'lead_management',
              label: 'Lead Management',
              type: 'group',
              children: [
                {
                  key: 'call_manager',
                  label: 'Call Manager',
                  icon: <PhoneOutlined className="fs-4" />,
                },
                {
                  key: 'campaigns',
                  label: 'Campaigns',
                  icon: <FieldTimeOutlined className="fs-4" />,
                },
                {
                  key: 'lead_calls',
                  label: 'Lead & Calls',
                  children: [
                    {
                      key: 'leads',
                      icon: <UserOutlined className="fs-4" />,
                      label: 'Leads',
                    },
                    {
                      key: 'call_logs',
                      icon: <PhoneOutlined className="fs-4" />,
                      label: 'Call Logs',
                    },
                    {
                      key: 'lead_notes',
                      icon: <FormOutlined className="fs-4" />,
                      label: 'Lead Notes',
                    }
                  ]
                },
                {
                  key: 'lead_follow_up',
                  label: 'Lead Follow up',
                  icon: <FieldTimeOutlined className="fs-4" />,
                }
              ],
            },
            {
              key: 'settings_group',
              label: 'Settings',
              type: 'group',
              children: [
                {
                  key: 'lead_table_field',
                  icon: <FormOutlined className="fs-4" />,
                  label: 'Lead Table Field',
                },
                {
                  key: 'messaging',
                  icon: <MailOutlined className="fs-4" />,
                  label: 'Messaging',
                  children: [
                    {
                      key: 'email_template',
                      icon: <MailOutlined className="fs-4" />,
                      label: 'Email Template'
                    }
                  ]
                },
                {
                  key: 'form',
                  icon: <FormOutlined className="fs-4" />,
                  label: 'Form',
                },
                {
                  key: 'settings',
                  icon: <SettingOutlined className="fs-4" />,
                  label: 'Settings',
                },
                {
                  key: 'logout',
                  icon: <LogoutOutlined className="fs-4" />,
                  label: 'Logout',
                },
              ]
            }
          ]}
        />
      </Sider>

      <Layout className="site-layout">
        <Header
          className="flex flex-wrap justify-between items-center p-4"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 56,
              height: 56,
            }}
          />
          <div className="flex gap-4 items-center">
            <Select
              defaultValue="en"
              style={{ width: 120 }}
              allowClear
              options={[
                { value: 'en', label: 'English' },
              ]}
            />
            <div className="flex gap-3 items-center dropdown mx-5">
              <div>
                <img
                  src={"https://demo.lead-pro.in/images/user.png"}
                  width={32}
                  height={32}
                  alt="User"
                  className='rounded-full'
                />
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout1;
