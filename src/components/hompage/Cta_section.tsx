"use client";
import { Button } from "@/components/ui/button";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 20 },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className=""
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to start your quiz journey?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Join now and be part of the global learning community
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-secondary btn-text px-8 py-4 box-radius text-lg font-semibold">
            Get Start
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-gray-300 hover:text-gray-900 px-8 py-4 box-radius text-lg font-semibold bg-transparent"
          >
            Explore More
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
