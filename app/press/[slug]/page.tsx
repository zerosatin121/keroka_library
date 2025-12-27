import Link from 'next/link';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import articlesData from '@/data/articles.json';
import { Article } from '@/lib/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return articlesData.map((article) => ({
        slug: article.id,
    }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    // In Next.js 15+, params is a promise
    const { slug } = await params;
    const article = (articlesData as Article[]).find(a => a.id === slug);

    if (!article) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white">
            {/* Article Header */}
            <div className="bg-background-soft border-b border-gray-100 py-12">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/press" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Press
                    </Link>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wide">
                            {article.category}
                        </span>
                        <span>{article.readTime} read</span>
                        <span>{article.publishedDate}</span>
                    </div>

                    <h1 className="font-merriweather text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                        <div className="font-medium text-gray-900">
                            By <span className="text-primary">{article.author}</span>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Download className="w-4 h-4" /> <span className="hidden sm:inline">Save PDF</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-2">
                                <Share2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div
                    className="prose prose-lg prose-green max-w-none font-merriweather text-gray-800 leading-loose"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Footer info */}
                <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm italic">
                    <p>Published in The Bridge Community Press.</p>
                </div>
            </div>
        </article>
    );
}
