import { getArticlesById } from "@/lib/newt"
import parse from 'html-react-parser'
import {Metadata,ResolvingMetadata} from "next"

type Props = {
    params: { _id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata({params,searchParams}: Props,parent: ResolvingMetadata): Promise<Metadata> {
    const article = await getArticlesById(params._id)
    const ReturnMetadata: Metadata = {
        title: article?.title,
        description: article?.body.slice(0,100) + "...",
        authors: {name: "Utakata",url: "https://github.com/Tiamat-KIT"},
        openGraph: {
            type: "article",
            title: article?.title,
            description: article?.body.slice(0,100) + "...",
            url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/blog/` + params._id,
            images: `https://${process.env.VERCEL_URL ? process.env.VERCEL_URL : process.env.NEXT_PUBLIC_VERCEL_URL}/api/og?title=${article?.title}&author=Utakata`
        }
    }
    return ReturnMetadata
}

async function Page(params: any):Promise<JSX.Element> {
    const article = await getArticlesById(params._id)
    return (
        <>
            <h1 className="text-center text-2xl">{article?.title}</h1>
            <div className="prose">{parse(article?.body as string)}</div>
        </>
        
    )
}
export default Page
