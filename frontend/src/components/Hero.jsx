import React from 'react'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="title"
        >
          <h1>Let's</h1>
          <h1>Get</h1>
          <h1>Moving</h1>
        </motion.div>
        <motion.div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </motion.div>
        <div className="buttons">
          <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.2 }}>
            Start Your Journey
          </motion.button>
          <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.2 }}>
            Discover Your Plan
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Hero
