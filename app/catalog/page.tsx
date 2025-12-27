'use client';

import { useState, useMemo } from 'react';
import { BookCard } from '@/components/catalog/BookCard';
import { Search } from 'lucide-react';
import { books } from '@/lib/books-adapter';
import clsx from 'clsx';

// Extract unique categories
const categories = ['All', ...Array.from(new Set(books.map(b => b.category)))].filter(Boolean);

export default function CatalogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredBooks = useMemo(() => {
        return books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                book.author.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-background-soft py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10 text-center md:text-left">
                    <h1 className="font-merriweather text-4xl font-bold text-primary mb-4">Book Catalog</h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Browse our collection of physical books. Check availability and visit the library to borrow.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-10">
                    <div className="flex flex-col md:flex-row gap-6">

                        {/* Search */}
                        <div className="flex-grow relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search by title or author..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex-shrink-0">
                            <div className="flex flex-wrap gap-2">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={clsx(
                                            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                                            selectedCategory === category
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        )}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results */}
                {filteredBooks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredBooks.map(book => (
                            <div key={book.id} className="h-full">
                                <BookCard book={book} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="mt-4 text-primary font-medium hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
