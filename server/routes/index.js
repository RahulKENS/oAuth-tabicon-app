import { Router } from "express";
import { callback } from "../controller/index";
import { config } from "../utils/config";

const { apikey, appurl,scopes} = config;

const router = Router();
router.get("/shopify", (req, res) => {
    try {
      const { shop } = req.query;
     
  
      const redirectURL = appurl + "/auth/callback";
      const shopifyURL =
        "https://" +
        shop +
        "/admin/oauth/authorize?client_id=" +
        apikey +
        "&scope=" +
        scopes +
        "&state=" +
        "shopState" +
        "&redirect_uri=" +
        redirectURL;
        console.log(shopifyURL);
      res.redirect(shopifyURL);
    } catch (error) {}
  });

router.get("/callback", callback);



export default router;
