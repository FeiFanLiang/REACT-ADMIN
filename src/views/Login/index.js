import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './login.less';

const LoginPage = () => {
    return (
        <div className="content">
            <div className="login-form-box">
                <div className="login-form-wrap">
                    <div className="login-form">
                        <h3>Aimm Auth</h3>
                        <p>请在此进行登录</p>
                        <Form layout={'vertical'}>
                            <Form.Item label="用户名">
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="密码">
                                <Input></Input>
                            </Form.Item>
                            <Button block>登录</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;