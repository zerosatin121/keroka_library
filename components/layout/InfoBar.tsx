import { Clock, MapPin, Phone } from 'lucide-react';

export function InfoBar() {
    return (
        <div className="bg-secondary text-white py-2 px-4 text-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>Open: Mon-Sat, 8am - 6pm</span>
                    </div>
                    <div className="hidden md:flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>Main Street, Green Valley</span>
                    </div>
                </div>
                <div className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4" />
                    <span>+254 700 000 000</span>
                </div>
            </div>
        </div>
    );
}
