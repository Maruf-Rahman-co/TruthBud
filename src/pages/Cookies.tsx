import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Cookies Policy</h1>
          <p className="text-muted-foreground mb-8 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">The Sweet Truth About Cookies 🍪</h2>
              <p>
                No, we're not talking about the chocolate chip kind (though those are delicious too). 
                This page explains how we use cookies and similar technologies on TruthBud to enhance 
                your experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">What Are Cookies? 🤔</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us remember your preferences and make your experience better. Think of them as 
                tiny digital notes that help us serve you better.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Types of Cookies We Use 🍪</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable basic 
                    functions like page navigation and access to secure areas of the website.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Analytics Cookies</h3>
                  <p>
                    We use Google Analytics cookies to understand how visitors interact with our website. 
                    This helps us improve our service and make it more user-friendly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Preference Cookies</h3>
                  <p>
                    These cookies remember your settings and preferences, such as your preferred theme 
                    or language, to provide a more personalized experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">How to Control Cookies 🎮</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are 
                already on your computer and you can set most browsers to prevent them from being placed. 
                However, if you do this, you may have to manually adjust some preferences every time you 
                visit a site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Cookies 🔗</h2>
              <p>
                We use services from third parties that may also set cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Google Analytics (for website analytics)</li>
                <li>Google Fonts (for typography)</li>
              </ul>
              <p className="mt-2">
                These third-party services have their own privacy policies and cookie practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Updates to This Policy 🔄</h2>
              <p>
                We may update this Cookies Policy from time to time. Any changes will be posted on this 
                page with an updated revision date. We recommend checking this page periodically to stay 
                informed about how we use cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us 📧</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at:
                <br />
                <a href="mailto:cookies@truthbud.com" className="text-purple hover:underline">
                  cookies@truthbud.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies; 