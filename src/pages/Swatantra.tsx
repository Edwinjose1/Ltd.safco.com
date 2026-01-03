import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Sparkles } from "lucide-react";
import modelImg from "@/assets/swatantra/model.png";
import fabricImg from "@/assets/swatantra/fabric.png";
import interiorImg from "@/assets/swatantra/interior.png";

const Swatantra = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const features = [
    { title: "Curated Collections", desc: "Hand-picked contemporary and traditional wear.", delay: 0.1 },
    { title: "Quality Craftsmanship", desc: "Exquisite details and fine fabrics.", delay: 0.2 },
    { title: "Current Trends", desc: "Always in vogue, always unique.", delay: 0.3 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="relative overflow-hidden">
        {/* Decorative Side Borders - Thinner and more subtle */}
        <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-6 z-10 border-r border-[#103C36]/10 bg-white" />
        <div className="hidden lg:block fixed right-0 top-0 bottom-0 w-6 z-10 border-l border-[#103C36]/10 bg-white" />

        {/* --- Hero Section --- */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center relative px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center z-20"
          >
            <div className="font-heading font-normal relative inline-block text-[#103C36] select-none">
              <span className="block text-[8rem] sm:text-[12rem] md:text-[16rem] leading-[0.75] opacity-95">S</span>
              <motion.div
                className="absolute -top-4 -right-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-[#D4AF37] opacity-60" />
              </motion.div>
            </div>

            <div className="font-heading font-semibold tracking-[0.2em] transform translate-y-[-1rem] text-3xl sm:text-5xl md:text-7xl mb-4 uppercase text-[#103C36]">
              Watantra
            </div>

            <div className="font-body text-xs sm:text-sm font-medium uppercase tracking-[0.4em] text-[#103C36]/80 flex items-center justify-center gap-4">
              <span className="h-[1px] w-8 bg-[#103C36]/30"></span>
              Boutique
              <span className="h-[1px] w-8 bg-[#103C36]/30"></span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Explore</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#103C36]/50 to-transparent"></div>
          </motion.div>
        </section>

        {/* --- Introduction / Z-Pattern 1 --- */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center md:text-left pl-0 md:pl-12"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-heading text-[#103C36] mb-2">Swatantra</h2>
                <h3 className="text-3xl md:text-4xl font-heading italic text-[#103C36]/80">Lifestyle</h3>
              </div>
              <p className="text-lg leading-relaxed text-[#103C36]/80 font-light max-w-md mx-auto md:mx-0">
                <strong className="font-medium text-[#103C36]">Swatantra</strong> is more than a boutique; it is a curation of elegance. Based in the cultural heart of Thrissur, we bring you a seamless blend of contemporary flair and traditional artistry.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="rounded-none border-[#103C36] text-[#103C36] hover:bg-[#103C36] hover:text-white px-8 py-6 uppercase tracking-widest text-xs transition-all duration-500">
                  Read Our Story
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative shadow-2xl">
                <img src={modelImg} alt="Contemporary Ethnic Wear" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 border-[1px] border-white/20 m-4 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#103C36] flex items-center justify-center text-white/90 p-4 shadow-xl">
                <span className="font-heading text-center text-xs uppercase tracking-widest leading-relaxed">Est.<br />2024</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Craftsmanship / Z-Pattern 2 --- */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#F9F9F9]/50 my-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative"
            >
              <div className="aspect-square overflow-hidden bg-gray-100 shadow-xl">
                <img src={fabricImg} alt="Exquisite Details" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 space-y-8 pr-0 md:pr-12"
            >
              <h2 className="text-4xl font-heading text-[#103C36]">
                <span className="block text-sm font-sans uppercase tracking-[0.3em] mb-4 text-[#103C36]/60">Our Promise</span>
                Quality &<br /> <span className="italic opacity-80">Craftsmanship</span>
              </h2>

              <div className="space-y-6">
                {features.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: item.delay, duration: 0.5 }}
                    className="group cursor-default"
                  >
                    <h4 className="text-xl font-heading text-[#103C36] mb-1 group-hover:translate-x-2 transition-transform duration-300">{item.title}</h4>
                    <p className="text-sm text-gray-500 font-light">{item.desc}</p>
                    <div className="h-[1px] w-full bg-[#103C36]/10 mt-4 group-hover:bg-[#103C36]/30 transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Boutique Showcase --- */}
        <section className="py-0 relative">
          <motion.div style={{ y }} className="h-[60vh] md:h-[80vh] w-full relative overflow-hidden">
            <img src={interiorImg} alt="Boutique Interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
              <h2 className="text-5xl md:text-7xl font-heading mb-6 tracking-wide drop-shadow-lg">Visit Us</h2>
              <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-8 drop-shadow-md">Thrissur, Kerala</p>
              <div className="flex gap-6">
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#103C36] rounded-full px-8 py-6 uppercase tracking-widest text-xs font-semibold backdrop-blur-sm transition-all duration-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- Footer CTA --- */}
        <section className="py-24 px-6 text-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#103C36]/60 font-serif italic text-lg mb-8">Ready to explore?</p>
            <h2 className="text-4xl md:text-6xl font-heading text-[#103C36] mb-12">Discover Your Style</h2>

            <Link to="/#projects">
              <Button
                size="lg"
                className="rounded-full px-12 py-8 text-base font-semibold shadow-2xl transition-all duration-500 hover:scale-105 bg-[#103C36] text-white hover:bg-[#0D302B] uppercase tracking-widest"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </section>

      </main>
    </div>
  );
};

export default Swatantra;
