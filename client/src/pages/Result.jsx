import { motion } from "framer-motion";
import { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {};

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex min-h-[90vh] flex-col items-center justify-center px-4"
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={image}
            alt="Generated preview"
            className="w-full max-w-sm rounded-lg shadow-md"
          />

          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? "w-full transition-all duration-[10s]" : "w-0"}`}
          />
        </div>

        <p className={!loading ? "hidden" : ""}>Loading...</p>
      </div>

      {!isImageLoaded && (
        <div className="mt-10 flex w-full max-w-2xl items-center rounded-full bg-neutral-500/90 p-1 text-sm text-white shadow-md">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent px-6 py-3 outline-none placeholder-color"
          />

          <button
            type="submit"
            className="rounded-full bg-zinc-900 px-8 py-3 transition hover:bg-black sm:px-16"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="mt-10 flex flex-wrap justify-center gap-2 rounded-full p-0.5 text-sm text-white">
          <p
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="cursor-pointer rounded-full border border-zinc-900 bg-transparent px-8 py-3 text-black"
          >
            Generate Another
          </p>

          <a
            href={image}
            download="generated-image.png"
            className="cursor-pointer rounded-full bg-zinc-900 px-10 py-3"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
