import {
    NextRequest
} from 'next/server';
import {
    ImageResponse
} from 'next/og';

export const runtime = "edge"

function handler(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const hasTitle = searchParams.has("title")
        const title = hasTitle
         ? searchParams.get("title")?.slice(0, 100)
         : "Default Article Title"
        const hasAuthor = searchParams.has("author")
        const author = hasAuthor
          ? searchParams.get("author")?.slice(0, 100)
          : "Author"

         return new ImageResponse(
            (
              <div style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                // 右斜め下にグラデーション blue to cyan
                backgroundImage: 'linear-gradient(135deg, #3B82F6, #10B981)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                  <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '90%',
                      height: '90%',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      color: 'black',
                      fontFamily: 'Arial, sans-serif',
                      padding: '20px',
                      borderRadius: '20px',
                  }}>
                    <div style={{display: "flex",flexDirection: "column"}}>
                      <h1 style={{
                        fontSize: '4.25rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>{title}</h1>
                      <p style={{
                        fontSize: '2.5rem',
                        textAlign: 'center',
                      }}>⌨ {author}</p>
                    </div>
                    
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

export {handler as GET}