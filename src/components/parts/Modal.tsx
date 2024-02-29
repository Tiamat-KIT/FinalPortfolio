"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"
import { Button } from "../ui/button"

export default function Modal({children}: Readonly<{children: any}>) {
   const router = useRouter()
   const onDismiss = useCallback(() => router.back(), [router])
    return (
        <div className="bg-slate-600/30 dark:bg-slate-200/30 w-25 h-25 rounded-lg z-[9999]">
            <div className="mb-3">
                <Button onClick={onDismiss}>Close</Button>
            </div>
            <div>
                {children}
            </div>
        </div>            
    )
}
