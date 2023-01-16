import React, { useState } from "react";
import { Button, Form, Input, Spin, notification } from "antd";

import Header from "../components/Header";
import Footer from "../components/Footer";

import emailjs from "@emailjs/browser";

function Contact() {
  //pour le rest du formumlaire
  const [form] = Form.useForm();

  const [isLoading, setLoading] = useState(false);

  //pour les notification d'envoie
  const [api, contextHolder] = notification.useNotification();

  const notifSuccess = (success) => {
    api[success]({
      message: "Message envoyé",
      description:
        "Nous avons réceptionner votre message, nous vous répondrons le plus tôt possible.",
      // duration: 0,
      className: "success",
    });
  };

  const notifError = (error) => {
    api[error]({
      message: "Erreur critique",
      description: "Il y a un probleme avec l'envoie de votre mesage. Veuillez-nous en excuser",
      // duration: 0,
      className: "error",
    });
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

  const sendEmail = (value) => {
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_ACCESS_JS,
        process.env.REACT_APP_TEMP_CONTACT,
        value.user,
        process.env.REACT_APP_ID_USER
      )
      .then(
        (result) => {
          notifSuccess("success");
          // notifError("error");
          console.log(result);
          setLoading(false);
          form.resetFields();
        },
        (error) => {
          notifError("error");
          console.log(error);
          setLoading(false);
        }
      );
  };

  return (
    <>
      {contextHolder}
      <Header origin="home" />
      <main>
        <div className="space">
          <h2>Formulaire de contact</h2>
        </div>
        <Spin spinning={isLoading}>
          <div className="main-contact">
            <div className="main-contact_text">
              <p>
                Pour toute questions, renseignements ou détails à porter à notre attention, il vous
                suffit de remplir les champs ci-dessous.
              </p>
            </div>

            <div className="main-contact_form">
              <Form
                form={form}
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
                    htmlType="submit"
                    // onClick={openNotification()}
                  >
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
