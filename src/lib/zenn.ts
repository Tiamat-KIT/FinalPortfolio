import Parser from "rss-parser";

export interface ZennRssFeedType {
    pageContent: {
        title: string,
        link: string
    },
}
export const getZennRssFeed = async () => {
    const feed  = await new Parser().parseURL('https://zenn.dev/ayaextech_fill/feed');
    return feed.items.map((item) => {
        return {
            pageContent: {
                title: item.title ?? "No Title",
                link: item.link ?? "https://zenn.dev/ayaextech_fill"
            },
        } 
    }) as ZennRssFeedType[];
}