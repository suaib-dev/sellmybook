import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChevronLeft } from 'lucide-react';

export default function CookiePolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Cookie Policy</h1>
          
          <p className="text-muted-foreground mb-6">Last updated: May 15, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p>
              Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
            </p>
            <p>
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How BookSwap Uses Cookies</h2>
            <p>
              When you use and access the Service, we may place a number of cookie files in your web browser.
            </p>
            <p>
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Essential cookies.</strong> We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.
              </li>
              <li>
                <strong>Preferences cookies.</strong> We may use preferences cookies to remember information that changes the way the Service behaves or looks, such as the "remember me" functionality of a registered user or a user's language preference.
              </li>
              <li>
                <strong>Analytics cookies.</strong> We may use analytics cookies to track information how the Service is used so that we can make improvements. We may also use analytics cookies to test new advertisements, pages, features or new functionality of the Service to see how our users react to them.
              </li>
              <li>
                <strong>Advertising cookies.</strong> These type of cookies are used to deliver advertisements on and through the Service and track the performance of these advertisements. These cookies may also be used to enable third-party advertising networks to deliver ads that may be relevant to you based upon your activities or interests.
              </li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Your Choices Regarding Cookies</h2>
            <p>
              If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
            </p>
            <p>
              Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" className="text-primary hover:underline">https://support.google.com/accounts/answer/32050</a></li>
              <li>For the Internet Explorer web browser, please visit this page from Microsoft: <a href="http://support.microsoft.com/kb/278835" className="text-primary hover:underline">http://support.microsoft.com/kb/278835</a></li>
              <li>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" className="text-primary hover:underline">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></li>
              <li>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-primary hover:underline">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
            </ul>
            <p>
              For any other web browser, please visit your web browser's official web pages.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">More Information About Cookies</h2>
            <p>
              You can learn more about cookies at the following third-party websites:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" className="text-primary hover:underline">http://www.networkadvertising.org/</a></li>
              <li>AllAboutCookies: <a href="http://www.allaboutcookies.org/" className="text-primary hover:underline">http://www.allaboutcookies.org/</a></li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
            <p>
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
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