import { NavBar } from 'antd-mobile'
import './style.css'
import { useEffect, useState } from 'react'
import { getArticleAPI, type ArticleVo } from '@/apis/article'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Detail = ()=>{

    const [params] = useSearchParams()
    const id = params.get('id')

    const [article, setArticle] = useState<ArticleVo | null>()

    useEffect(()=>{
        const getArticle = async () => {
            const result = await getArticleAPI(id)
            setArticle(result.data)
        }
        getArticle()
    }, [id])

    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    return(
        <div>
            <NavBar onBack={back}>{article?.title}</NavBar>
            <div dangerouslySetInnerHTML={{ __html: article?.content }}></div>
        </div>
    )
}

export default Detail