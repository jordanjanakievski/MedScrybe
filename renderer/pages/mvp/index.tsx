import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Layout, Form, Input, Button } from 'antd';
import { Ollama } from 'langchain/llms/ollama';
import Navbar from '../../components/navbar';

const ollama = new Ollama({
  baseUrl: 'http://localhost:11434', // Default value
  model: 'mistral-openorca', // Default value
});

const { TextArea } = Input;

const { Content } = Layout;

type ConfigFieldType = {
  config?: string;
};

type ModelFieldType = {
  model_input?: string;
};

const ifModelOutput = (model_output: string) => {
  if (model_output != '') {
    return <TextArea rows={10} defaultValue={model_output} />;
  }
};

// Should be added to a .env
const prompt_config =
  'You are a medical scribe. You will be given a notes template which you should preserve the structure followed by the stream of notes that are to be organized and edited to fit the template. You should not output anything other than the formatted notes\n';

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
  };

  const handleConfigChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConfig(e.target.value);
  };

  const handleSubmit = async () => {
    const stream = await ollama.stream(
      `${prompt_config}${format}\n${model_input}}`
    );

    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }

    setModelOutput(chunks.join(''));
  };

  return (
    <React.Fragment>
      <Head>
        <title>MedScrybe - MVP</title>
      </Head>

      <Navbar />

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
