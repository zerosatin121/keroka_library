import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Book as BookIcon, Calendar, Hash, MapPin } from 'lucide-react';
import { books } from '@/lib/books-adapter';
import { Badge } from '@/components/ui/Badge';
import { notFound } from 'next/navigation';

// Generate static params for all known books
export async function generateStaticParams() {
    return books.map((book) => ({
        id: book.id,
    }));
}

export default async function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const book = books.find(b => b.id === id);

    if (!book) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background-soft py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <Link
                    href="/catalog"
                    className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
                </Link>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="flex flex-col md:flex-row">

                        {/* Image Section */}
                        <div className="md:w-1/3 bg-gray-50 border-r border-gray-100 p-8 flex items-center justify-center">
                            <div className="relative w-full aspect-[2/3] shadow-lg rounded-lg overflow-hidden max-w-[240px]">
                                {book.coverImage ? (
                                    <Image
                                        src={book.coverImage}
                                        alt={book.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        priority
                                    />
                                ) : (
                                    <div className="h-full w-full bg-gray-200 flex flex-col items-center justify-center text-gray-400">
                                        <BookIcon className="w-16 h-16 mb-2" />
                                        <span className="text-sm">No Cover</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="md:w-2/3 p-8 md:p-12">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-bold text-accent uppercase tracking-wider">{book.category}</span>
                                <Badge status={book.status} className="scale-110" />
                            </div>

                            <h1 className="font-merriweather text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                                {book.title}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 font-medium">
                                {book.author}
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-bold">Published</p>
                                        <p className="font-medium">{book.publishedYear}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase font-bold">Shelf Location</p>
                                        <p className="font-medium">{book.shelfLocation}</p>
                                    </div>
                                </div>

                                {book.isbn && (
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                            <Hash className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs uppercase font-bold">ISBN</p>
                                            <p className="font-medium font-mono">{book.isbn}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-gray-100 pt-6">
                                <h3 className="font-bold text-gray-900 mb-3 block">Description</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {book.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                                    <h4 className="font-bold text-primary mb-2">Want to borrow this book?</h4>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Visit us at <strong>Main Street, Green Valley</strong>. Check the status above to make sure it&apos;s available!
                                    </p>
                                    {book.status === 'Available' ? (
                                        <div className="text-status-available font-bold flex items-center gap-2 text-sm">
                                            <div className="w-2 h-2 bg-status-available rounded-full animate-pulse" />
                                            Ready for pickup today
                                        </div>
                                    ) : (
                                        <div className="text-status-loan font-bold flex items-center gap-2 text-sm">
                                            <div className="w-2 h-2 bg-status-loan rounded-full" />
                                            Currently on loan
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
