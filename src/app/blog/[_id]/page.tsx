import { getArticlesById } from "@/lib/newt"
import parse from 'html-react-parser'
import { ModalProps } from "@/app/@modal/(.)blog/[_id]/page"

export default async function Page(params: ModalProps):Promise<JSX.Element> {
    const article = await getArticlesById(params._id)
    return (
        <>
            <h1 className="text-center text-2xl">{article?.title}</h1>
            <div className="prose">{parse(article?.body as string)}</div>
        </>
        
    )
}