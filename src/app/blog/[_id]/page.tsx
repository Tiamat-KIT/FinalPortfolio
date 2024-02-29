import { getArticlesById } from "@/lib/newt"
import parse from 'html-react-parser'
import {Metadata,ResolvingMetadata} from "next"

export const revalidate = 0

type Props = {
    params: { _id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function genetateMeta({params,searchParams}: Props,parent: ResolvingMetadata): Promise<Metadata> {
    const article = await getArticlesById(params._id)
    const ReturnMetadata: Metadata = {
        title: article?.title,
        description: article?.body.slice(0,100) + "...",
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
