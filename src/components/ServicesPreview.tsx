import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Clock, Sparkles } from "lucide-react";
import investmentImage from "@/assets/investment-field.jpg";

const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: TrendingUp, label: "Up to 13% Returns", description: "Competitive profit sharing" },
    { icon: Shield, label: "Secure Investment", description: "Government registered company" },
    { icon: Clock, label: "Flexible Plans", description: "1-6 year investment options" },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-golden/10 via-primary/5 to-accent/10 blur-2xl" />
            
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={investmentImage}
                alt="Golden wheat field at sunset"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent" />
              
              {/* Overlay Content */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="glass-card p-4 backdrop-blur-md bg-card/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-golden)' }}>
                      <Sparkles className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-primary-dark">Invest in Agriculture</p>
                      <p className="text-sm text-muted-foreground">Grow your wealth sustainably</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -top-4 -right-4 glass-card p-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text-golden">₹1L+</p>
                <p className="text-xs text-muted-foreground">Min Investment</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Financial Services
            </motion.span>

            <h2 className="section-title mb-6">Services We Provide</h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Explore our comprehensive financial services including Recurring
              Contribution, Fixed Contribution plans, Gold Loans, Business Loans,
              and more.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 cursor-default group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: 'var(--gradient-primary)' }}>
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{feature.label}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link to="/services">
                <Button
                  size="lg"
                  className="group rounded-full px-8 font-semibold shadow-accent hover:shadow-hover transition-all duration-300 hover:-translate-y-1 gap-2"
                >
                  View All Services & Plans
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;