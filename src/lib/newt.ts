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

export interface DevPost {
  _id: string,
  title: string,
  description: string,
  subtitle: string,
  img: Image[],
  complete: string,
  tag: string[],
  url: {
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

export const getDevArticles = cache(async () => {
  const { items } = await NewtClient.getContents<DevPost>({
    appUid: 'mydevlop-contents',
    modelUid: 'developcontent',
    query: {
      select: ['_id', 'title', 'description', "subtitle", "img", "complete", "tag", "url"],
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

export const getDevArticlesById = cache(async (_id: string) => {
  const article = await NewtClient.getFirstContent<DevPost>({
    appUid: 'mydevlop-contents',
    modelUid: 'developcontent',
    query: {
      _id,
      select: ['_id', 'title', 'description', "subtitle", "img", "complete", "tag", "url"],
    }
  })
  return article
})