'use client';

import { useState } from 'react';
import { Calendar, Briefcase, Info } from 'lucide-react';
import noticesData from '@/data/notices.json';
import { Notice } from '@/lib/types';
import clsx from 'clsx';
import { Badge } from '@/components/ui/Badge';

export default function BoardPage() {
    const [filter, setFilter] = useState<'All' | 'Job' | 'Event' | 'Announcement'>('All');
    const notices = noticesData as Notice[];

    const filteredNotices = notices.filter(n => filter === 'All' || n.type === filter);

    const tabs = [
        { id: 'All', label: 'All Updates', icon: Info },
        { id: 'Event', label: 'Events', icon: Calendar },
        { id: 'Job', label: 'Jobs', icon: Briefcase },
    ];

    return (
        <div className="min-h-screen bg-background-soft py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-primary p-8 text-white">
                        <h1 className="font-merriweather text-3xl font-bold mb-2">Community Board</h1>
                        <p className="opacity-90">Stay updated with the latest happenings in Green Valley.</p>
                    </div>

                    <div className="border-b border-gray-100">
                        <div className="flex overflow-x-auto">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setFilter(tab.id as any)}
                                    className={clsx(
                                        'flex items-center gap-2 px-6 py-4 font-medium text-sm focus:outline-none whitespace-nowrap',
                                        filter === tab.id
                                            ? 'text-primary border-b-2 border-primary bg-primary/5'
                                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                    )}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="space-y-4">
                            {filteredNotices.length > 0 ? filteredNotices.map((notice) => (
                                <div key={notice.id} className="p-4 rounded-lg bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-sm transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className={clsx(
                                                    'text-xs font-bold px-2 py-1 rounded',
                                                    notice.type === 'Job' ? 'bg-blue-100 text-blue-700' :
                                                        notice.type === 'Event' ? 'bg-green-100 text-green-700' :
                                                            'bg-orange-100 text-orange-700'
                                                )}>
                                                    {notice.type.toUpperCase()}
                                                </span>
                                                <span className="text-gray-400 text-sm">{notice.date}</span>
                                            </div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">{notice.title}</h3>
                                            <p className="text-gray-600">{notice.content}</p>
                                            {notice.location && (
                                                <div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
                                                    <span className="font-semibold">Location:</span> {notice.location}
                                                </div>
                                            )}
                                        </div>
                                        {notice.type === 'Job' && (
                                            <button
                                                onClick={() => alert(`To apply for "${notice.title}", please visit the library reception with your CV.`)}
                                                className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 whitespace-nowrap active:bg-gray-100"
                                            >
                                                View Details
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )) : (
                                <div className="text-center py-12 text-gray-500">
                                    No updates found in this category.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
