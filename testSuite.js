import { tokenGenerate } from './generateToken.js';
import { userInfo } from './user.js';
import { categoryController } from "./category.js";
import { currencyController } from "./currency.js";

export default function allApi() {
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';
    console.log("Calling USER SERVICE");
    userInfo(baseurl,tokenID);
    currencyController(baseurl);
    //categoryController(baseurl);
}