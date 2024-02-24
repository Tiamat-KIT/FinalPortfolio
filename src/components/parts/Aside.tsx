import {VariantProps, tv} from "tailwind-variants"

const AsideCSS = tv({
    base: "bg-slate-200 dark:bg-slate-500 hidden md:block border border-black rounded-lg",
    variants: {
        colSpan: {
            2: "col-span-2",
            3: "col-span-3",
            4: "col-span-4",
            5: "col-span-5",
            6: "col-span-6",
            7: "col-span-7"
        }
    }
})

type AsideVariants = VariantProps<typeof AsideCSS>

interface AsideProps extends AsideVariants {
    children: React.ReactNode
}

export default function Aside(prop: AsideProps) {
    return (
        <aside className={AsideCSS(prop)}>
            {prop.children}
        </aside>
    )
}