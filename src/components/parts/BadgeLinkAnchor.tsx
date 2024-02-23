import NextLink from "next/link"
import type { Route } from "next/types";

type LinkBadgeProps<R extends string> = {
    href: Route<R>,
    title: string,

}
export default function LinkBadge<R extends string>(
    {
        href,
        title,
    }: Readonly<LinkBadgeProps<R>>){
        return (
            <div className="w-36 md:w-28 lg:w-80 flex mt-3">
                <NextLink href={href} className="text-center">
                    <div className="bg-card text-foreground rounded-lg hover:bg-foreground/50">{title}</div>
                </NextLink>
            </div>
        )

}