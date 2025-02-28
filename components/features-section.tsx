// "use client";

// import { useRef, useEffect } from "react";
// import { 
//   BookOpen, 
//   ShieldCheck, 
//   Search, 
//   MessageSquare, 
//   CreditCard, 
//   Map 
// } from "lucide-react";

// const features = [
//   {
//     icon: <BookOpen className="h-10 w-10" />,
//     title: "Easy Listing",
//     description: "List your books in seconds with our simple, intuitive interface."
//   },
//   {
//     icon: <ShieldCheck className="h-10 w-10" />,
//     title: "Secure Payments",
//     description: "Our secure payment system ensures safe transactions every time."
//   },
//   {
//     icon: <Search className="h-10 w-10" />,
//     title: "Wide Selection",
//     description: "Find everything from bestsellers to rare collectibles in our vast marketplace."
//   },
//   {
//     icon: <MessageSquare className="h-10 w-10" />,
//     title: "Direct Messaging",
//     description: "Communicate directly with buyers and sellers through our in-app messaging."
//   },
//   {
//     icon: <CreditCard className="h-10 w-10" />,
//     title: "Fair Pricing",
//     description: "Set your own prices or use our smart pricing suggestions based on market value."
//   },
//   {
//     icon: <Map className="h-10 w-10" />,
//     title: "Local Trading",
//     description: "Find book lovers near you for convenient in-person exchanges."
//   }
// ];

// export function FeaturesSection() {
//   const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

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

//     featureRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       featureRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <section id="features" className="py-20 bg-muted/50">
//       <div className="container">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
//             Why Choose SellMyBook?
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Features You'll Love</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Our app makes buying and selling books simpler than ever before, with features designed to create the best experience for book lovers.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               ref={(el) => (featureRefs.current[index] = el)}
//               className="bg-card rounded-lg p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20 opacity-0 translate-y-4 group"
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               <div className="mb-4 text-primary bg-primary/10 p-3 rounded-lg inline-block group-hover:bg-primary group-hover:text-white transition-colors duration-300">
//                 {feature.icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-muted-foreground">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import {
  BookOpen,
  ShieldCheck,
  Search,
  MessageSquare,
  CreditCard,
  Map
} from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Easy Listing",
    description: "List your books in seconds with our simple, intuitive interface."
  },
  {
    icon: <ShieldCheck className="h-10 w-10" />,
    title: "Secure Payments",
    description: "Our secure payment system ensures safe transactions every time."
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "Wide Selection",
    description: "Find everything from bestsellers to rare collectibles in our vast marketplace."
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Direct Messaging",
    description: "Communicate directly with buyers and sellers through our in-app messaging."
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "Fair Pricing",
    description: "Set your own prices or use our smart pricing suggestions based on market value."
  },
  {
    icon: <Map className="h-10 w-10" />,
    title: "Local Trading",
    description: "Find book lovers near you for convenient in-person exchanges."
  }
];

export function FeaturesSection() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container pl-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose SellMyBook?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features You'll Love</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our app makes buying and selling books simpler than ever before, with features designed to create the best experience for book lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="bg-card rounded-lg p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20 opacity-0 translate-y-4 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 text-primary bg-primary/10 p-3 rounded-lg inline-block group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
