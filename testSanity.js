import { userSanity } from "./userSanity.js";
import { offerSanity } from "./offerSanity.js";
import { searchSanity } from "./searchSanity.js";
import { qnaSanity } from "./qnaSanity.js";
import { currencySanity } from "./currencySanity.js";
import { actionSanity } from "./actionSanity.js";
import { chatSanity } from "./chatSanity.js";
import { tokenGenerate,tokenGenerate_2 } from "./generateToken.js";

export default function sanitySuite()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
    
    console.log('*********** USER  SANITY SERVICES STARTED ************');
    userSanity(baseurl,tokenID); //
    console.log('*********** USER  SANITY SERVICES FINISHED ************');

    console.log('*********** OFFER  SANITY SERVICES STARTED ************');
    offerSanity(baseurl,tokenID); //
    console.log('*********** OFFER  SANITY SERVICES FINISHED ************');

    console.log('*********** SEARCH  SANITY SERVICES STARTED ************');
    searchSanity(baseurl); //
    console.log('*********** SEARCH  SANITY SERVICES FINISHED ************');

    console.log('*********** QNA  SANITY SERVICES STARTED ************');
    qnaSanity(baseurl,tokenID); //
    console.log('*********** QNA  SANITY SERVICES FINISHED ************');

    console.log('*********** CURRENCY  SANITY SERVICES STARTED ************');
    currencySanity(baseurl);
    console.log('*********** CURRENCY  SANITY SERVICES FINISHED ************');

    console.log('*********** ACTION  SANITY SERVICES STARTED ************');
    actionSanity(baseurl);
    console.log('*********** ACTION  SANITY SERVICES FINISHED ************');

    console.log('*********** CHAT  SANITY SERVICES STARTED ************');
    chatSanity(baseurl,tokenID,otherTokenID) //
    console.log('*********** CHAT  SANITY SERVICES FINISHED ************');
}