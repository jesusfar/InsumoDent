export default function TiendasLoading() {
    return (
        <div className="flex-grow w-full bg-background-light dark:bg-background-dark font-display">
            {/* Hero Section Skeleton */}
            <div className="relative w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex flex-col items-center">
                    <div className="h-12 w-3/4 max-w-sm bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse mb-4"></div>
                    <div className="h-6 w-5/6 max-w-md bg-slate-200 dark:bg-slate-800 rounded animate-pulse mb-8"></div>
                    <div className="w-full max-w-lg h-12 bg-slate-200 dark:bg-slate-800 rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Grid Skeleton */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden h-full">
                            {/* Card Header Skeleton */}
                            <div className="aspect-[2/1] bg-slate-100 dark:bg-slate-800/50 animate-pulse border-b border-slate-100 dark:border-slate-800 flex items-center justify-center">
                                <div className="h-10 w-24 bg-slate-200 dark:bg-slate-700 rounded animate-pulse"></div>
                            </div>
                            {/* Card Body Skeleton */}
                            <div className="flex flex-col flex-1 p-5 gap-4">
                                <div>
                                    <div className="h-6 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse mb-3"></div>
                                    <div className="h-4 w-24 bg-slate-100 dark:bg-slate-800 rounded animate-pulse mb-4"></div>
                                    <div className="flex gap-1 mb-3">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <div key={star} className="h-4 w-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                                        ))}
                                    </div>
                                    <div className="h-6 w-28 bg-blue-50 dark:bg-slate-800 rounded-full animate-pulse"></div>
                                </div>
                                <div className="mt-auto pt-4">
                                    <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
