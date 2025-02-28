// "use client";

// import { useRef, useEffect } from "react";
// import Image from "next/image";
// import { BookPlus, Users, CreditCard } from "lucide-react";

// const steps = [
//   {
//     icon: <BookPlus className="h-12 w-12" />,
//     title: "List Your Book",
//     description: "Take a photo, add details, and set your price in just a few taps.",
//     image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     icon: <Users className="h-12 w-12" />,
//     title: "Connect with Buyers",
//     description: "Chat with interested buyers and arrange a meeting or shipping.",
//     image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     icon: <CreditCard className="h-12 w-12" />,
//     title: "Get Paid",
//     description: "Receive payment securely through our protected payment system.",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//   }
// ];

// export function HowItWorks() {
//   const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-in");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     stepRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       stepRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <section id="how-it-works" className="py-20">
//       <div className="container">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
//             Simple Process
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Getting started with SellMyBook is simple. Follow these three easy steps to buy or sell books.
//           </p>
//         </div>

//         <div className="space-y-16 md:space-y-24">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               ref={(el) => (stepRefs.current[index] = el)}
//               className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center opacity-0 translate-y-4 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
//                 }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
//                 <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
//                   <Image
//                     src={step.image}
//                     alt={step.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                   <div className="absolute bottom-0 left-0 right-0 p-4">
//                     <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 inline-block">
//                       <span className="text-white font-medium">Step {index + 1}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
//                 <div className="flex flex-col items-center md:items-start text-center md:text-left">
//                   <div className="flex items-center mb-4">
//                     <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
//                       {step.icon}
//                     </div>
//                     <div className="ml-4 text-4xl font-bold text-primary">
//                       {index + 1}
//                     </div>
//                   </div>
//                   <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
//                   <p className="text-muted-foreground max-w-md">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { BookPlus, Users, CreditCard } from "lucide-react";

const steps = [
  {
    icon: <BookPlus className="h-12 w-12" />,
    title: "List Your Book",
    description: "Take a photo, add details, and set your price in just a few taps.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "Connect with Buyers",
    description: "Chat with interested buyers and arrange a meeting or shipping.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <CreditCard className="h-12 w-12" />,
    title: "Get Paid",
    description: "Receive payment securely through our protected payment system.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function HowItWorks() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    stepRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      stepRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-6 md:px-12">
        <div className="text-left mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl">
            Getting started with SellMyBook is simple. Follow these three easy steps to buy or sell books.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center opacity-0 translate-y-4 transition-all duration-500 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Step Image */}
              <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                  <Image src={step.image} alt={step.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 inline-block">
                      <span className="text-white font-medium">Step {index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className={`order-1 md:px-8 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                      {step.icon}
                    </div>
                    <div className="ml-4 text-4xl font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground max-w-md">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
