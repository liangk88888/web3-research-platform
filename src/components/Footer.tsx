import React from 'react';
import { getLocale } from '@/i18n/getLocale';
import { getDictionary } from '@/i18n/dictionaries';
import Link from 'next/link';

export default async function Footer() {
    const locale = await getLocale();
    const dict = getDictionary(locale);

    return (
        <footer className="w-full bg-slate-950 border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">W</span>
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                Web3Research
                            </span>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                            {dict.footer.description}
                        </p>
                    </div>

                    {/* Discover Links */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                            {dict.navGroups.discover}
                        </h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">{dict.nav.projects}</Link></li>
                            <li><Link href="/dashboard" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">{dict.nav.dashboard}</Link></li>
                            <li><Link href="/airdrop" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2">{dict.nav.airdrop} <span className="text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded">NEW</span></Link></li>
                        </ul>
                    </div>

                    {/* Learn Links */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                            {dict.navGroups.learn}
                        </h3>
                        <ul className="space-y-3">
                            <li><Link href="/guide" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">{dict.nav.manual}</Link></li>
                            <li><Link href="/advanced" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">{dict.nav.techDive}</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                            {dict.navGroups.services}
                        </h3>
                        <ul className="space-y-3">
                            <li><Link href="/portfolio" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">{dict.nav.portfolio}</Link></li>
                            <li><Link href="/request" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">{dict.nav.request}</Link></li>
                            <li><Link href="/pricing" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">{dict.nav.pricing}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-600">
                        &copy; {new Date().getFullYear()} Web3 Research Platform. {dict.common.footerRights}
                    </p>
                    <p className="text-xs text-gray-600">
                        {dict.common.footerData}
                    </p>
                </div>
            </div>
        </footer>
    );
}
