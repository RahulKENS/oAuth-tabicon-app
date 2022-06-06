// import jwt from 'jsonwebtoken'
import { accessTokenGet, saveToken,jwtToken,unInstallWebhook} from "../helper";
import shopModel from "../models/shop";


export const callback = async (req, res) => {
  try {
    const { code, shop } = req.query;

    const checkShop = await shopModel.find({ shop });
    if (checkShop.length >= 1) {
      // res.status(200).json({
      //   status: 200,
      //   message: "old user!",
      // });
      // comment
      res.status(200).redirect(`https://tabicon.netlify.app/?token=${await jwtToken(shop)}`);

    } else {
      const {
        data: { access_token },
      } = await accessTokenGet(shop, code);
      Promise.all([
        saveToken(shop, access_token),
        unInstallWebhook(shop, access_token),
     

        
      ]);
      // res.status(200).json({
      //   status: 200,
      //   message: "new user!",
      // });
      res.status(200).redirect(`https://tabicon.netlify.app/?token=${await jwtToken(shop)}`);
      
    }
  } catch (error) {
    console.log("error for calling a callback function in controller", error);
    res.status(200).json({
      status: 400,
      message: "callback error !",
    });
  }
};
