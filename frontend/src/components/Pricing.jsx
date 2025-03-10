import React from 'react'
import {Check} from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 8000,
      length: 3
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF_YEARLY",
      price: 14000,
      length: 6
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 26000,
      length: 12
    }
  ]
  return (
    <section className='pricing'>
      <h1>Hustle Hard Fitness</h1>
      <div className="wrapper">
        {
          pricing.map((element) => {
            return (
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1 }}
                className="card"
                key={element.title}
              >
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.price}</h3>
                  <p>For {element.length} Months</p>
                </div>
                <div className="description">
                  <p>
                    <Check /> Equipment
                  </p>
                  <p>
                    <Check /> All Day Free Training
                  </p>
                  <p>
                    <Check /> Free Restrooms
                  </p>
                  <p>
                    <Check /> 24/7 Skilled Support
                  </p>
                  <p>
                    <Check /> 20 Days Freezing Support
                  </p>
                  <Link to={"/"}>Join Now</Link>
                </div>
              </motion.div>
            );
          })
        }
      </div>
    </section>
  )
}

export default Pricing
