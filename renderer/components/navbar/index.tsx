// Create a navbar component
import React from 'react';
import { Layout, Menu } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';

const { Header } = Layout;

export default function Navbar() {
  const router = useRouter();

  return (
    <Header style={{ backgroundColor: '#77B8FF' }}>
      <Menu style={{ backgroundColor: '#77B8FF', display: 'flex', flexWrap: 'wrap' }} mode="horizontal">
        <Image src="/images/logo.png" width={60} height={60} alt="MedScrybe Logo"/>
        <Menu.Item key="1" onClick={() => router.push('/home')}>
          Login Page
        </Menu.Item>
        <Menu.Item key="2" onClick={() => router.push('/dashboard')}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="3" onClick={() => router.push('/mvp')}>
          MVP
        </Menu.Item>
      </Menu>
    </Header>
  );
}