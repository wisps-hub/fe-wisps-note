import { Button, Flex, Table, Popconfirm, Modal, Form, Input, Switch, Select } from 'antd';
import { useEffect, useState } from "react"
import { createUserAPI, deleteUserAPI, getUserAPI, getUsersAPI } from '@/apis/UserAPI';
import { RoleUtil, UserUtil } from '@/utils';
import { getRolesAPI } from '@/apis/Role';

const User = ()=>{

    //删除
    const confirmDel = item => {
        deleteUserAPI(item.id)
    };

    //表格定义
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: text => <b>{text}</b>,
        },
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
            render:  (item) => item.title
        },
        {
            title: '状态',
            key: 'state',
            dataIndex: 'state',
            render:  (state) =>{
                return (
                    UserUtil.toTag(state)
                )
            }
        },
        {
            title: '操作',
            render:  (item) =>{
                return (
                    <Flex gap="small" wrap>
                        <Button type="primary" size='small' onClick={()=> showEditor(item)}>编辑</Button>
                        <Popconfirm
                            title="确定删除吗?"
                            onConfirm={()=>confirmDel(item)}
                            okText="确定"
                            cancelText="取消"
                        >
                            <Button type="primary" danger size='small' disabled={item.default === 0} > 删除 </Button>
                        </Popconfirm>
                    </Flex>
                )
            }
        },
    ];

    //渲染用户列表
    const [users, setUsers] = useState([])
    useEffect(()=>{
        const getUsers = async ()=>{
            const res = await getUsersAPI();
            if(res?.length > 0){
                setUsers(res.map(item=>UserUtil.toColumnData(item)))
            }
        }
        getUsers();
    }, [])

    //角色列表
    const [roles, setRoles] = useState();
    useEffect(()=>{
        const getRoles = async ()=>{
            const res = await getRolesAPI();
            if(res?.length > 0){
                setRoles(res.map(item=>RoleUtil.toOptions(item)))
            }
        }
        getRoles();
    }, [])

    
    const [form] = Form.useForm();
    const [formInitValues, setFormInitValues] = useState();
    const [open, setOpen] = useState(false);

    //展示编辑表单
    const showEditor = async (item)=>{
        const res = await getUserAPI(item.id);
        const user = res[0];
        setFormInitValues({
            id: user.id,
            username: user.name,
            password: 111111,
            role: user.roleId,
            state: user.state > 1 && user.state < 4
        })
        setOpen(true);
    }

    //创建or更新
    const onCreate = values => {
        console.log('Received values of form: ', values);
        // createUserAPI(values);
        setOpen(false);
    };

    return (
        <div>
            <Flex gap="small" wrap style={{marginBottom:"10px"}}>
                <Button type="primary" onClick={() => setOpen(true)}>添加用户</Button>
            </Flex>

            <Table columns={columns} dataSource={users} pagination={{pageSize:10}}/>

            <Modal
                open={open}
                title={formInitValues?.id? "更新用户" : "新建用户"}
                okText={formInitValues?.id? "更新" : "新建"}
                cancelText="取消"
                okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
                onCancel={() => setOpen(false)}
                destroyOnHidden
                modalRender={dom => (
                    <Form
                        layout="vertical"
                        form={form}
                        initialValues={formInitValues}
                        clearOnDestroy
                        onFinish={values => onCreate(values)}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item hidden name="id">
                    <Input />
                </Form.Item>
                <Form.Item name="username" label="用户名" rules={[{ required: true, message: '输入用户名' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="初始密码">
                    <Input />
                </Form.Item>
                <Form.Item name="role" label="角色">
                    <Select options={roles} />
                </Form.Item>
                <Form.Item name="state" label="是否激活" className="collection-create-form_last-form-item">
                    <Switch />
                </Form.Item>
            </Modal>
        </div>
    )
}

export default User