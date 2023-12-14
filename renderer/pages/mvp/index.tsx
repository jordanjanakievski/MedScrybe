import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Layout, Form, Input, Button } from 'antd';

import { Ollama } from 'langchain/llms/ollama';

const ollama = new Ollama({
  baseUrl: 'http://localhost:11434', // Default value
  model: 'llama2:13b', // Default value
});

const { TextArea } = Input;

const { Header, Content } = Layout;

type ConfigFieldType = {
  config?: string;
};

type ModelFieldType = {
  model_input?: string;
};

const ifModelOutput = (model_output: string) => {
  if (model_output != '') {
    return (
      <TextArea rows={10} defaultValue={model_output} />
    );
  }
}


export default function MVP() {
  const [config, setConfig] = useState<string>('');
  const [format, setFormat] = useState<string>('');
  const [model_input, setModelInput] = useState<string>('');
  const [model_output, setModelOutput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setModelInput(e.target.value);
  };

  const handleSave = () => {
    setFormat(config);
  }

  const handleConfigChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConfig(e.target.value);
  }

  const handleSubmit = async () => {
    const stream = await ollama.stream(`Using this format: ${format} Format the following accordingly by filling in the places with <Notes> ${model_input}}`);

    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    setModelOutput(chunks.join(''));
  };

  return (
    <React.Fragment>
      <Head>
        <title>MedScrybe - Dashboard</title>
      </Head>

      <Header>
        <Link href="/home">
          <a>Back to Sign In</a>
        </Link>
      </Header>

      <Content style={{ padding: 48 }}>
        <Form>
          <Form.Item<ConfigFieldType> name="config" label="Config">
            <TextArea rows={10} onChange={handleConfigChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSave}>
              Save
            </Button>
          </Form.Item>
        </Form>
        <p>{config}</p>
        <Form>
          <Form.Item<ModelFieldType> name="model_input" label="Model Input">
            <TextArea rows={4} onChange={handleInputChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p>{model_input}</p>
        {ifModelOutput(model_output)}
      </Content>
    </React.Fragment>
  );
}
