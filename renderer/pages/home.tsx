import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { Layout, Typography, Form, Flex, Button, Input } from 'antd';

const { Header, Content } = Layout;

const { Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
};

export default function HomePage() {

  const router = useRouter();


  const onFinish = (values: any) => {
    console.log('Success:', values);
    router.push('/mvp');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

  return (
    <React.Fragment>
      <Head>
        <title>MedScrybe</title>
      </Head>

      <Content style={{ backgroundColor: '#77B8FF', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
        <Flex justify={'center'} align={'center'} vertical>
          <Image src="/images/logo.png" width={200} height={200} alt="MedScrybe Logo"/>
          <Title>Welcome to MedScrybe!</Title>
          <br />
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Content>
    </React.Fragment>
  );
}
