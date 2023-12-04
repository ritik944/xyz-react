import {motion} from "framer-motion"
import { fadeIn } from "./Variants";


const Banner =({banner,heading,subheading,btn1,btn2})=>{
    return (
        <div>
            <div className="gradientbg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/*banner image */}
          <motion.div
          variants={fadeIn("down",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.75}}>
            <img src={banner} alt="" className="lg:h-[386px]" />
          </motion.div>

          {/*banner content*/}
          <motion.div variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.75}} className="md:w-3/5">
            <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">{heading}</h2>
            <p className="text-2xl text-[#EBEBEB] mb-8">
              {subheading}
            </p>
            <div className="space-x-5 space-y-5">
              <button className="btnprimary">{btn1}</button>
              <button className="btnprimary">{btn2}</button>
            </div>
          </motion.div>
        </div>
      </div>
        </div>
    );
};

export default Banner;