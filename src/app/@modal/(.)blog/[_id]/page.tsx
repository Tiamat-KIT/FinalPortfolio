import Modal from "@/components/parts/Modal"
import { getArticlesById } from "@/lib/newt"
import parse from 'html-react-parser'

export default async function ShowModal(params: {_id: string}){
    const article = await getArticlesById(params._id)
    
    return (
        <Modal>
            <h1 className="text-3xl text-center font-bold">{article?.title}</h1>
            <div className="container mx-auto h-auto prose">{parse(article?.body as string)}</div>
        </Modal>
   )
}