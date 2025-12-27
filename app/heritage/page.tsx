import Image from 'next/image';
import { Camera, Scroll } from 'lucide-react';
import heritageData from '@/data/heritage.json';
import { HeritageItem } from '@/lib/types';

export default function HeritagePage() {
    const items = heritageData as HeritageItem[];

    return (
        <div className="min-h-screen bg-[#F5F2EB] py-12"> {/* Slightly warmer paper-like background */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="mb-16 text-center max-w-3xl mx-auto">
                    <div className="inline-block p-3 bg-secondary/10 rounded-full mb-4">
                        <Scroll className="w-8 h-8 text-secondary" />
                    </div>
                    <h1 className="font-merriweather text-4xl md:text-5xl font-black text-secondary mb-6">Heritage Corner</h1>
                    <p className="text-xl text-secondary/80 font-light leading-relaxed">
                        A digital museum dedicated to preserving the rich history and culture of our people.
                    </p>
                </header>

                <div className="masonry-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item) => (
                        <div key={item.id} className="break-inside-avoid mb-8">
                            <div className="bg-white p-4 rounded-sm shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                                <div className="relative aspect-[4/3] w-full mb-4 bg-gray-100 overflow-hidden rounded-sm filter sepia-[0.3]">
                                    {/* Using unoptimized images from public since we are using local files */}
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute top-3 left-3 bg-secondary/90 text-white text-xs font-bold px-2 py-1 uppercase tracking-widest backdrop-blur-sm">
                                        {item.year || 'Unknown'}
                                    </div>
                                </div>

                                <div className="px-2 pb-2">
                                    <div className="text-xs text-accent font-bold uppercase mb-1">{item.type}</div>
                                    <h3 className="font-merriweather text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 font-serif leading-relaxed italic mb-4">
                                        &ldquo;{item.description}&rdquo;
                                    </p>
                                    {item.contributor && (
                                        <div className="text-sm text-gray-400 font-sans border-t border-gray-100 pt-3">
                                            Contributed by {item.contributor}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Placeholder for "Add your story" */}
                    <div className="bg-secondary/5 border-2 border-dashed border-secondary/20 rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                        <Camera className="w-12 h-12 text-secondary/40 mb-4" />
                        <h3 className="font-merriweather text-xl font-bold text-secondary mb-2">Have a photo or story?</h3>
                        <p className="text-secondary/70 mb-6">
                            Help us grow our collection. Visit the library to scan your photos or record your stories.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
