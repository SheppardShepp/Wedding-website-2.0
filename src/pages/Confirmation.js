import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Radio, Spin } from "antd";

import Footer from "../components/Footer";
import Header from "../components/Header";

import emailjs from "@emailjs/browser";

function Confirmation() {
  const [isLoading, setLoading] = useState(false);
  const sendEmail = (value) => {
    setLoading(true);
    emailjs.send("service_jqi8hen", "template_0zu4t2t", value.user, "oNvH5Ri8Svb0ZNqVW").then(
      (result) => {
        alert("Votre message à été expédié, nous vous répondrons rapidement");
        console.log(result);
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
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

  const { TextArea } = Input;
  return (
    <>
      <Header origin="home" />
      <main>
        <div className="space">
          <h2>Bienvenue sur la page de confirmation</h2>
        </div>
        <Spin spinning={isLoading}>
          <div className="main-form">
            <div className="title_size">
              <p>
                Afin de savoir qui va venir, et pouvoir nous organiser avec les prestataires, merci
                de nous confirmer votre présence (ou absence) ainsi que le nombre de participant via
                ce bref formulaire.
              </p>
              <p>Si un detail dois nous etre communiquer, noté le dans champs "Obersavtion".</p>
              <p>
                Pour toutes questions, remarque etc., on est joigniable par téléphone, reseau
                sociaux ou par le menu "Contact" du site.
              </p>
            </div>
            <div className="form-conf">
              <Form
                {...layout}
                name="nest-messages"
                onFinish={sendEmail}
                size="large"
                validateMessages={validateMessages}>
                <Form.Item
                  label="Statut"
                  name={["user", "status"]}>
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
                  <Input placeholder="Nom du/des invité(s)" />
                </Form.Item>
                <Form.Item
                  label="Nombres d'adultes (10 à 99 ans)"
                  name={["user", "adults"]}>
                  <InputNumber
                    min={1}
                    max={10}
                  />
                </Form.Item>
                <Form.Item
                  label="Nombres d'enfants (3 à 10 ans)"
                  name={["user", "child"]}>
                  <InputNumber
                    min={1}
                    max={10}
                  />
                </Form.Item>
                <Form.Item
                  label="Message (facultative)"
                  name={["user", "message"]}>
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
