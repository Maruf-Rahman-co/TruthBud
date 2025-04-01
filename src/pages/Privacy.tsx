import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
              <p>
                At TruthBud, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, and protect your information when you use our truth table generator service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Boolean expressions you input into our service</li>
                <li>Usage data and analytics (through Google Analytics)</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address (for analytics purposes only)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Generate truth tables for your boolean expressions</li>
                <li>Improve our service and user experience</li>
                <li>Analyze usage patterns and optimize performance</li>
                <li>Maintain and enhance our website security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Data Storage</h2>
              <p>
                We do not permanently store your boolean expressions or any personal information. 
                All calculations are performed locally in your browser, and the data is cleared when you 
                close the page or refresh the browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Third-Party Services</h2>
              <p>We use the following third-party services:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Google Analytics (for website analytics)</li>
                <li>Google Fonts (for typography)</li>
              </ul>
              <p className="mt-2">
                These services may collect information as described in their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Access your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of analytics tracking</li>
                <li>Contact us with privacy-related concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@truthbud.com" className="text-purple hover:underline">
                  privacy@truthbud.com
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

export default Privacy; 