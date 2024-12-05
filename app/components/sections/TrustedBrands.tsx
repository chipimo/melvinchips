"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { fadeInUp } from "@/app/utils/animations";
import Image from "next/image";

const companies = [
  {
    name: "Zambia National Commercial Bank",
    logo: "https://www.zanaco.co.zm/wp-content/uploads/2020/06/zanaco-logo.png",
  },
  {
    name: "MTN Zambia",
    logo: "https://www.mtn.zm/wp-content/uploads/2019/03/mtn-logo.png",
  },
  {
    name: "Airtel Zambia",
    logo: "https://www.airtel.co.zm/assets/images/airtel-logo.png",
  },
  {
    name: "Zambeef Products",
    logo: "https://www.zambeefplc.com/wp-content/uploads/2020/01/zambeef-logo.png",
  },
  {
    name: "Madison Financial Services",
    logo: "https://www.madison.co.zm/wp-content/uploads/2019/05/madison-logo.png",
  },
  {
    name: "First National Bank Zambia",
    logo: "https://www.fnbzambia.co.zm/images/fnb-logo.png",
  },
  {
    name: "Lafarge Zambia",
    logo: "https://www.lafarge.co.zm/img/logo.png",
  },
  {
    name: "Zambian Breweries",
    logo: "https://www.zambianbreweries.com/wp-content/uploads/2019/01/zb-logo.png",
  },
  {
    name: "Stanbic Bank Zambia",
    logo: "https://www.stanbicbank.co.zm/static/img/logo.png",
  },
  {
    name: "Zesco Limited",
    logo: "https://www.zesco.co.zm/wp-content/uploads/2020/03/zesco-logo.png",
  },
];

export function TrustedBrands() {
  return (
    <section className="py-4 -mt-14 overflow-hidden bg-[#111111]/50 backdrop-blur-sm">
      <Container>
        <div className="text-center mb-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/60"
          >
            Trusted by leading companies in Zambia
          </motion.p>
        </div>
      </Container>

      <div className="relative">
        <div className="flex space-x-8 animate-[scroll_30s_linear_infinite]">
          {[...companies, ...companies].map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 flex items-center justify-center px-8"
            >
              <div className="relative w-32 h-12">
              {company.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#111111] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#111111] to-transparent z-10" />
      </div>
    </section>
  );
}
