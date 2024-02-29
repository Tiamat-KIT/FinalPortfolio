import Link from "next/link"
import { Badge } from "../ui/badge"

export default function Portfolio() {
    return (
        <div className="container mx-auto px-[1.35rem]">
            <h3>過去に作成した<br />ポートフォリオ</h3>
            <div className="flex flex-col">
                {[
                "https://tiamat-kit.github.io",
                "https://utakataportfolio.vercel.app/",
                "https://new-tiamat-portfolio.vercel.app/",
                "https://utakata-newportfolio.vercel.app/",
                `https://${ process.env.VERCEL_URL ? process.env.VERCEL_URL : process.env.NEXT_PUBLIC_VERCEL_URL}` || "http://localhost:3000"]
                .map((url, index) => {
                    return (
                    <Link key={index} href={url} legacyBehavior>
                        <Badge className="bg-card text-foreground w-36 md:w-28 lg:w-80 flex justify-center mt-3">
                        {index + 1}代目
                        </Badge>
                    </Link>
                    )
                })}
            </div>
        </div>
    )
}