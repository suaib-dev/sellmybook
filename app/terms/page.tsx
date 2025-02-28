import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChevronLeft } from 'lucide-react';

export default function TermsAndConditions() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms and Conditions</h1>
          
          <p className="text-muted-foreground mb-6">Last updated: May 15, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and BookSwap ("we," "us" or "our"), concerning your access to and use of the BookSwap mobile application and website (collectively, the "Service").
            </p>
            <p>
              You agree that by accessing the Service, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Service and you must discontinue use immediately.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            </p>
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting Content on or through the Service, You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms.</li>
              <li>The posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</li>
            </ul>
            <p>
              We reserve the right to terminate the account of anyone found to be infringing on a copyright.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
            <p>
              You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <p>
              As a user of the Service, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Systematically retrieve data or other content from the Service to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Make any unauthorized use of the Service, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
              <li>Use the Service to advertise or offer to sell goods and services.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Service.</li>
              <li>Engage in unauthorized framing of or linking to the Service.</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
              <li>Interfere with, disrupt, or create an undue burden on the Service or the networks or services connected to the Service.</li>
              <li>Attempt to impersonate another user or person or use the username of another user.</li>
              <li>Use any information obtained from the Service in order to harass, abuse, or harm another person.</li>
              <li>Use the Service as part of any effort to compete with us or otherwise use the Service and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
              <li>Sell or otherwise transfer your profile.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the service, even if we have been advised of the possibility of such damages.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p>
              We reserve the right, in our sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms and Conditions, and you waive any right to receive specific notice of each such change.
            </p>
            <p>
              It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. Your continued use of the Service after the posting of revised Terms and Conditions means that you accept and agree to the changes.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> legal@bookswap.com<br />
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