import { Button, Flex, Table } from 'antd';
import { useEffect, useState } from "react"
import { getUsersAPI } from '@/apis/UserAPI';
import { UserUtil } from '@/utils';

const User = ()=>{

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
                        <Button type="primary" size='small' onClick={()=>edit(item)}>编辑</Button>
                        <Button type="primary" danger size='small' disabled={item.default === 0}>删除</Button>
                    </Flex>
                )
            }
        },
    ];

    const edit = (item)=>{
        console.log(item)
    }

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

    return (
        <div>
            <Table columns={columns} dataSource={users} />
        </div>
    )
}

export default User