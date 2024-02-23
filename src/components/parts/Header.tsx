import { ModeToggle } from "./ToggleTheme";

export default function NavigationHeader(){
    return (
        <header className="bg-foreground dark:bg-background dark:border-white dark:border-b-2 h-14" style={{
            borderRadius: "0% 0% 40% 40%"
        }}>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="/" className="text-white font-bold text-xl">泡沫Portfolio</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}