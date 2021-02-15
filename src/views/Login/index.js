import React,{useState} from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, UnlockOutlined } from "@ant-design/icons";
import "./login.less";

const LoginPage = (...props) => {
  debugger
  const onFinish = (form) => {
    debugger;
  };
  const [title,setTitle] = useState('title');

  const handleClick = () => {
    setTitle(title+'1');
  }

  return (
    <div className="content">
      <div className="login-form-box">
        <div className="login-form-wrap">
          <div className="login-form">
            <p onClick={handleClick} >asdasdad</p>
            <h3>Aimm Auth</h3>
            <p>请在此进行登录</p>
            <Form
              layout={"vertical"}
              autoComplete="off"
              requiredMark={false}
              onFinish={onFinish}
            >
              <input
                type="password"
                style={{ position: "fixed", left: 0, right: 0, opacity: 0 }}
              />
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "用户名必填!",
                    min: 6,
                    max: 12,
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  autoComplete="off"
                  size="large"
                  allowClear
                ></Input>
              </Form.Item>
              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "密码必填!",
                    min: 6,
                    max: 12,
                  },
                ]}
              >
                <Input.Password
                  prefix={<UnlockOutlined />}
                  autoComplete="off"
                  size="large"
                  allowClear
                ></Input.Password>
              </Form.Item>
              <Button type="primary" block htmlType="submit">
                登录
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
