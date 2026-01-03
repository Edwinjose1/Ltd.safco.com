import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Sprout } from "lucide-react";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower women and economically weaker communities by providing gold loans and financial services at affordable interest rates, helping them achieve independence and stability. We are building a premium brand that creates meaningful employment opportunities for women and underprivileged groups.",
      accentColor: "from-primary to-primary-dark",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To uplift grassroots-level women farmers and promote agriculture as a vital part of our culture. We identify specific agricultural products, support farmers in cultivating them, transform these products into valuable by-products, and successfully bring them to the market.",
      accentColor: "from-accent to-primary",
    },
  ];

  const values = [
    { icon: Heart, label: "Community First" },
    { icon: Sprout, label: "Sustainable Growth" },
  ];

  return (
    <section id="mission" className="py-20 md:py-28 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%232e7d32' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Floating Decorations */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/5 blur-xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/5 blur-2xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            What Drives Us
          </motion.span>
          <h2 className="section-title">Our Core Values</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="interactive-card bg-card rounded-2xl p-8 md:p-10 shadow-soft hover:shadow-hover transition-all duration-500 group relative overflow-hidden"
            >
              {/* Top gradient line */}
              <motion.div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.accentColor}`}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                style={{ transformOrigin: 'left' }}
              />

              {/* Icon Container */}
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.accentColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <card.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              <h3 className="font-heading text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>

              {/* Hover Arrow */}
              <motion.div
                className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ x: -10 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-primary">→</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Values Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card shadow-md border border-border/50 cursor-default"
            >
              <value.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">{value.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;