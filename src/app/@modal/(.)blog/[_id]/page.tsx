import Modal from "@/components/parts/Modal"
import { getArticlesById } from "@/lib/newt"
import parse from 'html-react-parser'

export const revalidate = 0

async function ShowModal(params: any){
    const article = await getArticlesById(params._id)
    
    return (
        <div className="absolute z-[9999] md:top-[50%] md:left-[15%] lg:left-[50%]">
            <Modal>
                <h1 className="text-3xl text-center font-bold">{article?.title}</h1>
                <div className="container mx-auto h-auto prose">{parse(article?.body as string)}</div>
            </Modal>
        </div>
   )
}

export default ShowModal
