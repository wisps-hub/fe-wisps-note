import { List, Image } from "antd-mobile"
import { useEffect, useState } from "react"
import { getArticleListAPI, type ArticleVo } from "@/apis/article"
import { useNavigate } from "react-router-dom"

type Props = {
    id: number
}

const HomeList = (props : Props) => {

    const { id } = props
    
    const [articles, setArticles] = useState<ArticleVo[]>([])

    useEffect(()=>{
        const getArticles =async () => {
            const result = await getArticleListAPI({
                status : null,
                channelId : id,
                beginPubDate : '',
                endPubDate : '',
                uid : 2
            })
            setArticles(result.data)
        }
        getArticles()
    }, [id])

    const navigate = useNavigate()

    const goDtail = (articleId : number) =>{
        navigate(`/detail?id=${articleId}`)
    }

    return(
        <div>
            <List>
                {articles.map(article => (
                    <List.Item
                        onClick={() => goDtail(article.id)}
                        key={article.id}
                        prefix={
                            <Image src={article.images} 
                                style={{ borderRadius: 5 }} 
                                fit='cover' 
                                width={40} 
                                height={40}/>
                        }
                        description={article.pubTime}
                    >
                        {article.title}
                    </List.Item>
                ))}
            </List>
        </div>
    )
}

export default HomeList