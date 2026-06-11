import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-24 px-6 md:px-16 lg:px-28"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-10 text-center">
        Turn your imagination into visuals
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 max-w-6xl">
        <img
          src={assets.sample_img_1}
          alt="AI generated sample artwork"
          className="w-80 sm:w-96 xl:w-[28rem] rounded-xl shadow-md"
        />

        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Introducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 leading-7 mb-4">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, this tool turns
            your text into eye-catching images in just a few clicks.
          </p>
          <p className="text-gray-600 leading-7">
            Imagine it, describe it, and watch it come to life instantly. It is
            a simple way to create creative visuals for projects, content, and
            inspiration.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
