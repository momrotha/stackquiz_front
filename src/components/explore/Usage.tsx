"use client";

import React, { useRef, useEffect } from "react";
import { Play } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

const QuizInstructions = () => {
  // Refs & controls for each card
  const hostRef = useRef<HTMLDivElement>(null);
  const hostControls = useAnimation();
  const hostInView = useInView(hostRef, { once: false, margin: "-100px" });

  const playRef = useRef<HTMLDivElement>(null);
  const playControls = useAnimation();
  const playInView = useInView(playRef, { once: false, margin: "-100px" });

  // Animate on scroll
  useEffect(() => {
    if (hostInView)
      hostControls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 20, delay: 0 },
      });
    else hostControls.start({ opacity: 0, y: 50 });

    if (playInView)
      playControls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.2 },
      });
    else playControls.start({ opacity: 0, y: 50 });
  }, [hostInView, playInView, hostControls, playControls]);

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* How to Host a Template */}
          <motion.div
            ref={hostRef}
            initial={{ opacity: 0, y: 50 }}
            animate={hostControls}
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Orange Header */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-gray-800" />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  How to Host a Template
                </h2>
              </div>
              <p className="text-orange-50 mt-2 text-sm">
                Share your quiz in just two quick steps.
              </p>
            </div>

            {/* Steps Content */}
            <div className="p-6 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    Select Your Template
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Choose from saved templates or our website&apos;s collection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    Host or Assign
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Host it instantly or schedule as an assignment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How to Play */}
          <motion.div
            ref={playRef}
            initial={{ opacity: 0, y: 50 }}
            animate={playControls}
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-white rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Orange Header */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-gray-800" />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  How to Play
                </h2>
              </div>
              <p className="text-orange-50 mt-2 text-sm">
                Begin your quiz adventure in two easy steps.
              </p>
            </div>

            {/* Steps Content */}
            <div className="p-6 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    Choose Your Adventure
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Pick a quiz template that interests you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    Start Playing
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Enter your name and begin playing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuizInstructions;
