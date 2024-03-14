"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { Button } from "../ui/button"

export default function Modal({children}: Readonly<{children: any}>) {
   const router = useRouter()
   const onDismiss = useCallback(() => router.back(), [router])
    return (
            <div className="bg-blue-400/30 dark:bg-slate-200/30 w-25 h-25 rounded-lg">
                <div className="mb-2">
                    <Button onClick={onDismiss}>Close</Button>
                </div>
                <div className="flex justify-center py-5">
                    <div className="bg-white/80 rounded-xl flex flex-col justify-center h-[85%] w-[85%]">
                        {children}
                    </div>
                </div>
            </div>  
    )
}
