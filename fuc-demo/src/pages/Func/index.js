import { forwardRef, memo, useCallback, useImperativeHandle, useMemo, useReducer, useRef, useState } from "react"
import Counter from './Counter'
import PCompt from './PSComp'

function reducer(state, action){
    switch(action.type){
        case 'INC':
            return state + 1
        case 'DES':
            return state <= 0? state : state - 1
        case 'SET':
            return action.value
        default:
            return state
    }
}

function fib(n){
    console.log('函数执行')
    if(n < 3)
        return 1
    return fib(n -2) + fib(n-1)
}

const MemoSon = memo(function SonComp({number, list}){
    console.log('子组建渲染')
    return <div>son component</div>
})

const SonInput = memo(function Input({onChange}){
    console.log('子组件渲染了')
    return <input type='text' onChange={(e) => {onChange(e.target.value)}} />
})

const MInput =  forwardRef((props, ref) => {
    return <input type='text' ref = {ref} />
})

const SInput =  forwardRef((props, ref) => {
    const inpRef = useRef(null)
    //聚焦输入框
    const focusInput = ()=>{
        inpRef.current.focus();
    }
    //暴露方法出去
    useImperativeHandle(ref, ()=>{
        return{
            focusInput
        }
    })
    return <input type='text' ref = {inpRef} />
})

const Func = ()=>{

    // useReducer
    const [state, dispatch] = useReducer(reducer, 0)

    // useMemo
    const [count1, setCount1] = useState(0)
    useMemo(()=>{
        return fib(count1)
    }, [count1])
    const [count2, setCount2] = useState(0)
    console.log('组件重新加载')

    //React.memo方法
    const [count, setCount] = useState(0)
    const list = useMemo(()=>{
        return [1,2,3]
    }, [])

    //useCallback
    const changeHandler = useCallback((value) => {console.log('value', value)}, [])
    const [count3, setCount3] = useState(0)

    //forwardref
    const inputRef = useRef(null)
    const showRef = () => {
        console.log(inputRef)
    }

    //useInperativeHandle
    const sRef = useRef(null)
    const focusInput = () =>{
        sRef.current.focusInput()
    }

    //class生命周期
    const [show, setShow] = useState(true)

    return (
        <div>
            <h2>useReducer</h2> 
            <button onClick={()=>{dispatch({type : 'DES'})}}>-</button>
            {state}
            <button onClick={()=>{dispatch({type : 'INC'})}}>+</button>
            <button onClick={()=>{dispatch({type : 'SET', value: 10})}}>10</button>

            <h2>useMemo 缓存计算结果</h2>
            <button onClick={()=>setCount1(count1 + 1)}>change count1 : {count1}</button>
            <button onClick={()=>setCount2(count2 + 1)}>change count2 : {count2}</button>

            <h2>React.memo方法 在Props没有变化时跳过渲染</h2>
            <button onClick={()=>setCount(count + 1)}>change count : {count}</button>
            <MemoSon number={count} list={list}/>

            <h2>useCallback 组件多次加载的时候缓存函数</h2>
            <SonInput onChange={changeHandler} />
            <button onClick={()=>setCount3(count3 + 1)}>change count : {count3}</button>

            <h2>forwardRef 使用ref暴露dom节点给父组件</h2>
            <MInput ref={inputRef}/>
            <button onClick={showRef}>showRef</button>

            <h2>useInperativeHandle 通过ref暴露子组件中的方法</h2>
            <SInput ref={sRef}/>
            <button onClick={focusInput}>focusInput</button>

            <h2>class基础结构 类组件生命周期</h2>
            {show && <Counter />}
            <button onClick={()=>{setShow(!show)}}>隐藏组件</button>
            
            <h2>class组件通信</h2>
            <PCompt />

        </div>
    )
}

export default Func