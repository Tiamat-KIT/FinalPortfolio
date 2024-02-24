import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/parts/ThemeProvider";
import NavigationHeader from "@/components/parts/Header";
import Container from "@/components/parts/Container";
import PagenateBlog from "@/components/parts/PagenateBlog";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getArticles } from "@/lib/newt";
import { getZennRssFeed } from "@/lib/zenn";
import Aside from "@/components/parts/Aside";
const fontSans = FontSans({ subsets: ["latin"],variable: "--font-sans" });

export const metadata: Metadata = {
  title: "泡沫のポートフォリオ",
  description: "泡沫（本名じゃない）のポートフォリオサイト。今まで作ったポートフォリオサイトの履歴とか、Zennで書いた記事の一覧とか、ブログとかを書いてます",
  icons: "/utakata.ico"
}

export default async function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const blog = await getArticles();
  const ZennRss = await getZennRssFeed()
  return (
    <html lang="ja">
      <body className={
        cn(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          fontSans.variable
        )
      }>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationHeader 
            blog={<PagenateBlog blog={blog}/>}
            zenn={<PagenateBlog blog={ZennRss.map((content) => {return content})}/>}
            portfolio={
              <div className="container mx-auto px-[1.35rem]">
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
            }
          />
          <div className="grid grid-cols-10 mx-auto gap-3 px-3 mt-3 h-fit">
            {/* <aside className="bg-green-200 col-span-2">
              <h3 className="text-xl text-center font-bold">
                Research
              </h3>
              <PagenateBlog />
            </aside> */}
            <main className="text-forebackground bg-slate-200 dark:bg-slate-500 col-span-10 md:col-span-8 rounded-lg">
                {children}
                {modal}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
