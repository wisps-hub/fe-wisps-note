import { useEffect } from "react"
import { create } from "zustand"

const createChannelStore = (set) => {
    return {
        channels: [],
        fetchChannels: () =>{
            set({
                channels: ['111','222','333']
            })
        }
        // fetchChannels: async () =>{
        //     const result = await fetch(URL)
        //     console.log(result)
        //     set({channels: result.data.localNews.data.rows.first})
        // }
    }
}

const createCountStore = (set) => {
    return {
        count: 0,
        // 基于元数据自增计算
        inc: ()=>{
            set((state)=>{
                return {
                    count: state.count + 1
                }    
            })
        },
        //直接赋值
        update: ()=>{
            set({count: 100})
        }
    }
}

const useStore = create((...a)=>{
    return{
        ...createCountStore(...a),
        ...createChannelStore(...a)
    }
    
})

const Zustand = () =>{
    const {count, inc, update, fetchChannels, channels} = useStore()

    useEffect(()=>{
        fetchChannels();
    }, [fetchChannels])

    return (
        <div>
            <h2>Zustand基本用法</h2>
            <button onClick={inc}>自增按钮{count}</button>
            <button onClick={update}>重置按钮{count}</button>

            <h2>Zustand异步支持</h2>
            <ul>
                {channels.map((item, idx) => <li key={item[idx]}>{item[idx]}</li>)}
            </ul>

            <h2>Zustand切片模式</h2>

        </div>
    )
}

export default Zustand