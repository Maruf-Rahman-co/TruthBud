import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Twitter, Code2, Lightbulb, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              About Truth<span className="text-purple">Bud</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Making boolean logic fun and accessible for everyone, one truth table at a time
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Main Feature */}
            <Card className="md:col-span-2 bg-gradient-to-br from-purple/10 to-purple/5">
              <CardHeader>
                <CardTitle className="text-2xl">What's This All About? 🤔</CardTitle>
                <CardDescription>
                  Your friendly truth table generator
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Welcome to TruthBud, where we make boolean logic less boring than watching paint dry! 
                  Our mission is to help you understand truth tables without losing your mind. 
                  Think of us as your logical friend who's always there to help you solve those tricky boolean expressions.
                </p>
              </CardContent>
            </Card>

            {/* Developer Card */}
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5">
              <CardHeader>
                <CardTitle className="text-2xl">Meet the Developer 👨‍💻</CardTitle>
                <CardDescription>
                  The brain behind TruthBud
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-500">MR</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Maruf Rahman</h3>
                    <p className="text-muted-foreground">UAE Based Developer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Hey there! I'm Maruf, a developer based in the UAE who loves making complex things simple. 
                  I created TruthBud because I believe learning boolean logic shouldn't be as painful as stepping on a Lego brick. 
                  When I'm not coding, you can find me probably still coding (because let's face it, that's what we do best! 😅).
                </p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-500" />
                    Fast & Efficient
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Generate truth tables instantly with our optimized algorithm
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    User-Friendly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Intuitive interface designed for the best user experience
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-red-500" />
                    Modern Tech
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built with cutting-edge technologies for reliability
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-500/10 to-pink-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-pink-500" />
                    Made with Love
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Crafted with passion to help students and professionals
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Fun Fact Section */}
          <Card className="bg-gradient-to-br from-purple/10 to-purple/5">
            <CardHeader>
              <CardTitle className="text-2xl">Fun Fact! 🎉</CardTitle>
              <CardDescription>
                A bit of history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Did you know? The first truth table was created by Ludwig Wittgenstein in 1921. 
                But don't worry, we've made it much more user-friendly than his version! 
                (No offense to Ludwig, but we're pretty sure he would have loved our UI 😉)
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-purple hover:bg-purple/90">
              Try TruthBud Now
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About; 