import "server-only"
import {createClient,Image} from "newt-client-js"
import { cache } from 'react'

const NewtClient = createClient({
    spaceUid: "utakataportfolio",
    token: "CkKdpLp4th73d1qoOyEx2-rnbYrMZ3-ZQsYstwra2iA",
    apiType: "cdn"
})

export interface BlogPost {
    _id: string,
    title: string,
    body: string,
    img: Image,
    tag: string[],
    repository: {
        html: string,
        url: string
    }
}

export const getArticles = cache(async () => {
    const { items } = await NewtClient.getContents<BlogPost>({
      appUid: 'utakata-tech-blog',
      modelUid: 'post',
      query: {
        select: ['_id', 'title', 'body', "img", "tag", "repository"],
      },
    })
    return items
})

export const getArticlesById = cache(async (_id: string) => {
  const article = await NewtClient.getFirstContent<BlogPost>({
    appUid: 'utakata-tech-blog',
    modelUid: 'post',
    query: {
      _id,
      select: ['_id', 'title', 'body', "img", "tag", "repository"],
    }
  })
  return article
})