import {
    NextRequest
} from 'next/server';
import {
    ImageResponse
} from 'next/og';

export const runtime = "edge"


export default function handler(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const hasTitle = searchParams.has("title")
        const title = hasTitle
         ? searchParams.get("title")?.slice(0, 100)
         : "Default Article Title"

         return new ImageResponse(
            (
              <div
                style={{
                  backgroundColor: "#0000ff",
                  backgroundSize: "100% 100%",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  textAlign: "left",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    fontSize: 60,
                    fontStyle: "normal",
                    fontWeight: "bold",
                    color: "#000",
                    padding: "0 120px",
                    lineHeight: 1.3,
                    marginBottom: "30px",
                    wordWrap: "break-word",
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    width: "100%",
                    fontSize: 40,
                    fontStyle: "normal",
                    fontWeight: "bold",
                    color: "#000",
                    padding: "0 120px",
                    lineHeight: 1.3,
                  }}
                >
                  ✏️ OG Image Examples
                </div>
              </div>
            ),
            {
              width: 1200,
              height: 630,
            }
          );
        } catch (e: any) {
          console.log(`${e.message}`);
          return new Response(`Failed to generate the image`, {
            status: 500,
          });
        }
}