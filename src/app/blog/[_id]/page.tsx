import { getArticlesById } from "@/lib/newt"
import parse from 'html-react-parser'


export default async function Page(params: { _id: string }) {
    const article = await getArticlesById(params._id)
    return (
        <>
            <h1 className="text-center text-2xl">{article?.title}</h1>
            <div className="prose">{parse(article?.body as string)}</div>
        </>
        
    )
}