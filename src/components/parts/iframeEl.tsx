"use client"

import { useEffect } from "react"
import { Button } from "../ui/button"
import Iframe from "react-iframe"

export default function IframeForm(){
  useEffect(() => {
    if(typeof window !== "undefined"){
      const iframe = document.querySelector("iframe") as HTMLIFrameElement
      iframe.addEventListener("load",() => {
        const IframeDocument = iframe.contentDocument
        if(IframeDocument !== null){
          IframeDocument.querySelector("h1")!.remove()
        } 

      })
      }
  },[])
  return (
    <div className="flex justify-center">
      <Button onClick={() => {(document.querySelector("dialog") as HTMLDialogElement).showModal()}}>問い合わせる</Button>
      <dialog>
        <Iframe
           
          url="https://www.noway-form.com/ja/f/34c845b7-a334-4ec2-8df4-9f81b0f59f0d/embed" />
      </dialog>
    </div>
    
  ) 
}
