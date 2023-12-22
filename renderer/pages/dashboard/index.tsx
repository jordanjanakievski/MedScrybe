import React from 'react';
import Head from 'next/head';
import { Layout, Typography, Table, Progress, Card } from 'antd';
import Navbar from '../../components/navbar';

const { Content } = Layout;

const { Title } = Typography;

export default function NextPage() {
  return (
    <React.Fragment>
      <Head>
        <title>MedScrybe - Dashboard</title>
      </Head>

      <Navbar />

      <Content
        style={{
          padding: 48,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Title>Welcome Back!</Title>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          <Card
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Progress type="circle" percent={75} strokeColor={'#77B8FF'} />
            <Title level={4}>Card Value</Title>
          </Card>
          <Card
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Progress type="circle" percent={25} strokeColor={'#77B8FF'} />
            <Title level={4}>Card Value</Title>
          </Card>
          <Card
            bodyStyle={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Progress type="circle" percent={45} strokeColor={'#77B8FF'} />
            <Title level={4}>Card Value</Title>
          </Card>
        </div>
        <Table
          columns={[
            { title: 'Name', dataIndex: 'name' },
            { title: 'Age', dataIndex: 'age' },
            { title: 'Gender', dataIndex: 'gender' },
          ]}
          dataSource={[
            { name: 'John Doe', age: 32, gender: 'Male' },
            { name: 'Jane Doe', age: 27, gender: 'Female' },
            { name: 'Bob Smith', age: 45, gender: 'Male' },
          ]}
        />
      </Content>
    </React.Fragment>
  );
}
