import { Tabs } from 'antd-mobile'
import './style.css'
import { useEffect, useState } from 'react'
import { fetchChannelsAPI, type ChannelVo } from '../../apis/channel'
import HomeList from './HomeList/HomeList'

const Home = ()=>{

    const [channels, setChannels] = useState<ChannelVo[]>([])

    useEffect(()=>{
        const getchannels = async () => {
            const result = await fetchChannelsAPI()
            setChannels(result.data)
        }
        getchannels()
    }, [])

    return(
        <div>
             <Tabs defaultActiveKey={'1'}>
                {
                    channels.map(channel => 
                        <Tabs.Tab title={channel.channelName} key={channel.id}>
                            <HomeList id={channel.id} />
                        </Tabs.Tab>
                    )
                }
            </Tabs>
        </div>
    )
}

export default Home