import { getArticlesById } from "@/lib/newt"
import parse from 'html-react-parser'

async function Page(params: Readonly<{_id:string}>):Promise<JSX.Element> {
    const article = await getArticlesById(params._id)
    return (
        <>
            <h1 className="text-center text-2xl">{article?.title}</h1>
            <div className="prose">{parse(article?.body as string)}</div>
        </>
        
    )
}
export default Page