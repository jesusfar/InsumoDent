export default function CategoriaLoading() {
    return (
        <div className="flex flex-col flex-1 w-full bg-background-light dark:bg-background-dark font-display">
            {/* Category Header Skeleton */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <div className="h-4 w-16 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                            <div className="h-4 w-4 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                            <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                        </div>
                        <div className="h-10 w-64 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                        <div className="h-6 w-full max-w-2xl bg-slate-100 dark:bg-slate-800 rounded animate-pulse mt-2"></div>
                        <div className="h-6 w-3/4 max-w-xl bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Main Content Skeleton */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Skeleton */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="h-5 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse mb-2"></div>
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-4 w-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                                        <div className="h-4 w-24 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-slate-200 dark:border-slate-800"></div>
                            <div className="space-y-4">
                                <div className="h-5 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse mb-2"></div>
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="h-4 w-4 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                                        <div className="h-4 w-28 bg-slate-100 dark:bg-slate-800 rounded animate-pulse"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Results Grid Skeleton */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <div className="h-5 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full overflow-hidden">
                                    <div className="relative w-full pt-[100%] bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700 animate-pulse"></div>
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="h-3 w-20 bg-slate-200 dark:bg-slate-700 rounded animate-pulse mb-3"></div>
                                        <div className="h-5 w-full bg-slate-200 dark:bg-slate-700 rounded animate-pulse mb-2"></div>
                                        <div className="h-5 w-2/3 bg-slate-200 dark:bg-slate-700 rounded animate-pulse mb-6"></div>
                                        <div className="mt-auto">
                                            <div className="h-6 w-32 bg-blue-50 dark:bg-slate-700 rounded animate-pulse mb-4"></div>
                                            <div className="h-4 w-40 bg-slate-100 dark:bg-slate-700 rounded animate-pulse mb-4"></div>
                                            <div className="h-10 w-full bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
