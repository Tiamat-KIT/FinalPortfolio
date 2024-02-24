"use client";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"
import { ArrowBigRightDashIcon,ArrowBigLeftDashIcon } from "lucide-react";
import { BlogPost } from "@/lib/newt";
import { ZennRssFeedType, getZennRssFeed } from "@/lib/zenn";
import LinkBadge from "./BadgeLinkAnchor";

type PagenateContents = ZennRssFeedType[] | BlogPost[]; 
export default function PagenateBlog({blog,toggle}:{blog: PagenateContents,toggle?: boolean}) {
    const [selected, setSelected] = useState<number>(0)
    return (
        <>
            <div className={`flex flex-col justify-center text-center container mx-auto px-[1.35rem]`}>
            {blog.map((content, index) => {
                if("pageContent" in content){ return (
                    <LinkBadge href={content.pageContent.link} title={content.pageContent.title as string} key={index} />
                )}else{
                return (
                    <LinkBadge href={`/blog/${content._id}`} title={content.title} key={index} />
                )}
            })}
            </div>
            {toggle && <Pagination className="w-12 flex justify-center">
                 <div className="lg:block md:hidden ">
                    <PaginationPrevious onClick={() => {if(selected > 0)setSelected((prop) => prop - 1)}}/>
                </div>
                <div className="lg:hidden md:block m-auto hover:bg-slate-600 " onClick={() => {if(selected > 0)setSelected((prop) => prop - 1)}}>
                    <ArrowBigLeftDashIcon />
                </div>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink>{selected}</PaginationLink>
                    </PaginationItem>
                </PaginationContent>
                <div className="lg:block md:hidden ">
                    <PaginationNext onClick={() => setSelected((prop) => prop + 1)}/>
                </div>
                <div className="lg:hidden md:block m-auto" onClick={() => setSelected((prop) => prop + 1)}>
                    <ArrowBigRightDashIcon />
                </div>
            </Pagination>}
        </>
    )
}