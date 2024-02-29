"use client"
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionItem } from "../ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ModeToggle } from "./ToggleTheme";
import { AlignJustifyIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ReactNode } from "react";
import { DevPost } from "@/lib/newt";
export default function NavigationHeader(
    {blog, zenn, portfolio,develop}: Readonly<{blog: ReactNode, zenn: ReactNode, portfolio: ReactNode,develop: ReactNode}>
){
    return (
        <header className="bg-foreground dark:bg-background dark:border-white dark:border-b-2 h-14" style={{
            borderRadius: "0% 0% 40% 40%"
        }}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="content md:hidden">
                        <Sheet>
                            <SheetTrigger className="w-8 h-8" >
                                {/* <Button size="icon" className="text-background dark:text-white dark:bg-black">
                                    <AlignJustifyIcon />
                                </Button> */}
                                <AlignJustifyIcon className="text-background dark:text-white mt-1"/>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1" className="font-extrabold text-xl">
                                        <AccordionTrigger>
                                            Blog
                                        </AccordionTrigger>
                                        <AccordionContent className="text-center justify-center align-center">
                                            {blog}
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2" className="font-extrabold text-xl">
                                        <AccordionTrigger>
                                            Zenn RSS
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {zenn}
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3" className="font-extrabold text-xl">
                                        <AccordionTrigger>
                                            これまでのポートフォリオ
                                        </AccordionTrigger>
                                        <AccordionContent>
                                        {portfolio}
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4" className="font-extrabold text-xl">
                                        <AccordionTrigger>
                                            これまでの開発物
                                        </AccordionTrigger>
                                        <AccordionContent>
                                        {develop}
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="flex md:items-center">
                        <a href="/" className="text-white font-bold text-xl">泡沫Portfolio</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}
