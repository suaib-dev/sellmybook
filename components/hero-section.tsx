// "use client";

// import { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Download, ArrowRight } from "lucide-react";

// export function HeroSection() {
//   const phoneRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (phoneRef.current) {
//         const scrollY = window.scrollY;
//         const offset = Math.min(scrollY * 0.2, 50);
//         phoneRef.current.style.transform = `translateY(${offset}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
//       <div className="container relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div className="flex flex-col space-y-6 text-center md:text-left">
//             <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 mx-auto md:mx-0">
//               <span className="animate-pulse mr-2">●</span> Now Available on Google Play
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
//               Sell Your Books
//               <span className="text-primary"> in Minutes!</span>
//             </h1>
//             <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
//               The simplest way to sell your used books and make money. Connect with book lovers in your area and trade your favorites.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Button size="lg" className="gap-2 bg-[#0F9D58] hover:bg-[#0F9D58]/90">
//                 <Download className="h-5 w-5" />
//                 Get it on Google Play
//               </Button>
//               <Button size="lg" variant="outline" className="group">
//                 Learn More
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </div>
//           </div>
//           <div
//             ref={phoneRef}
//             className="relative mx-auto md:ml-auto md:mr-0 w-full max-w-xs transition-transform duration-300 ease-out"
//           >
//             <div className="relative aspect-[9/16] rounded-[2.5rem] border-8 border-foreground/10 bg-background shadow-xl overflow-hidden">
//               <Image
//                 src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
//                 alt="SellMyBook App Screenshot"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                 <div className="text-sm font-medium mb-1">Sell your books easily</div>
//                 <div className="text-xs opacity-80">Take a photo, set a price, get paid</div>
//               </div>
//             </div>
//             <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export function HeroSection() {
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (phoneRef.current) {
        const scrollY = window.scrollY;
        const offset = Math.min(scrollY * 0.2, 50);
        phoneRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-6 text-left md:pl-10 lg:pl-20">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <span className="animate-pulse mr-2">●</span> Now Available on Google Play
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Sell Your Books
              <span className="text-primary"> in Minutes!</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              The simplest way to sell your used books and make money. Connect with book lovers in your area and trade your favorites.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Google Play Download Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.example.yourapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2 bg-[#0F9D58] hover:bg-[#0F9D58]/90">
                  <Image
                    src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-play-store-vector-png-image_9183318.png"
                    alt="Google Play Logo"
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                  Get it on Google Play
                </Button>
              </a>

              {/* Learn More Button */}
              <Button size="lg" variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            ref={phoneRef}
            className="relative mx-auto md:ml-auto md:mr-0 w-full max-w-xs transition-transform duration-300 ease-out"
          >
            <div className="relative aspect-[9/16] rounded-[2.5rem] border-8 border-foreground/10 bg-background shadow-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
                alt="SellMyBook App Screenshot"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm font-medium mb-1">Sell your books easily</div>
                <div className="text-xs opacity-80">Take a photo, set a price, get paid</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
