import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutProduce from "@/assets/about-produce.jpg";
import aboutBoutique from "@/assets/about-boutique.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="section-title mb-8">
              Who We Are
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                SAFCO (Subhaprabhatham Agro Farmers Producer Company) is an
                organisation that collects investments from investors and provides
                them with reliable returns. The company uses these investments to
                uplift women from economically weaker sections by offering business
                support, gold loans, and various empowerment initiatives.
              </p>
              <p>
                SAFCO also develops its own clothing brand and, as a producer
                company, identifies and cultivates selected agricultural products.
                These products are processed, branded, and marketed by the company.
                The income generated from these activities is used to provide
                returns to our investors and to strengthen the company's growth.
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mt-8"
            >
              {["Women Empowerment", "Gold Loans", "Sustainable Farming", "Clothing Brand"].map((feature, index) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-full bg-secondary text-primary text-sm font-semibold border border-primary/20 cursor-default transition-all duration-300 hover:shadow-md hover:bg-primary hover:text-primary-foreground"
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[520px]"
          >
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl" />

            {/* Image 1 - Top Right */}
            <motion.div
              className="absolute top-0 right-0 w-4/5 h-64 md:h-72 rounded-2xl overflow-hidden shadow-xl image-reveal group"
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 3 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ rotate: 0, scale: 1.02, zIndex: 10 }}
            >
              <img
                src={aboutProduce}
                alt="Hands holding organic grains and produce"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />
              <motion.div
                className="absolute bottom-4 left-4 right-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <span className="inline-block px-3 py-1.5 rounded-full bg-primary-foreground/90 text-primary text-xs font-semibold shadow-lg">
                  🌾 Sustainable Agriculture
                </span>
              </motion.div>
            </motion.div>

            {/* Image 2 - Bottom Left */}
            <motion.div
              className="absolute bottom-0 left-0 w-4/5 h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl image-reveal group"
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: -3 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ rotate: 0, scale: 1.02, zIndex: 10 }}
            >
              <img
                src={aboutBoutique}
                alt="Woman entrepreneur at boutique"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 via-transparent to-transparent" />
              <motion.div
                className="absolute bottom-4 left-4 right-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 }}
              >
                <span className="inline-block px-3 py-1.5 rounded-full bg-primary-foreground/90 text-primary text-xs font-semibold shadow-lg">
                  👩‍💼 Women Empowerment
                </span>
              </motion.div>
            </motion.div>

            {/* Floating Stat Badge */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-card p-4 shadow-lg z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-xs text-muted-foreground font-medium">Women Empowered</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;