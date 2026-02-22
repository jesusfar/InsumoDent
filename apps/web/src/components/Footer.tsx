import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8 dark:bg-slate-900 dark:border-slate-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-2xl">dentistry</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                                Insumodent
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
                            La plataforma líder para comparar precios de insumos dentales.
                            Ayudamos a profesionales a optimizar sus costos.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                            Empresa
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/tiendas" className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                                    Tiendas Asociadas
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                                    Prensa
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                            Ayuda
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                                    Centro de Ayuda
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                                    Términos y Condiciones
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                                    Política de Privacidad
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                            Suscríbete
                        </h4>
                        <p className="text-sm text-slate-500 mb-4 dark:text-slate-400">
                            Recibe las mejores ofertas semanales en tu correo.
                        </p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                            />
                            <button
                                type="submit"
                                className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
                            >
                                Suscribirme
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-100 pt-8 dark:border-slate-800">
                    <p className="text-center text-sm text-slate-400">
                        © {new Date().getFullYear()} Insumodent. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
