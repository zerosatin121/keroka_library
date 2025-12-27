import { Book } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { Book as BookIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface BookCardProps {
    book: Book;
}

export function BookCard({ book }: BookCardProps) {
    return (
        <Link href={`/catalog/${book.id}`} className="block h-full group">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full group-hover:shadow-md transition-all duration-200">
                <div className="h-48 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                    {book.coverImage ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={book.coverImage}
                                alt={book.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <BookIcon className="w-16 h-16 mb-2" />
                            <span className="text-xs">No Cover</span>
                        </div>
                    )}
                    <div className="absolute top-2 right-2 z-10">
                        <Badge status={book.status} />
                    </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <div className="mb-2">
                        <p className="text-xs text-accent uppercase font-bold tracking-wide line-clamp-1">{book.category}</p>
                        <h3 className="font-merriweather font-bold text-lg text-gray-900 leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                            {book.title}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium line-clamp-1">{book.author}</p>
                    </div>

                    <p className="text-sm text-gray-500 line-clamp-3 mb-4 flex-grow">
                        {book.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-sm">
                        <span className="text-gray-400 font-mono text-xs">LOC: {book.shelfLocation}</span>
                        {book.status === 'Available' ? (
                            <span className="text-primary font-bold text-xs">Visit to Borrow</span>
                        ) : (
                            <span className="text-status-loan font-bold text-xs">Due Soon</span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
