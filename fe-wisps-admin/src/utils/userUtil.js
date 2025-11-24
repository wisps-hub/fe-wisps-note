import { Tag } from 'antd';


const UserUtil = {
    toColumnData(user){
        return {
            ...user,
            key: user.id
        }
    },

    toTag(state){
        switch(state){
            case 1:
                return <Tag key={state} color="default" variant="outlined"> 待激活 </Tag>
            case 2:
                return <Tag key={state} color="blue" variant="outlined"> 激活 </Tag>
            case 3:
                return <Tag key={state} color="green" variant="outlined"> 实名 </Tag>
            case 4: 
                return <Tag key={state} color="red" variant="outlined"> 冻结 </Tag>
            default:
                return <Tag key={state} color="default" variant="outlined"> 未知 </Tag>
        }
    }
}

export default UserUtil;