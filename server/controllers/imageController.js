import axios from "axios";
import FormData from "form-data";
import userModel from "../models/userModel";

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    const user = await userModel.findById(userId);

    if (!user || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (user.creditBalanace === 0 || userModel.creditBalanace < 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalanace: user.creditBalanace,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    // Made the api call and stored it in const {data}
    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      },
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data: image/png;base64,${base64Image}`;

    await userModel.findByIdAndDelete(user._id, {
      creditBalanace: user.creditBalanace - 1,
    });

    res.json({
      success: true,
      message: "Image Generated",
      creditBalanace: user.creditBalanace - 1,
      resultImage,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
