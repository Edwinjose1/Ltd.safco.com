import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-farmers.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Investors" },
    { icon: TrendingUp, value: "13%", label: "Max Returns" },
    { icon: Shield, value: "100%", label: "Secure" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center pt-24 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}>
        {/* Subtle Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232e7d32' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-xl floating"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-golden/20 to-primary/10 blur-2xl floating-delayed"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-[5%] w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-primary-light/20 blur-xl"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Left accent line with glow */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 120, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-0 top-0 w-1 rounded-full hidden md:block pulse-glow"
              style={{ background: "var(--gradient-primary)" }}
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-6 md:ml-8"
            >
              <Sparkles className="w-4 h-4 text-golden" />
              <span className="text-sm font-semibold text-primary">Women-Led Agricultural Investment</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:pl-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
                <motion.span 
                  className="text-primary-dark block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Empowering Women.
                </motion.span>
                <motion.span 
                  className="gradient-text block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Cultivating Growth.
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 md:pl-8"
            >
              Secure investments, reliable returns, and a commitment to community
              upliftment through sustainable agriculture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 md:pl-8"
            >
              <Link to="/services">
                <Button
                  size="lg"
                  className="group rounded-full px-8 font-semibold shadow-accent hover:shadow-hover transition-all duration-300 hover:-translate-y-1 gap-2"
                >
                  Our Services
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/#about">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 font-semibold border-2 hover:bg-secondary transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-6 mt-12 md:pl-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="stat-card flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                    <stat.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary-dark">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Frame */}
              <motion.div
                className="absolute -inset-4 rounded-3xl border-2 border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              
              {/* Glowing Background */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-golden/10 blur-2xl" />
              
              {/* Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl image-reveal"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={heroImage}
                  alt="Women farmers working in fields"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent" />
                
                {/* Floating Label */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 glass-card p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <p className="text-sm font-semibold text-primary-dark">
                    🌾 Empowering 500+ women across Kerala through sustainable farming
                  </p>
                </motion.div>
              </motion.div>

              {/* Floating Accent Cards */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card p-3 shadow-lg"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-golden)' }}>
                    <TrendingUp className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-primary">Up to 13% Returns</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass-card p-3 shadow-lg"
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                    <Shield className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-primary">Secure Investment</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;