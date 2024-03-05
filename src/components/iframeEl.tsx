import {useEffect} from "react"
export default function IframeForm(){
  useEffect(() => {
    const iframeEl = document.querySelector("iframe") as HTMLIframeElement
    iframeEl.addEventListener("load",  () => {
      iframeEl.style.margin = "3px"
    })
  },[])
}
