import Link from "next/link";

const tabs = ["About Me", "Blog"];
export const Header = () =>
    <header className="flex shadow-sm fixed top-0 w-full bg-slate-600 bg-transparent">
        <nav className="flex-1 flex flex-wrap p-4 items-left justify-left gap-4 text-lg font-semibold mx-10">
            {tabs.map((tab, idx: number) => (
                <Link key={idx} href={idx === 0 ? "/" : `/${tab.replace(/\s/g, "_").toLowerCase()}`}>
                    {tab}
                </Link>
            ))}
        </nav>
    </header>