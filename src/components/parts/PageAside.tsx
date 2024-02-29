import { Separator } from "@radix-ui/react-dropdown-menu"
import { Link, Badge } from "lucide-react"
import Aside from "./Aside"
import PagenateBlog from "./PagenateBlog"

export default function PageAside({children}:{children: React.ReactNode}) {
    return (
        <div className="grid grid-cols-10 mx-auto gap-3 px-3 mt-3 h-fit">
            {/* <aside className="bg-green-200 col-span-2">
              <h3 className="text-xl text-center font-bold">
                Research
              </h3>
              <PagenateBlog />
            </aside> */}
            <main className="text-forebackground bg-slate-200 dark:bg-slate-500 col-span-10 md:col-span-8 rounded-lg">
                {children}
            </main>
            <Aside colSpan={2}>
              <h3>Blog</h3>
              <PagenateBlog blog={blog} toggle/>
              <Separator className="w-36 lg:w-80 mx-auto"/>
              <h3>Zenn RSS</h3>
              <PagenateBlog toggle blog={ZennRss.map((content) => {return content})}/>
              <Separator className="w-36 lg:w-80 mx-auto"/>
              <div className="container mx-auto px-[1.35rem]">
                <h3>過去に作成した<br />ポートフォリオ</h3>
                <div className="flex flex-col">
                  {[
                    "https://tiamat-kit.github.io",
                    "https://utakataportfolio.vercel.app/",
                    "https://new-tiamat-portfolio.vercel.app/",
                    "https://utakata-newportfolio.vercel.app/",
                    process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"]
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
            </Aside>
        </div>
    )
}