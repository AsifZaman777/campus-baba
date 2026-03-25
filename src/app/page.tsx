import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <Features />
            <Pricing />
            <FAQ />
            <Support />
            <Footer />
        </main>
    );
}
