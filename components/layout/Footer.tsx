import Link from 'next/link';
import { BookOpen, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpen className="w-6 h-6 text-accent" />
                            <span className="font-merriweather font-bold text-xl">The Bridge</span>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed">
                            A digital extension of your community library. Access books, stories, and heritage from anywhere.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-merriweather font-bold text-lg mb-4 text-accent">Discover</h3>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li><Link href="/catalog" className="hover:text-white">Book Catalog</Link></li>
                            <li><Link href="/press" className="hover:text-white">Community Press</Link></li>
                            <li><Link href="/heritage" className="hover:text-white">Heritage Corner</Link></li>
                            <li><Link href="/board" className="hover:text-white">Notice Board</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-merriweather font-bold text-lg mb-4 text-accent">Visit Us</h3>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>Green Valley Main Street</li>
                            <li>PO Box 1234, Green Valley</li>
                            <li>Email: hello@thebridge.ke</li>
                            <li>Phone: +254 700 000 000</li>
                        </ul>
                    </div>

                    {/* Social / Hours */}
                    <div>
                        <h3 className="font-merriweather font-bold text-lg mb-4 text-accent">Connect</h3>
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                        <p className="text-sm text-white/80">
                            Open Mon-Sat<br />8:00 AM - 6:00 PM
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-sm text-white/60">
                    <p>&copy; {new Date().getFullYear()} The Bridge Community Library. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
