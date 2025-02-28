import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChevronLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container max-w-4xl mx-auto py-24 px-4">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-primary hover:underline"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          
          <p className="text-muted-foreground mb-6">Last updated: May 15, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              BookSwap ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3">Personal Data</h3>
            <p>
              We may collect personally identifiable information, such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Postal address</li>
              <li>Payment information</li>
              <li>Profile picture</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3">Usage Data</h3>
            <p>
              We may also collect information that your browser or device sends whenever you visit our Service or when you access the Service by or through a mobile device:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Device type</li>
              <li>Operating system</li>
              <li>Browser information</li>
              <li>IP address</li>
              <li>Mobile device ID</li>
              <li>Time and date of your visit</li>
              <li>Time spent on pages</li>
              <li>Pages visited</li>
              <li>Referring website addresses</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our Service</li>
              <li>Process transactions</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, promotions, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve the Service and provide content or features that match user profiles or interests</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            
            <h3 className="text-xl font-medium mb-3">By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Marketing Communications</h3>
            <p>
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Business Transfers</h3>
            <p>
              If we are involved in a merger, acquisition, or sale of all or a portion of our assets, you will be notified via email and/or a prominent notice on our Service of any change in ownership or uses of your personal information, as well as any choices you may have regarding your personal information.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights Regarding Your Information</h2>
            <p>
              You have certain rights regarding the personal information we collect about you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to access and receive a copy of your personal data</li>
              <li>Right to rectify or update your personal data</li>
              <li>Right to erase your personal data</li>
              <li>Right to restrict the processing of your personal data</li>
              <li>Right to object to the processing of your personal data</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> privacy@bookswap.com<br />
              <strong>Address:</strong> 123 Book Street, Reading, CA 94000<br />
              <strong>Phone:</strong> (555) 123-4567
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}