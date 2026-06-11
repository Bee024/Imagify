import { motion } from "framer-motion";
import { stepsData } from "../assets/assets";

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-32 px-4"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How it works</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Transform words into stunning images
      </p>

      <div className="w-full max-w-3xl flex flex-col gap-4">
        {stepsData.map((item, index) => (
          <article
            key={index}
            className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 sm:px-8 shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-md"
          >
            <img
              src={item.icon}
              alt={item.title}
              width={40}
              height={40}
              className="shrink-0"
            />

            <div>
              <h2 className="text-xl font-medium text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-500 mt-1">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
