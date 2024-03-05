import {useEffect} from "react"
export default function IframeForm(){
  useEffect(() => {
    const iframeEl = document.querySelector("iframe") as HTMLIFrameElement
    iframeEl.addEventListener("load",  () => {
      iframeEl.contentDocument!.body.style.margin = "3px" as string
    })
  },[])
  return <iframe className="w-full h-[1237px]" src="https://www.noway-form.com/ja/f/34c845b7-a334-4ec2-8df4-9f81b0f59f0d/embed" />
}
