export const revalidate = 0

export default function Layout({children}: Readonly<{children: any}>) {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl text-center font-extrabold">Blog</h1>
            <div className="flex flex-col justify-center p-5 rounded-lg bg-cyan-300/30 normal-list">
                {children}
            </div>
        </div>
    )
}