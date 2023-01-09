// import React from "react";
// import { DatePicker } from 'antd';

// function Confirmation() {
//   return (
//     <>
//       <Header origin="home" />
//       <main>
//         <h1>Bienvenue sur la page de confirmation</h1>
//         <form action="post">
//           <label for="lastName">Invité: </label>
//           <input type="text" name="lastName" id="lastName" required />

//           <label for="lastName">
//             nombre de personne adulte (10 a 99 ans):{" "}
//           </label>
//           <input type="text" name="lastName" id="lastName" required />

//           <label for="lastName">nombre d'enfant (3 a 10 ans): </label>
//           <input type="text" name="lastName" id="lastName" required />
//         </form>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default Confirmation;

import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button, Form, Input, Select } from "antd";

import { InputNumber } from "antd";
const onChange = (value) => {
  console.log("changed", value);
};

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const App = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        return;
      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        return;
      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };
  return (
    <>
      <Header origin="home" />
      <main>
        <h1>Bienvenue sur la page de confirmation</h1>

        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="Invité"
            label="Invité"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Nombre d'adulte"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="other">3</Option>
            </Select>
            <p>Nombre d'adulte:</p>
            <InputNumber min={1} max={6} defaultValue={1} onChange={onChange} />
          </Form.Item>
          <div>
            <p>Nombre d'adulte:</p>
            <InputNumber min={1} max={6} defaultValue={1} onChange={onChange} />
          </div>
          <div>
            <p>Nombre d'enfant:</p>
            <InputNumber min={1} max={6} defaultValue={1} onChange={onChange} />
          </div>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </main>
      <Footer />
    </>
  );
};
export default App;
