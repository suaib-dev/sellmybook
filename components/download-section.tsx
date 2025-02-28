// "use client";

// import { useRef, useEffect } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Download, Star } from "lucide-react";

// export function DownloadSection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const phoneRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             if (phoneRef.current) {
//               phoneRef.current.classList.add("animate-in");
//             }
//             if (sectionRef.current) {
//               sectionRef.current.classList.add("animate-in");
//             }
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     if (phoneRef.current) observer.observe(phoneRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//       if (phoneRef.current) observer.unobserve(phoneRef.current);
//     };
//   }, []);

//   return (
//     <section id="download" className="py-20 bg-primary/5 relative overflow-hidden">
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5" />

//       <div className="container relative z-10">
//         <div 
//           ref={sectionRef}
//           className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0 translate-y-4"
//         >
//           <div className="flex flex-col space-y-6 text-center md:text-left">
//             <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Selling Books?</h2>
//             <p className="text-lg text-muted-foreground">
//               Download the SellMyBook app today and join thousands of book lovers who are already buying and selling books with ease.
//             </p>

//             <div className="flex items-center justify-center md:justify-start space-x-1 text-amber-500">
//               <Star className="fill-current h-5 w-5" />
//               <Star className="fill-current h-5 w-5" />
//               <Star className="fill-current h-5 w-5" />
//               <Star className="fill-current h-5 w-5" />
//               <Star className="fill-current h-5 w-5" />
//               <span className="ml-2 text-sm text-muted-foreground">4.8 stars (2,500+ reviews)</span>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Button size="lg" className="gap-2 bg-[#0F9D58] hover:bg-[#0F9D58]/90 relative overflow-hidden group">
//                 <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-white/10 group-hover:translate-x-0"></span>
//                 <Download className="h-5 w-5 relative z-10" />
//                 <span className="relative z-10">Download on Google Play</span>
//               </Button>
//             </div>

//             <div className="flex flex-col space-y-3">
//               <p className="text-sm text-muted-foreground">
//                 Available for Android devices. iOS version coming soon.
//               </p>
//               <div className="flex items-center justify-center md:justify-start space-x-4">
//                 <div className="flex items-center">
//                   <span className="text-2xl font-bold">1M+</span>
//                   <span className="ml-2 text-xs text-muted-foreground">Downloads</span>
//                 </div>
//                 <div className="h-4 border-l border-muted-foreground/30"></div>
//                 <div className="flex items-center">
//                   <span className="text-2xl font-bold">500K+</span>
//                   <span className="ml-2 text-xs text-muted-foreground">Active Users</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div 
//             ref={phoneRef}
//             className="relative mx-auto md:ml-auto md:mr-0 w-full max-w-xs opacity-0 translate-y-4"
//           >
//             <div className="relative aspect-[9/16] rounded-[2.5rem] border-8 border-foreground/10 bg-background shadow-xl overflow-hidden">
//               <Image
//                 src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
//                 alt="SellMyBook App Download Screen"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
//                   <div className="flex items-center mb-3">
//                     <div className="h-10 w-10 rounded-full bg-[#0F9D58] flex items-center justify-center">
//                       <Download className="h-5 w-5 text-white" />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-white font-medium">SellMyBook</div>
//                       <div className="text-white/70 text-xs">Free on Google Play</div>
//                     </div>
//                   </div>
//                   <Button className="w-full bg-white text-[#0F9D58] hover:bg-white/90">Install Now</Button>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />

//             <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 border border-border">
//               <div className="text-xs font-bold text-center">
//                 <span className="text-[#0F9D58]">Google Play</span>
//                 <br />
//                 <span>Editors' Choice</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Star } from "lucide-react";

export function DownloadSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (phoneRef.current) {
              phoneRef.current.classList.add("animate-in");
            }
            if (sectionRef.current) {
              sectionRef.current.classList.add("animate-in");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (phoneRef.current) observer.observe(phoneRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (phoneRef.current) observer.unobserve(phoneRef.current);
    };
  }, []);

  return (
    <section id="download" className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5" />

      <div className="container relative z-10">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0 translate-y-4 pl-8"
        >
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Selling Books?</h2>
            <p className="text-lg text-muted-foreground">
              Download the SellMyBook app today and join thousands of book lovers who are already buying and selling books with ease.
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-1 text-amber-500">
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <span className="ml-2 text-sm text-muted-foreground">4.8 stars (2,500+ reviews)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="gap-2 bg-[#0F9D58] hover:bg-[#0F9D58]/90 relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-white/10 group-hover:translate-x-0"></span>
                <Download className="h-5 w-5 relative z-10" />
                <span className="relative z-10">Download on Google Play</span>
              </Button>
            </div>

            <div className="flex flex-col space-y-3">
              <p className="text-sm text-muted-foreground">
                Available for Android devices. iOS version coming soon.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="flex items-center">
                  <span className="text-2xl font-bold">1M+</span>
                  <span className="ml-2 text-xs text-muted-foreground">Downloads</span>
                </div>
                <div className="h-4 border-l border-muted-foreground/30"></div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">500K+</span>
                  <span className="ml-2 text-xs text-muted-foreground">Active Users</span>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={phoneRef}
            className="relative mx-auto md:ml-auto md:mr-0 w-full max-w-xs opacity-0 translate-y-4"
          >
            <div className="relative aspect-[9/16] rounded-[2.5rem] border-8 border-foreground/10 bg-background shadow-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
                alt="SellMyBook App Download Screen"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 rounded-full bg-[#0F9D58] flex items-center justify-center">
                      <Download className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-3">
                      <div className="text-white font-medium">SellMyBook</div>
                      <div className="text-white/70 text-xs">Free on Google Play</div>
                    </div>
                  </div>
                  <Button className="w-full bg-white text-[#0F9D58] hover:bg-white/90">Install Now</Button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />

            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full shadow-lg p-3 border border-border">
              <div className="text-xs font-bold text-center">
                <span className="text-[#0F9D58]">Google Play</span>
                <br />
                <span>Editors' Choice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
