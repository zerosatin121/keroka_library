'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Press', href: '/press' },
    { name: 'Heritage', href: '/heritage' },
    { name: 'Board', href: '/board' },
];

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="bg-background-soft border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-primary p-2 rounded-lg text-white">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-merriweather font-bold text-xl text-primary leading-tight">
                                Keroka 
                            </span>
                            <span className="text-xs text-gray-600 font-inter uppercase tracking-wider">
                                Community Library
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    'font-medium transition-colors duration-200',
                                    pathname === item.href
                                        ? 'text-primary border-b-2 border-primary'
                                        : 'text-gray-600 hover:text-primary'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    'block px-3 py-4 rounded-md text-base font-medium',
                                    pathname === item.href
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-600 hover:bg-gray-50'
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
