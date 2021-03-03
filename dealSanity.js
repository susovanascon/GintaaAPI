import {acceptDeal} from "./Deal/acceptDeal.js";
import {addDealToFavourite} from "./Deal/addFavDeal.js";
import {cancelDeal} from "./Deal/cancelDeal.js";
import {closeDeal} from "./Deal/closeDeal.js";
import { getDelMethods } from "./Deal/delMethods.js";
import { dealExpiryDetails } from "./Deal/expiryDetails.js";
import { getAllDeals } from "./Deal/getAllDeals.js";
import { regenerateDealOTP } from "./Deal/regenerateDealOTP.js";
import { rejectDeal } from "./Deal/rejectDeal.js";
import { removeDealFromFavourite } from "./Deal/removeFavDeal.js";
import { updateRequestDeal } from "./Deal/updateRequestDeal.js";
import { abandonDeal } from "./Deal/abandonDeal.js";
import { dealExpiryByStatus } from "./Deal/expiryDealByStatus.js";
import { reportDeal } from "./Deal/reportDeal.js";
import { updateDeal } from "./Deal/updateDeal.js";
import { initiateDeal_moneyWithItem } from "./Deal/initiateDeal.js";
import { getDealQuestions } from "./Deal/dealQuestionGet.js";
import { postQuestionAgainstDeal } from "./Deal/dealQuestionPost.js";
import { tokenGenerate,tokenGenerate_2 } from './generateToken.js';

export default function dealSanity()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';    

    initiateDeal_moneyWithItem(baseurl,tokenID);
    addDealToFavourite(baseurl,tokenID);
    getAllDeals(baseurl,tokenID);
    getDealQuestions(baseurl,tokenID);
    postQuestionAgainstDeal(baseurl,tokenID);
    dealExpiryByStatus(baseurl,tokenID);
    dealExpiryDetails(baseurl,tokenID);
    reportDeal(baseurl,tokenID);
    // acceptDeal(baseurl,tokenID,otherTokenID);
    //regenerateDealOTP(baseurl,tokenID)
    cancelDeal(baseurl,tokenID);
    removeDealFromFavourite(baseurl,tokenID)
}