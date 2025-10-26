import { Component } from "react";

class Counter extends Component{
    state = {
        count: 0
    }

    componentDidMount(){
        console.log("子组件加载完毕")  
        this.timer = setInterval(()=>{
            console.log('定时器开始执行')
        }, 2000)  
    }

    componentWillUnmount(){
        console.log("子组件卸载完毕")
        clearInterval(this.timer)
    }

    setCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return <div>
                <button onClick={this.setCount}>自增组件 {this.state.count}</button>
            </div>
    }
}

export default Counter