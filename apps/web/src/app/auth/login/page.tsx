import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="w-full flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background-light dark:bg-background-dark">

            {/* Abstract Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-6xl glass-panel overflow-hidden rounded-3xl flex flex-col md:flex-row shadow-2xl relative z-10 border border-white/40 dark:border-slate-700/50">

                {/* Left Side: Branding / Value Prop */}
                <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-between relative bg-primary dark:bg-slate-900 border-r border-white/10 dark:border-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 dark:from-slate-800 dark:to-slate-950 opacity-90 z-0"></div>
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                    <div className="relative z-10 text-white flex items-center gap-3">
                        <div className="size-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                            <span className="material-symbols-outlined text-2xl">dentistry</span>
                        </div>
                        <h2 className="text-2xl font-black tracking-tight">InsumoDent</h2>
                    </div>

                    <div className="relative z-10 my-16">
                        <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                            La odontología moderna merece <span className="text-cyan-300">herramientas a la altura.</span>
                        </h1>
                        <p className="text-blue-100 dark:text-slate-300 text-lg font-medium leading-relaxed max-w-md">
                            Compara, ahorra y optimiza el abastecimiento de tu consultorio en segundos. Accede al catálogo más grande del país.
                        </p>
                    </div>

                    <div className="relative z-10 flex gap-4 text-sm font-medium text-blue-200">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">verified</span>
                            100% Gratis
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">lock</span>
                            Pagos Seguros
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="md:w-1/2 bg-white dark:bg-slate-900 p-12 lg:p-16 flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <div className="text-center md:text-left mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 font-display">
                                Bienvenido de nuevo
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">
                                Ingresa tus credenciales para acceder a tu cuenta
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-4">
                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                                        mail
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="Correo Electrónico"
                                        className="input-premium pl-12"
                                        required
                                    />
                                </div>

                                <div className="relative group">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                                        lock
                                    </span>
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        className="input-premium pl-12"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4 cursor-pointer" />
                                    <span className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Recordarme</span>
                                </label>
                                <Link href="/auth/recuperar" className="text-primary font-bold hover:text-primary-dark transition-colors">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>

                            <button type="submit" className="w-full btn-primary-glow">
                                Iniciar Sesión
                                <span className="material-symbols-outlined text-[20px]">login</span>
                            </button>
                        </form>

                        <div className="mt-8 relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-4 bg-white dark:bg-slate-900 text-sm font-medium text-slate-500">O ingresa con</span>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                                <svg className="h-5 w-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Google
                            </button>
                            <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                                Facebook
                            </button>
                        </div>

                        <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400 font-medium">
                            ¿No tienes una cuenta?{' '}
                            <Link href="/auth/registro" className="text-primary font-bold hover:text-primary-dark transition-colors">
                                Regístrate gratis
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
