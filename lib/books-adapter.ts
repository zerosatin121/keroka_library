import rawBooks from '@/data/books.json';
import { Book, BookStatus } from '@/lib/types';

// Define the shape of the raw JSON data
interface RawBook {
    sn: number;
    book_title: string;
    author: string | null;
    isbn_number: string | null;
    cover_page: string | null;
    genre: string | null;
    publication_date: string | null;
    publisher: string | null;
}

// Helper to clean author names (remove "by " prefix)
function cleanAuthor(author: string | null): string {
    if (!author) return 'Unknown Author';
    return author.replace(/^by\s+/i, '').replace(/^BY\s+/i, '').trim();
}

// Helper to parse year from date string
function parseYear(dateStr: string | null): number {
    if (!dateStr) return new Date().getFullYear();
    const year = new Date(dateStr).getFullYear();
    return isNaN(year) ? parseInt(dateStr) || new Date().getFullYear() : year;
}

// Adapter function to transform RawBook to Book
export const books: Book[] = (rawBooks as RawBook[]).map((raw) => {
    // Deterministic random status based on ID
    const isAvailable = raw.sn % 5 !== 0; // Every 5th book is on loan
    const status: BookStatus = isAvailable ? 'Available' : 'On Loan';

    // Deterministic shelf location
    const shelf = `G-${(raw.sn % 20) + 1}`;

    return {
        id: String(raw.sn),
        title: raw.book_title,
        author: cleanAuthor(raw.author),
        category: raw.genre || 'General',
        isbn: raw.isbn_number || undefined,
        publishedYear: parseYear(raw.publication_date),
        status: status,
        shelfLocation: shelf,
        coverImage: raw.cover_page || undefined,
        description: raw.publisher ? `Published by ${raw.publisher}` : 'No description available.',
    };
});
