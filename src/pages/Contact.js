import React from "react";
import { Button, Form, Input } from "antd";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>
      <Header origin="home" />
      <main>
        <div className="space"></div>
        <div className="title">
          <h2>Formulaire de contact</h2>
          <p>
            Pour toute questions, renseignements ou détails à porter à notre attention, il vous
            suffit de remplir les champs ci-dessous.
          </p>
        </div>
        <div className="contact">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            size="large"
            validateMessages={validateMessages}>
            <Form.Item
              name={["user", "name"]}
              label="Invité"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input placeholder="Nom du/des invité(s)" />
            </Form.Item>
            <Form.Item
              name={["user", "Téléphone"]}
              label="Téléphone">
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "message"]}
              label="Votre message">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}>
              <Button
                type="primary"
                htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
