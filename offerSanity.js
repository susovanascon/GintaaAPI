import {AllOffers} from "./Offer/allOffers.js";
import { UserAllOffers } from "./Offer/allOffersOfUser.js";
import * as offerStatus from "./Offer/offer_status.js";
import { getOfferbyID } from "./Offer/offerByID.js";
import { getOfferbySEOID } from "./Offer/offerBySEOID.js" ;
import { siblingOffer } from "./Offer/siblingOffer.js";
import * as uploadOfferImage from "./Offer/uploadImage.js";
import { uploadVideo } from "./Offer/uploadVideo.js";
import { uploadDoc } from "./Offer/uploadDocument.js";
// import * as uploadDraftImage from "./Offer/uploadDraftImage.js";
// import { removeDraftImage } from "./Offer/remDraftOfferImage.js";
// import { remDrafVid } from "./Offer/removeDraftVideo.js";
// import { uploadDraftVideo } from "./Offer/uploadDraftVideo.js";
// import { uploadDraftDoc } from "./Offer/uploadDraftDocument.js";
// import { removeDraftDoc } from "./Offer/removeDraftDocument.js";
// import { draftOfferByID } from "./Offer/getDraftOfferByID.js";
// import { offerTypeChange } from "./Offer/changeOfferType.js";
// import { draftOffer } from "./Offer/getDraftOffer.js";
import { createService } from "./Offer/createNewService.js";
import { createNewOfferItem } from "./Offer/createNewItem.js";
// import * as createDraftItem from "./Offer/createDraftItemOffer.js";
// import * as updateDraftService from "./Offer/updateDraftServiceOffer.js";
import { offer_stats } from "./Offer/stats_offer.js";
import { rejectAllOffer } from "./Offer/rejectAll.js";
import { rejectAllOffById } from "./Offer/rejectOfferByID.js";
import { trendOffer } from "./Offer/trendingOffer.js";
import { popularOffer } from "./Offer/popularOffers.js";

import { tokenGenerate } from './generateToken.js';

// export function offerSanity(baseurl,tokenID)
// {
export default function offerSanity(baseurl,tokenID)
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com'; 
    
    AllOffers(baseurl);

    siblingOffer(baseurl);

    UserAllOffers(tokenID);

    getOfferbySEOID();

    getOfferbyID();

    createService(tokenID);
    createNewOfferItem(tokenID);

    uploadOfferImage.uploadJPGimage(tokenID);
    uploadOfferImage.uploadJPEGimage(tokenID);
    uploadOfferImage.uploadPNGimage(tokenID);


    uploadDoc(tokenID);

    uploadVideo(baseurl,tokenID);

    offer_stats(baseurl,tokenID);

    // updateDraftService.updateDraftSeviceOffer(baseurl,tokenID);
    // updateDraftService.updateDraftSeviceOffer_onlyCatID(baseurl,tokenID);
    // updateDraftService.updateDraftSeviceOffer_validAvailableDays(baseurl,tokenID)
    offerStatus.offerStatus_activeOffer(baseurl,tokenID);
    offerStatus.offerStatus_rejectedOffer(baseurl,tokenID);
    offerStatus.offerStatus_UnderReviewOffer(baseurl,tokenID);

    rejectAllOffer(baseurl,tokenID);
    rejectAllOffById(baseurl,tokenID);
    trendOffer(baseurl,tokenID);
    popularOffer(baseurl,tokenID);


}