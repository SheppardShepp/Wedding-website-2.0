import React, { useState } from "react";
import { Button, Form, Input, Spin } from "antd";

import Header from "../components/Header";
import Footer from "../components/Footer";

import emailjs from "@emailjs/browser";

function Contact() {
  const [isLoading, setLoading] = useState(false);
  const sendEmail = (value) => {
    setLoading(true);
    emailjs.send("service_jqi8hen", "template_4jqh6a9", value.user, "oNvH5Ri8Svb0ZNqVW").then(
      (result) => {
        alert("Votre message a été expedié, nous vous repondrons rapidement");
        console.log(result.text);
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
        // DES BISOUS!
      }
    );
  };

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

  return (
    <>
      <Header origin="home" />
      <main>
        <div className="space">
          <h2>Formulaire de contact</h2>
        </div>
        <Spin spinning={isLoading}>
          <div className="main-form">
            <div className="title_size">
              <p>
                Pour toute questions, renseignements ou détails à porter à notre attention, il vous
                suffit de remplir les champs ci-dessous.
              </p>
            </div>

            <div className="form-contact">
              <Form
                {...layout}
                name="nest-messages"
                onFinish={sendEmail}
                size="large"
                validateMessages={validateMessages}>
                <Form.Item
                  name={["user", "from_name"]}
                  label="Invité"
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Input placeholder="Nom du/des invité(s)" />
                </Form.Item>
                <Form.Item
                  name={["user", "phone"]}
                  label="Téléphone">
                  <Input placeholder="facultatif" />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[
                    {
                      type: "email",
                    },
                  ]}>
                  <Input placeholder="facultatif" />
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
          </div>
        </Spin>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
