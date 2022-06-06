import axios from "axios";
import jwt from "jsonwebtoken";

import { config } from "../utils/config";
import shopModel from "../models/shop";

const { apikey, apisecretkey, appurl, apiversion } = config;

export const accessTokenGet = async (shop, code) => {
  try {
    return await axios({
      url: `https://${shop}/admin/oauth/access_token`,
      method: "POST",
      data: {
        client_id: apikey,
        client_secret: apisecretkey,
        code,
      },
    });
  } catch (error) {
    console.log("error while genrating tokken..in helper", error);
    return false;
  }
};

export const saveToken = async (shop, access_token) => {
  try {
    return await shopModel.create({ shop, access_token });
  } catch (error) {
    console.log("error in helper while saving token in helper",error);

    return false;
  }
};

export const jwtToken = async (shop) => {
  try {
      return jwt.sign({
          jwttoken: shop
        }, 'secret', { expiresIn: '18h' });
  } catch (error) {
      console.log("jwt error creation =>", error);
      return false;
  }
}

export const unInstallWebhook = async (shop, access_token) => {
  try {
    return await axios({
      url: `https://${shop}/admin/api/${apiversion}/webhooks.json`,
      method: "POST",
      headers: {
        "X-Shopify-Access-Token": access_token,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      data: {
        webhook: {
          topic: "app/uninstalled",
          address: `${appurl}/webhook/uninstall`,
          format: "json",
        },
      },
    });
  } catch (error) {
    console.log(error);

    return false;
  }
};


export const createScript = async(shop,access_token)=>{
  try {
    return await axios({
    url:`https://${shop}/admin/api/${process.env.API_VERSION}/script_tags.json`,
      method: "POST",
      headers: {
        "X-Shopify-Access-Token": access_token,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      data:{
        script_tag:{
          "event": "onload",
          "src": `${process.env.APP_URL}/server`
        }
      }
    });
  } catch (error) {
    console.log(error);
    return false;
    
  }
}



