export default function OfertasLoading() {
    return (
        <div className="flex flex-col flex-1 items-center w-full pb-10 bg-background-light dark:bg-background-dark animate-pulse">
            {/* Nav Padding */}
            <div className="w-full bg-slate-900 border-b border-slate-800 pt-12 pb-16 px-4">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                    <div className="h-6 w-48 bg-slate-800 rounded-full mb-4"></div>
                    <div className="h-12 w-64 md:w-96 bg-slate-800 rounded-lg mb-4"></div>
                    <div className="h-6 w-full max-w-lg bg-slate-800 rounded-lg"></div>
                </div>
            </div>

            {/* Grid Skeletons */}
            <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col h-[380px] bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                            <div className="h-48 bg-slate-200 dark:bg-slate-800 w-full"></div>
                            <div className="flex flex-col flex-1 p-5 gap-4">
                                <div>
                                    <div className="h-3 w-1/3 bg-slate-200 dark:bg-slate-800 rounded-lg mb-3"></div>
                                    <div className="h-5 w-4/5 bg-slate-200 dark:bg-slate-800 rounded-lg mb-2"></div>
                                    <div className="h-5 w-3/5 bg-slate-200 dark:bg-slate-800 rounded-lg mb-3"></div>
                                    <div className="h-8 w-1/2 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                                </div>
                                <div className="mt-auto h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
