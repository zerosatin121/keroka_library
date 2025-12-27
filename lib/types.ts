export type BookStatus = 'Available' | 'On Loan';

export interface Book {
    id: string;
    title: string;
    author: string;
    category: string;
    isbn?: string;
    publishedYear: number;
    status: BookStatus;
    shelfLocation: string;
    coverImage?: string; // path to image
    description: string;
}

export interface Article {
    id: string;
    title: string;
    author: string;
    category: 'Local History' | 'Tech Tips' | 'Community News';
    publishedDate: string;
    readTime: string;
    summary: string;
    content: string; // HTML or Markdown content
    image?: string;
}

export interface HeritageItem {
    id: string;
    title: string;
    description: string;
    type: 'Photo' | 'Story' | 'Artifact';
    year?: string;
    contributor?: string;
    imageUrl: string;
    downloadUrl?: string; // for archives
}

export interface Author {
    id: string;
    name: string;
    bio: string;
    books: string[]; // List of book titles or IDs
    photoUrl: string;
}

export interface Notice {
    id: string;
    title: string;
    type: 'Job' | 'Event' | 'Announcement';
    date: string;
    content: string;
    location?: string;
}
