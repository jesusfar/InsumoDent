import Link from 'next/link';

interface CategoryCardProps {
    href: string;
    iconName: string;
    title: string;
    description: string;
}

export default function CategoryCard({ href, iconName, title, description }: CategoryCardProps) {
    return (
        <Link
            href={href}
            className="group relative flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-primary/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary/50"
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary transition-transform group-hover:scale-110 dark:bg-slate-700 dark:text-blue-400">
                <span className="material-symbols-outlined text-4xl">{iconName}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
        </Link>
    );
}
