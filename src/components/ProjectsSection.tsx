import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shirt, Plane, Coffee, Sparkles, Store, Leaf } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    { name: "Boutiques", icon: Shirt },
    { name: "Food Export", icon: Coffee },
    { name: "Tourism", icon: Plane },
    { name: "Organic Skincare", icon: Leaf },
  ];

  const brands = [
    { 
      name: "SWATANTRA", 
      href: "/swatantra", 
      tagline: "Premium Clothing",
      icon: Store 
    },
    { 
      name: "WANDER WING", 
      href: "/wanderwing", 
      tagline: "Holiday Tours",
      icon: Plane 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-primary-dark text-primary-foreground relative overflow-hidden"
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        {/* Animated Stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-foreground/30"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Our Ventures</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Our Projects & Brands
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Diverse initiatives empowering communities through sustainable business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-500"
          >
            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Projects
            </h3>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {projects.map((project, index) => (
                <motion.li
                  key={project.name}
                  variants={itemVariants}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary-foreground/5 transition-all duration-300 cursor-default group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <span className="text-lg">{project.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-500"
          >
            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden animate-pulse" />
              Our Brands
            </h3>
            <ul className="space-y-4">
              {brands.map((brand, index) => (
                <motion.li
                  key={brand.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    to={brand.href}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-transparent hover:border-primary-foreground/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <brand.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="block text-lg font-bold group-hover:text-accent transition-colors duration-300">
                        {brand.name}
                      </span>
                      <span className="text-sm opacity-70">{brand.tagline}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;