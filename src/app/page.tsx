import { MainLandingText } from "@/components/MainText";
import { Navbar } from "@/components/Navbar";
import { ReviewCard } from "@/components/ReviewCard";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Samsung Sharp Sans' }}>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center pt-12">
        <section>
          <MainLandingText />
        </section>
        <section>
          <About/>
        </section>
        <section>
          <FeatureCard />
        </section>
        <section>
          <ReviewCard />
        </section>
        <section>
          <text className=" text-5xl">
            Available on Android Version
          </text>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
