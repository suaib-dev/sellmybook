// import Link from "next/link";
// import { Book, Facebook, Twitter, Instagram, Mail } from "lucide-react";

// export function Footer() {
//   return (
//     <footer className="bg-muted py-12">
//       <div className="container">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <Book className="h-6 w-6 text-primary" />
//               <span className="font-bold text-xl">SellMyBook</span>
//             </div>
//             <p className="text-muted-foreground text-sm">
//               The easiest way to buy and sell books locally. Connect with book lovers in your area.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                   How It Works
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#download" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                   Download
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-4">Legal</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                   Terms & Conditions
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
//                   Cookie Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold text-lg mb-4">Connect</h3>
//             <div className="flex space-x-4 mb-4">
//               <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary transition-colors">
//                 <Facebook className="h-5 w-5" />
//                 <span className="sr-only">Facebook</span>
//               </Link>
//               <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
//                 <Twitter className="h-5 w-5" />
//                 <span className="sr-only">Twitter</span>
//               </Link>
//               <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
//                 <Instagram className="h-5 w-5" />
//                 <span className="sr-only">Instagram</span>
//               </Link>
//             </div>
//             <div className="flex items-center space-x-2 text-sm text-muted-foreground">
//               <Mail className="h-4 w-4" />
//               <span>support@sellmybook.com</span>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
//           <p>© {new Date().getFullYear()} SellMyBook. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import { Book, Facebook, Twitter, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container pl-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Book className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">SellMyBook</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The easiest way to buy and sell books locally. Connect with book lovers in your area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>support@sellmybook.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SellMyBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
