import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Radio, Spin, notification } from "antd";

import Footer from "../components/Footer";
import Header from "../components/Header";
import emailjs from "@emailjs/browser";

function Confirmation() {
  const [form] = Form.useForm();

  const [isLoading, setLoading] = useState(false);

  const { TextArea } = Input;

  //pour les notification d'envoie
  const [api, contextHolder] = notification.useNotification();

  const notifSuccess = (success) => {
    api[success]({
      message: "Message envoyé",
      description:
        "Nous avons réceptionner votre message, nous vous répondrons le plus tôt possible.",
      className: "success",
    });
  };

  const notifError = (error) => {
    api[error]({
      message: "Erreur critique",
      description: "Il y a un probleme avec l'envoie de votre mesage. Veuillez-nous en excuser",
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
      // .send("service_xl7xbna", "template_0zu4t2t", value.user, "oNvH5Ri8Svb0ZNqVW")
      .send(
        process.env.REACT_APP_ACCESS_JSDEV,
        process.env.REACT_APP_TEMP_CONFIRMDEV,
        value.user,
        process.env.REACT_APP_ID_USERDEV
      )
      .then(
        (result) => {
          notifSuccess("success");
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
          <h2>Bienvenue sur la page de confirmation</h2>
        </div>
        <Spin spinning={isLoading}>
          <div className="main-conf">
            <div className="main-conf_text">
              <p>
                Afin de savoir qui va venir, et pouvoir nous organiser avec les prestataires, merci
                de nous confirmer votre présence (ou absence) ainsi que le nombre de participant via
                ce bref formulaire.
              </p>
              <p>Si un détail dois nous être communiqué, noté le dans champs "Observation".</p>
              <p>
                Pour toutes questions, remarque etc., on est joignable par téléphone, réseaux
                sociaux ou par le menu "Contact" du site.
              </p>
            </div>
            <span className="main-conf_bar"></span>
            <div className="main-conf_form">
              <Form
                form={form}
                {...layout}
                name="nest-messages"
                onFinish={sendEmail}
                size="large"
                validateMessages={validateMessages}>
                <Form.Item
                  label="Statut"
                  name={["user", "status"]}
                  initialValue="Présent">
                  <Radio.Group>
                    <Radio value="Présent"> Présent </Radio>
                    <Radio value="Absent"> Absent </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name={["user", "from_name"]}
                  label="Invité(s)"
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Input placeholder="Nom et Prénom du/des invité(s)" />
                </Form.Item>
                <Form.Item
                  label="Nombres d'adultes (10 à 99 ans)"
                  name={["user", "adults"]}>
                  <InputNumber
                    placeholder="0"
                    min={1}
                    max={10}
                  />
                </Form.Item>
                <Form.Item
                  label="Nombres d'enfants (3 à 10 ans)"
                  name={["user", "child"]}>
                  <InputNumber
                    placeholder="0"
                    defaultValue={0}
                    min={0}
                    max={10}
                  />
                </Form.Item>
                <Form.Item
                  label="Message (facultatif)"
                  name={["user", "Votre message"]}>
                  <TextArea rows={4} />
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

export default Confirmation;
