"use client"
import { AccordionTrigger } from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionItem } from "../ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ModeToggle } from "./ToggleTheme";

export default function NavigationHeader(){
    return (
        <header className="bg-foreground dark:bg-background dark:border-white dark:border-b-2 h-14" style={{
            borderRadius: "0% 0% 40% 40%"
        }}>
            <div className="container mx-auto">
                <div className="flex flex-row items-center hidden md:contents justify-center md:justify-between">
                    <div>
                        <Sheet>
                            <SheetTrigger className="w-8 h-8">Open</SheetTrigger>
                            <SheetContent side="left">
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>
                                            Blog
                                        </AccordionTrigger>
                                        <AccordionContent>
                                                aaa
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>
                                            Zenn RSS
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            aaa
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>
                                            これまでのポートフォリオ
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            aaaa
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
