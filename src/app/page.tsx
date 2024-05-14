import { MainLandingText } from "@/components/MainText";
import { Navbar } from "@/components/Navbar";
import { ReviewCard } from "@/components/ReviewCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import Download from "@/components/Download";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Samsung Sharp Sans' }}>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center pt-12">
        <section id="home">
          <MainLandingText />
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="features">
          <FeatureCard />
        </section>
        <section id="reviews">
          <ReviewCard />
        </section>
        <section id="download">
          <Download/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
