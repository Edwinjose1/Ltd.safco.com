import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plane, Map, Compass, Globe } from "lucide-react";
import landscapeImg from "@/assets/wanderwing/landscape.png";
// import cultureImg from "@/assets/wanderwing/culture.png";
const cultureImg = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1";
import detailImg from "@/assets/wanderwing/detail.png";

const WanderWing = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const features = [
    { title: "Curated Experiences", desc: "Hand-picked destinations for the discerning traveler.", icon: Globe, delay: 0.1 },
    { title: "Adventure & Comfort", desc: "Seamlessly blending thrill with relaxation.", icon: Compass, delay: 0.2 },
    { title: "Cultural Immersion", desc: "Authentic encounters with local traditions.", icon: Map, delay: 0.3 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="relative">
        {/* --- Hero Section with Parallax --- */}
        <section className="relative h-screen overflow-hidden flex items-center justify-center">
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 z-0"
          >
            <img src={landscapeImg} alt="Tropical Paradise" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          </motion.div>

          <div className="relative z-10 text-center text-white px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="mb-6 inline-block relative">
                <Plane className="w-12 h-12 mx-auto text-white/90 mb-4 animate-pulse" />
                <div className="h-[1px] w-24 bg-white/50 mx-auto"></div>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-medium tracking-tight mb-2 shadow-sm">
                Wander Wing
              </h1>
              <h2 className="text-xl md:text-2xl font-body uppercase tracking-[0.5em] font-light text-white/90">
                Holidays
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-[1px] h-16 bg-white/50 animate-bounce"></div>
          </motion.div>
        </section>

        {/* --- Introduction Split Section --- */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative">
                <img src={cultureImg} alt="Authentic Culture" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 border-[1px] border-white/20 m-6 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 opacity-20 -z-10 bg-[hsl(var(--wander-teal))] rounded-full blur-3xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:pl-8"
            >
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[hsl(var(--wander-teal))] mb-2">About Us</h3>
                <h2 className="text-4xl md:text-5xl font-heading text-[hsl(var(--wander-green))] leading-tight">
                  Crafting Journeys <br />
                  <span className="italic font-serif text-[hsl(var(--wander-teal))]">Beyond Ordinary.</span>
                </h2>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground font-light">
                <strong className="font-medium text-[hsl(var(--wander-green))]">Wander Wing Holidays</strong> is your trusted travel partner offering curated holiday experiences. We specialize in creating memorable journeys that combine adventure, comfort, and authentic cultural experiences for travelers seeking unique destinations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(var(--wander-teal))/10] flex items-center justify-center text-[hsl(var(--wander-teal))]">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-lg text-[hsl(var(--wander-green))]">{feature.title}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Textured Features / Footer Section --- */}
        <section className="relative py-24 px-6 md:px-12 bg-[#F5F9F9] overflow-hidden">
          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url(${detailImg})`, backgroundSize: 'cover' }}></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Globe className="w-12 h-12 mx-auto text-[hsl(var(--wander-teal))] mb-6 opacity-80" />
              <h2 className="text-3xl md:text-5xl font-heading text-[hsl(var(--wander-green))] mb-8">
                "The world is a book and those who do <br /> not travel read only one page."
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
                <Link to="/#projects">
                  <Button
                    size="lg"
                    className="rounded-full px-10 py-7 text-base shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ background: 'hsl(var(--wander-teal))' }}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 py-7 text-base border-[hsl(var(--wander-teal))] text-[hsl(var(--wander-teal))] hover:bg-[hsl(var(--wander-teal))] hover:text-white transition-all duration-300"
                >
                  View Packages
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default WanderWing;
