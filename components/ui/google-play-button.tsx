// "use client";

// import Link from "next/link";
// import { cn } from "@/lib/utils";

// interface GooglePlayButtonProps {
//     href: string;
//     className?: string;
// }

// export function GooglePlayButton({
//     href,
//     className,
// }: GooglePlayButtonProps) {
//     return (
//         <Link
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={cn(
//                 "inline-flex items-center bg-black text-white rounded-md overflow-hidden h-14 pr-5 pl-4 transition-transform hover:scale-105 shadow-md",
//                 className
//             )}
//         >
//             <div className="flex items-center">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="28"
//                     height="28"
//                     viewBox="0 0 512 512"
//                     className="mr-3"
//                 >
//                     {/* Blue section */}
//                     <path
//                         d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
//                         fill="#4285F4"
//                     />
//                     {/* Green section */}
//                     <path
//                         d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
//                         fill="#34A853"
//                     />
//                     {/* Yellow section */}
//                     <path
//                         d="M425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"
//                         fill="#FBBC04"
//                     />
//                     {/* Red section */}
//                     <path
//                         d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
//                         fill="#EA4335"
//                     />
//                 </svg>
//                 <div className="flex flex-col">
//                     <span className="text-[10px] font-normal tracking-wide">GET IT ON</span>
//                     <span className="text-xl font-medium leading-tight tracking-tight">Google Play</span>
//                 </div>
//             </div>
//         </Link>
//     );
// }

"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface GooglePlayButtonProps {
    href: string;
    className?: string;
}

export function GooglePlayButton({
    href,
    className,
}: GooglePlayButtonProps) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "inline-flex items-center bg-black text-white rounded-md overflow-hidden h-12 pr-4 pl-3 transition-transform hover:scale-105 shadow-md",
                className
            )}
        >
            <div className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    className="mr-2"
                >
                    {/* Blue section */}
                    <path
                        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
                        fill="#4285F4"
                    />
                    {/* Green section */}
                    <path
                        d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
                        fill="#34A853"
                    />
                    {/* Yellow section */}
                    <path
                        d="M425.6 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"
                        fill="#FBBC04"
                    />
                    {/* Red section */}
                    <path
                        d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                        fill="#EA4335"
                    />
                </svg>
                <div className="flex flex-col">
                    <span className="text-[9px] font-normal tracking-wide">GET IT ON</span>
                    <span className="text-lg font-medium leading-tight tracking-tight">Google Play</span>
                </div>
            </div>
        </Link>
    );
}
