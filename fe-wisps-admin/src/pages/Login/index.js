import { Card, Input, Form, Button, Checkbox, Divider, Modal } from 'antd';
import { CloudOutlined, QrcodeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './index.scss'


const inputs = {
    'phone' : <Form.Item name='phone'>
                <Input autoFocus size='large' placeholder="输入手机号" />
            </Form.Item>,
    'email' : <Form.Item name='email'>
                <Input autoFocus size='large' placeholder="输入邮箱" />
            </Form.Item>
}

const Login = ()=>{

    const [form] = Form.useForm();
    const [activeTabKey, setActiveTabKey] = useState('phone');
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='container'>
            <div className='login-sider'>
                
            </div>

            <div className='login-container'>
                <div className='login'>

                    <Button className='qrBtn' style={{border: "none"}}> 
                        <QrcodeOutlined />
                    </Button>
                    <div className="bubble">
                        <p>扫码登录</p>
                        <span className="arrow"></span>
                    </div>

                    <Card
                        style={{ border: 'none'}}
                        title="欢迎使用BEEM"
                        tabList={[
                            {
                                key: 'phone',
                                tab: '手机号',
                            },
                            {
                                key: 'email',
                                tab: '邮箱',
                            }
                        ]}
                        activeTabKey={activeTabKey}
                        onTabChange={ key => {
                            form.resetFields()
                            setActiveTabKey(key)
                        }}
                    >
                        <Form form={form} onFinish={values =>{
                            const remember = values['remember']
                            if(!remember){
                                setIsModalOpen(true);
                                return
                            }
                            console.log(values)
                        }}>
                            {inputs[activeTabKey]}
                            <Form.Item>
                                <Button size='large' type='primary' htmlType='submit' block>下一步</Button>
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked" label={null}>
                                <Checkbox>
                                    <span>
                                        我已阅读并同意
                                        <a style={{margin: "0 3px"}} href='http://www.baidu.com'>服务协议</a>
                                        和
                                        <a style={{margin: "0 3px"}} href='http://www.baidu.com'>隐私政策</a>
                                    </span>
                                </Checkbox>
                            </Form.Item>
                        </Form>
                    </Card>

                    <div className='otherLogin'>
                        <Divider className='text'>更多登录方式</Divider>
                        <Button disabled size="large" icon={<CloudOutlined />} block> SSO 登陆 </Button>
                    </div>

                    <div className='registerText'>
                        <span>还没有账号？</span>
                        <a href='http://www.baidu.com'>立即注册</a>
                    </div>
                </div>
            </div>

            <Modal
                okText='确定'
                cancelText='取消'
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={()=>{
                    form.setFieldValue('remember', true)
                    setIsModalOpen(false)
                }}
                onCancel={()=>setIsModalOpen(false)}>
                <p>必须勾选协议</p>
            </Modal>
        </div>
            
    )
}

export default Login