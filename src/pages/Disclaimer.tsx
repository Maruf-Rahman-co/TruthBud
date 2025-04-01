import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Disclaimer</h1>
          <p className="text-muted-foreground mb-8 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">The Fine Print (But Not Too Fine) 📜</h2>
              <p>
                Welcome to TruthBud's disclaimer page! While we love making boolean logic fun and accessible, 
                we also need to cover our bases (pun intended). So, here's the official stuff:
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. No Magic Wands Here ✨</h2>
              <p>
                While we do our best to make boolean logic as painless as possible, we can't guarantee 
                that using TruthBud will make you a boolean algebra wizard overnight. (Though we'd love 
                to take credit if it does!)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Accuracy Disclaimer 🎯</h2>
              <p>
                We've tested our truth table generator more times than we've had coffee (and that's saying 
                something!), but we can't guarantee it's 100% error-free. If you spot any issues, please 
                let us know - we're only human (well, mostly).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Educational Use 📚</h2>
              <p>
                TruthBud is designed as an educational tool. While we hope it helps you ace your logic 
                class, we can't be held responsible if you use it to solve the mysteries of the universe 
                (though that would be pretty cool).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. No Warranties (Except for Coffee) ☕</h2>
              <p>
                We provide TruthBud "as is" without any warranties. The only thing we can guarantee is 
                that our developer drinks a lot of coffee while maintaining this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Limitation of Liability 🛡️</h2>
              <p>
                We won't be liable for any damages that might occur from using TruthBud, including but 
                not limited to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Lost sleep from solving too many boolean expressions</li>
                <li>Sudden urges to become a computer scientist</li>
                <li>Excessive use of logical operators in everyday conversation</li>
                <li>Any actual technical issues (we'll fix those ASAP!)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Changes to the Service 🔄</h2>
              <p>
                We reserve the right to update, modify, or discontinue TruthBud at any time. But don't 
                worry - we'll give you a heads up before any major changes (unlike that surprise pop quiz 
                in your logic class).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Contact Us 📧</h2>
              <p>
                If you have any questions about this disclaimer (or just want to chat about boolean logic), 
                reach out to us at:
                <br />
                <a href="mailto:legal@truthbud.com" className="text-purple hover:underline">
                  legal@truthbud.com
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

export default Disclaimer; 