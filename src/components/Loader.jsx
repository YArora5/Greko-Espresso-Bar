import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

import "../styles/loader.css";

export default function Loader() {

  return (

    <div className="loader">

      <motion.div

        className="loader-content"

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        transition={{
          duration:.4
        }}

      >

        <motion.div

          className="loader-icon"

          animate={{

            rotate:360,

            scale:[1,1.15,1]

          }}

          transition={{

            rotate:{
              duration:2,
              repeat:Infinity,
              ease:"linear"
            },

            scale:{
              duration:1.6,
              repeat:Infinity
            }

          }}

        >

          <Coffee size={58}/>

        </motion.div>


        <motion.h2

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:.2
          }}

        >

          GREKO

        </motion.h2>


        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:.5
          }}

        >

          Brewing Happiness...

        </motion.p>


        <div className="loader-bar">

          <motion.div

            className="loader-progress"

            initial={{
              width:0
            }}

            animate={{
              width:"100%"
            }}

            transition={{
              duration:2
            }}

          />

        </div>

      </motion.div>

    </div>

  );

}