import clsx from 'clsx';
import { BookStatus } from '@/lib/types';

interface BadgeProps {
    status: BookStatus;
    className?: string;
}

export function Badge({ status, className }: BadgeProps) {
    const isAvailable = status === 'Available';

    return (
        <span
            className={clsx(
                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                isAvailable ? 'bg-status-available/10 text-status-available' : 'bg-status-loan/10 text-status-loan',
                className
            )}
        >
            {status}
        </span>
    );
}
