import { getArticlesById } from "@/lib/newt"
import { ResolvingMetadata, Metadata } from "next"

export const revalidate = 0

type Props = {
    params: { _id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function genetateMetadata({params,searchParams}: Props,parent: ResolvingMetadata): Promise<Metadata> {
    const article = await getArticlesById(params._id)
    const ReturnMetadata: Metadata = {
        title: article?.title,
        description: article?.body.slice(0,100) + "...",
    }
    return ReturnMetadata
}

export default function Layout({children}: Readonly<{children: any}>) {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl text-center font-extrabold">Blog</h1>
            <div className="flex flex-col justify-center p-5 rounded-lg bg-cyan-300/30 normal-list">
                {children}
            </div>
        </div>
    )
}