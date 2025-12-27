import Image from "next/image";
import Link from "next/link";
import { BookCard } from "@/components/catalog/BookCard";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";

// Mock data imports
import { books } from "@/lib/books-adapter";
import articles from "@/data/articles.json";
import notices from "@/data/notices.json";
import { Book } from "@/lib/types";

// Helper to cast JSON to types
const newArrivals = books.slice(0, 3);
const latestArticles = articles.slice(0, 2);
const upcomingNotices = notices.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative h-[500px] w-full bg-primary flex items-center">
        <div className="absolute inset-0 z-0 h-full w-full">
          <Image
            src="/assets/hero.png"
            alt="Keroka Community Library"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full text-white">
          <h1 className="font-merriweather font-black text-4xl md:text-6xl mb-6 shadow-sm">
            Welcome to <br />
            <span className="text-accent text-5xl md:text-7xl">Keroka Community Library</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 font-light leading-relaxed">
            More than just a library. We are the community's living room — a space for heritage, learning, and connection.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="lg" href="/catalog">
              Browse Catalog
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary" href="/board">
              Community Board
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-merriweather text-3xl font-bold text-primary mb-2">New Arrivals</h2>
              <p className="text-gray-600">Fresh additions to our shelves.</p>
            </div>
            <Link href="/catalog" className="text-accent font-medium hover:text-accent/80 flex items-center gap-1 group">
              View All <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map((book) => (
              <div key={book.id} className="h-full">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Press & Notices Grid */}
      <section className="py-16 bg-background-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: Community Press */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-merriweather text-2xl font-bold text-primary flex items-center gap-2">
                  <Newspaper className="w-6 h-6 text-accent" /> Community Press
                </h2>
                <Link href="/press" className="text-secondary font-medium hover:underline">Read More</Link>
              </div>

              <div className="space-y-6">
                {latestArticles.map((article) => (
                  <article key={article.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 text-xs text-secondary font-bold uppercase tracking-wider mb-2">
                        <span>{article.category}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="font-merriweather text-xl font-bold text-gray-900 mb-2">
                        <Link href={`/press/${article.id}`} className="hover:text-primary transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{article.summary}</p>
                      <div className="text-sm text-gray-500 italic">By {article.author}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right: Community Board */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-merriweather text-2xl font-bold text-primary flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-accent" /> Notice Board
                </h2>
                <Link href="/board" className="text-secondary font-medium hover:underline">View All</Link>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                {upcomingNotices.map((notice) => (
                  <div key={notice.id} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="text-xs text-accent font-bold mb-1">{notice.type.toUpperCase()}</div>
                    <h4 className="font-bold text-gray-900 mb-1">{notice.title}</h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{notice.content}</p>
                    <div className="text-xs text-gray-400">{notice.date}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Heritage Spotlight CTA */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/assets/weaving.png"
            alt="Heritage"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="font-merriweather text-3xl md:text-4xl font-bold mb-6">Preserving Our Stories</h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Dive into the history of our community. Explore our digital archive of photos, oral histories, and cultural artifacts in the Heritage Corner.
          </p>
          <Button variant="primary" size="lg" href="/heritage" className="bg-accent hover:bg-accent/90 border-0">
            Explore Heritage Corner
          </Button>
        </div>
      </section>

    </div>
  );
}
