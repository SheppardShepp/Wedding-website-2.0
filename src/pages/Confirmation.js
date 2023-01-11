import React, { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { Button, Form, Input } from "antd";
import { InputNumber } from "antd";
import { Select } from "antd";

function Confirmation() {
  const handleChange = (value) => {
    console.log(value);
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

  const onChange = (value) => {
    console.log("changed", value);
  };
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  return (
    <>
      <Header origin="home" />
      <main>
        <div className="space"></div>
        <div className="title">
          <h2>Bienvenue sur la page de confirmation</h2>
          <p>
            Afin de savoir qui va venir, pour pouvoir nous organiser avec les prestataires, nous
            aimerions que vous nous confirmiez votre présence (ou absence) avec le nombre de
            participant via ce bref formulaire. Pour tout autres détails, nous sommes évidemment
            disponible par le formulaire de contact, par telephone ou réseau sociaux.
          </p>
        </div>
        <div className="formulaire">
          <Form
            {...formItemLayout}
            validateMessages={validateMessages}
            layout={formLayout}
            form={form}
            size="large"
            initialValues={{
              layout: formLayout,
            }}
            onValuesChange={onFormLayoutChange}>
            <Form.Item
              name={["user", "name"]}
              label="Invité"
              className="formLabel"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Input placeholder="Nom du/des invité(s)" />
            </Form.Item>

            <div className="call">
              <div className="call-1">
                <div className="call-1_bloc">
                  <div className="call-1_bloc_text">
                    <p>Nous seront </p>
                    <span className="point">:</span>
                  </div>
                  <Select
                    labelInValue
                    defaultValue={{
                      value: "Présent(s)",
                      label: "Présent(s)",
                    }}
                    style={{
                      width: 120,
                    }}
                    size="large"
                    onChange={handleChange}
                    options={[
                      {
                        value: "Présent(s)",
                        label: "Présent(s)",
                      },
                      {
                        value: "Absent(s)",
                        label: "Absent(s)",
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="InputNumber">
                <div className="InputNumber_bloc">
                  <div className="InputNumber_bloc_text">
                    <p>Nombre d'adulte(s) ( 10 à 99 ans )</p>
                    <span className="point">:</span>
                  </div>
                  <InputNumber
                    min={1}
                    max={10}
                    size="large"
                    defaultValue={0}
                    onChange={onChange}
                  />
                </div>
                <div className="InputNumber_bloc">
                  <div className="InputNumber_bloc_text">
                    <p>Nombre d'enfant(s) ( 3 à 10 ans )</p>
                    <span className="point">:</span>
                  </div>
                  <InputNumber
                    min={1}
                    max={10}
                    size="large"
                    defaultValue={0}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>

            <Form.Item {...buttonItemLayout}>
              <Button
                type="primary"
                className="buttonCenter">
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

export default Confirmation;
