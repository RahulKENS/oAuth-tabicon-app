import shopModel from "../../models/shop";

export const uninstallHandler = async (req, res) => {
  try {
    const { domain } = req.body;
    await shopModel.findOneAndDelete({ shop: domain });
    res.status(200).json({
        message: "flag1",
        status: 200
      });
  } catch (error) {
      console.log(error);
    res.status(200).json({
        message: "flag0",
        status: 400
      });
  }
};
