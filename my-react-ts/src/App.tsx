import { useState } from "react"

type User = {
  name: string,
  age: number
}

function App() {

  //ts useState
  const [val, setVal] = useState(false)
  const changeVal = ()=>{
    setVal(!val)
  }

  //泛型
  const [user, setUser] = useState<User>({
    name: 'zhangsan',
    age: 22
  }) 
  const changeUser = () =>{
    setUser({
      name: user.name,
      age: user.age + 1
    })
  }

  const [user1, setUser1] = useState<User>(() => {
    return {
      name: 'lisi',
      age: 21
    }
  }) 
  const changeUser1 = () =>{
    setUser1(()=>{
      return {
        name: user1.name,
        age: user1.age + 1
      }
    })
  }

  const [user2, setUser2] = useState<User | null>(null) 
  const changeUser2 = () =>{
    setUser2({
      name: user1.name,
      age: user1.age + 1
    })
  }

  return (
    <div>
      <h2>类型推导</h2>
      {val? '1' : '0'}
      <button onClick={changeVal}>change</button>

      <h2>泛型</h2>
      <span>姓名: {user.name}</span> <br />
      <span>年龄: {user.age}</span> <button onClick={changeUser}>长一岁</button><br />
      <span>姓名: {user1.name}</span> <br />
      <span>年龄: {user1.age}</span><button onClick={changeUser1}>长一岁</button>

      <h2>useState初始值为null</h2>
      <span>姓名: {user2?.name}</span>
      <button onClick={changeUser2}>显示</button>

      <h2>Props与ts</h2>
      <button></button>
    </div>
  )
}

export default App
