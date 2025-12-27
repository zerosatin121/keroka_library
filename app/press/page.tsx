import Link from 'next/link';
import { Newspaper, ChevronRight, Clock } from 'lucide-react';
import articlesData from '@/data/articles.json';
import { Article } from '@/lib/types';

export default function PressPage() {
    const articles = articlesData as Article[];

    return (
        <div className="min-h-screen bg-background-soft py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="mb-12 text-center">
                    <h1 className="font-merriweather text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
                        <Newspaper className="w-10 h-10" /> Community Press
                    </h1>
                    <p className="text-lg text-gray-600">
                        Stories, news, and history from our community. Written by you, for you.
                    </p>
                </header>

                <div className="space-y-8">
                    {articles.map(article => (
                        <article key={article.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md group">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                        <span className="font-bold text-accent uppercase tracking-wider">{article.category}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
                                        <span>•</span>
                                        <span>{article.publishedDate}</span>
                                    </div>

                                    <h2 className="font-merriweather text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                        <Link href={`/press/${article.id}`}>
                                            {article.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {article.summary}
                                    </p>

                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-sm font-medium text-gray-900">By {article.author}</span>
                                        <Link href={`/press/${article.id}`} className="text-primary font-bold hover:underline flex items-center gap-1">
                                            Read Article <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
}
