import { Button, Modal } from 'antd';
import { useState } from 'react';


const Setting = ()=>{

    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button type="primary" danger size="small" onClick={showModal}> 删除 </Button>
            <Modal
                title="删除"
                open={open}
                onOk={hideModal}
                onCancel={hideModal}
                okText="确认"
                cancelText="取消"
            >
                <p>确定删除数据吗？</p>
            </Modal>
        </div>
    )
}

export default Setting