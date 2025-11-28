import { Button, Table, Tag, Modal} from "antd";
import { ExclamationCircleFilled } from '@ant-design/icons';
import axios from "axios";
import { useEffect, useState } from "react";


const Permession = ()=>{

  const { confirm } = Modal;
  const showConfirm = (item) => {
    confirm({
      title: '删除',
      icon: <ExclamationCircleFilled />,
      content: '你确定要删除吗？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        axios.delete(`http://localhost:8000/menus/${item.id}`).then(res=>{
          setMenuList(menuList.filter(menu=>menu.id!==item.id))
        })
      }
    });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (text) => <b>{text}</b>
    },
    {
      title: '权限名称',
      dataIndex: 'label',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      render: (text) => <Tag color="gold">{text}</Tag>
    },
    {
      title: '操作',
      render: (item) => {
        return <div>
          <Button size="small" type="primary" danger onClick={()=>{showConfirm(item)}}>删除</Button>
          <Button size="small" type="primary">编辑</Button>
        </div>
      }
    }
  ]


  const [menuList, setMenuList] = useState([])

  useEffect(()=>{
    const initMenuList = ()=>{
      axios.get("http://localhost:8000/menus?_embed=subMenus").then(res=>{
        setMenuList(res.data)
      })
    }
    initMenuList();
  }, [])

  return (
      <div>
          <Table dataSource={menuList}
           columns={columns} 
           childrenColumnName="subMenus"
           pagination={{pageSize:10}} />
      </div>
  )
}

export default Permession