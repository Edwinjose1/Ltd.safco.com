import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FileText,
  RefreshCw,
  Lock,
  Flag,
  Coins,
  Briefcase,
  Coffee,
  Shirt,
  IdCard,
  ShieldCheck,
  TrendingUp,
  Landmark,
} from "lucide-react";

const Services = () => {
  const requirements = [
    { icon: IdCard, text: "Aadhaar Card" },
    { icon: FileText, text: "Valid ID Proof" },
    { icon: FileText, text: "2 Passport Photos" },
  ];

  const recurringPlans = [
    { plan: "RC1", profit: "9%", monthly: "1,000", maturity: "12,596" },
    { plan: "RC2", profit: "9.5%", monthly: "1,000", maturity: "26,504" },
    { plan: "RC3", profit: "10%", monthly: "1,000", maturity: "42,075" },
    { plan: "RC4", profit: "10.5%", monthly: "1,000", maturity: "59,738" },
    { plan: "RC5", profit: "11%", monthly: "1,000", maturity: "80,028" },
    { plan: "RC6", profit: "12%", monthly: "1,000", maturity: "1,02,605" },
  ];

  const fixedMonthly = [
    { plan: "FC1", profit: "12%", amount: "1,00,000", maturity: "1,12,000" },
    { plan: "FC2", profit: "12.25%", amount: "1,00,000", maturity: "1,24,500" },
    { plan: "FC3", profit: "12.5%", amount: "1,00,000", maturity: "1,37,500" },
    { plan: "FC4", profit: "12.75%", amount: "1,00,000", maturity: "1,51,000" },
    { plan: "FC5", profit: "13%", amount: "1,00,000", maturity: "1,65,000" },
    { plan: "FC6", profit: "13.25%", amount: "1,00,000", maturity: "1,79,500" },
  ];

  const fixedMaturity = [
    { plan: "FC1", profit: "12.25%", amount: "1,00,000", maturity: "1,12,250" },
    { plan: "FC2", profit: "12.5%", amount: "1,00,000", maturity: "1,26,563" },
    { plan: "FC3", profit: "12.75%", amount: "1,00,000", maturity: "1,43,334" },
    { plan: "FC4", profit: "13%", amount: "1,00,000", maturity: "1,63,047" },
    { plan: "FC5", profit: "13.25%", amount: "1,00,000", maturity: "1,86,291" },
    { plan: "FC6", profit: "DOUBLE", amount: "1,00,000", maturity: "2,00,000" },
  ];

  const otherServices = [
    { icon: Coins, name: "Gold Loan" },
    { icon: Briefcase, name: "Business Loan" },
    { icon: Coffee, name: "Coffee Shops" },
    { icon: Shirt, name: "Clothing Stores" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />

      <main className="pt-24">
        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden bg-[#103C36] py-28 text-white">
          {/* Abstract Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid-pattern)" />
            </svg>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D4AF37]/30 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="container relative z-10 text-center max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37] mr-2" />
                <span className="text-sm font-semibold tracking-wider uppercase text-white/90">Trusted By Farmers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Empowering Your Future With <span className="text-[#D4AF37]">Secure Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Comprehensive financial services and strategic investments designed to grow your wealth and support the community.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container max-w-7xl mx-auto px-6 py-20 space-y-24">

          {/* --- Requirements Section --- */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-[#103C36] mb-4">Start Your Journey</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Become a shareholder with simple documentation and a nominal fee.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {requirements.map((req, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-[#103C36]/5 flex items-center justify-center mb-4 group-hover:bg-[#103C36] transition-colors duration-300">
                    <req.icon className="w-8 h-8 text-[#103C36] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-800">{req.text}</h3>
                </div>
              ))}
              <div className="bg-[#103C36] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10" />
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold">₹</span>
                </div>
                <h3 className="font-bold">Reg. Fee: ₹100/-</h3>
                <p className="text-white/60 text-sm mt-2">One-time payment</p>
              </div>
            </div>
          </motion.section>

          {/* --- Financial Services Section --- */}
          <section className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-[#103C36] mb-4 flex items-center justify-center gap-3">
                <Landmark className="w-8 h-8 text-[#D4AF37]" />
                Financial Products
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37] mx-auto rounded-full"></div>
            </div>

            {/* Recurring Plans */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="p-8 border-b border-gray-100 bg-gray-50/50 flex items-center gap-4">
                <div className="p-3 bg-[#103C36]/10 rounded-lg text-[#103C36]">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#103C36]">Recurring Deposit</h3>
                  <p className="text-sm text-gray-500">Steady growth with regular monthly investments deposit.</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#103C36] text-white">
                    <tr>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Plan</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Profit %</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Monthly (₹)</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Maturity (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recurringPlans.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-[#103C36]">{row.plan}</td>
                        <td className="p-4 text-green-600 font-bold">{row.profit}</td>
                        <td className="p-4 text-gray-600">{row.monthly}</td>
                        <td className="p-4 font-bold text-gray-900">{row.maturity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Fixed Monthly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="p-8 border-b border-gray-100 bg-gray-50/50 flex items-center gap-4">
                <div className="p-3 bg-[#103C36]/10 rounded-lg text-[#103C36]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#103C36]">Fixed Deposit (Monthly Scheme)</h3>
                  <p className="text-sm text-gray-500">Monthly returns on your lump sum investment.</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#103C36] text-white">
                    <tr>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Plan</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Monthly Profit %</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Invest Amount(₹)</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Total Maturity (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {fixedMonthly.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-[#103C36]">{row.plan}</td>
                        <td className="p-4 text-green-600 font-bold">{row.profit}</td>
                        <td className="p-4 text-gray-600">{row.amount}</td>
                        <td className="p-4 font-bold text-gray-900">{row.maturity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Fixed Maturity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <div className="p-8 border-b border-gray-100 bg-gray-50/50 flex items-center gap-4">
                <div className="p-3 bg-[#103C36]/10 rounded-lg text-[#103C36]">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#103C36]">Fixed Deposit (Maturity Scheme)</h3>
                  <p className="text-sm text-gray-500">Maximize your returns with compound growth.</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#103C36] text-white">
                    <tr>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Plan</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Profit %</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Invest (₹)</th>
                      <th className="p-4 font-semibold text-sm uppercase tracking-wider">Maturity (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {fixedMaturity.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-[#103C36]">{row.plan}</td>
                        <td className="p-4 text-green-600 font-bold">
                          {row.profit === "DOUBLE" ? <span className="text-[#D4AF37] font-black">DOUBLE</span> : row.profit}
                        </td>
                        <td className="p-4 text-gray-600">{row.amount}</td>
                        <td className="p-4 font-bold text-gray-900">{row.maturity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </section>

          {/* --- Other Services --- */}
          <section className="py-12">
            <h2 className="text-3xl font-heading font-bold text-[#103C36] mb-10 text-center">Beyond Banking</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:border-[#D4AF37]/30"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#103C36] to-[#0D302B] flex items-center justify-center mb-6 text-white shadow-lg">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#103C36]">{service.name}</h4>
                </motion.div>
              ))}
            </div>
          </section>

          {/* --- Company Info --- */}
          <div className="bg-[#103C36] text-white rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <Flag className="w-12 h-12 mx-auto text-[#D4AF37] mb-4" />
              <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest opacity-80">
                Subhaprabhatham Agro Farmers Producer Co. Ltd.
              </h3>
              <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white mb-6">
                SAFCO
              </h2>
              <div className="inline-block px-6 py-2 rounded-full border border-[#D4AF37] text-[#D4AF37] text-sm font-mono bg-[#D4AF37]/10">
                Reg. No.: U01100KL2020 PTC 065753
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link to="/#services">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-[#103C36] text-[#103C36] hover:bg-[#103C36] hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Return to Home
              </Button>
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
