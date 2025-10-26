import { Component } from "react";

class SCompt extends Component{
    render(){
        return <div>
                这是一个子组件
                {this.props.message}
                <button onClick={() => this.props.onGetSMsg("son value")}>传数据给父组件</button>
            </div>
    }
}

class PCompt extends Component{

    state = {
        msg: 'parent value'
    }

    getSonMsg = (msg) =>{
        console.log(msg)
    }

    render(){
        return <div>
                这是一个父组件
                <SCompt message = {this.state.msg} onGetSMsg = {this.getSonMsg}/>
            </div>
    }
}

export default PCompt