"use client"
import Modal from "@/components/parts/Modal"
import { BlogPost, getArticlesById } from "@/lib/newt"
import parse from 'html-react-parser'
import {useEffect, useState} from "react"

type ModalProps =  Readonly<{
    _id: string
}>

function ShowModal(params: ModalProps): JSX.Element{
    /* const article = await getArticlesById(params._id) */
    const [article, setArticle] = useState<BlogPost>()
    useEffect(() => {
        const fetchArticle = async () => {
            const fetchedArticle = await getArticlesById(params._id)
            setArticle(fetchedArticle as BlogPost)
        }
        fetchArticle()
    }, [params._id])
    
        return (
            <Modal>
                {article && (
                    <>
                        <h1 className="text-3xl text-center font-bold">{article.title}</h1>
                        <div className="container mx-auto h-auto prose">{parse(article.body as string)}</div>
                    </>
                )}
            </Modal>
       )
}

export default ShowModal