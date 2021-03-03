import * as offer_status from "./Offer/offer_status.js";
import * as docUpload from "./Offer/uploadDocument.js";
import * as imgUpload from "./Offer/uploadImage.js";
import * as vidUpload from "./Offer/uploadVideo.js";
import * as getOfferDet from "./Offer/offerByID.js";
import * as getOfferDetBySEO from "./Offer/offerBySEOID.js";
import * as siblingOffer from "./Offer/siblingOffer.js";
import * as getAllOffer from "./Offer/allOffers.js";
import * as getOfferOfCurrentUser from "./Offer/allOffersOfUser.js"
// import * as removeImageDraftOffer from "./Offer/remDraftOfferImage.js";
// import * as uploadDraftVideo from "./Offer/uploadDraftVideo.js";
// import * as uploadDraftImage from "./Offer/uploadDraftImage.js";
// import * as uploadDraftDocument from "./Offer/uploadDraftDocument.js";
// import * as removeDraftVideo from "./Offer/removeDraftVideo.js";
// import * as removeDraftDocument from "./Offer/removeDraftDocument.js";
// import * as getDraftOfferByID from "./Offer/getDraftOfferByID.js";
// import * as changeOfferType from "./Offer/changeOfferType.js";
// import * as draftOfferByCurrentUser from "./Offer/getDraftOffer.js";
import { tokenGenerate } from './generateToken.js';

export default function offerdet()
{
    var tokenID = tokenGenerate() ;
    var baseurl = 'https://alpha.api.gintaa.com';

    imgUpload.uploadJPGimage(baseurl,tokenID);
    imgUpload.uploadJPEGimage(baseurl,tokenID);
    imgUpload.uploadPNGimage(baseurl,tokenID);
    imgUpload.uploadImage_invalidAuth(baseurl,tokenID);
    imgUpload.uploadImage_noAuth(baseurl,tokenID);
    imgUpload.uploadImage_diffMethod(baseurl,tokenID);
    imgUpload.uploadImage_displayMan(baseurl,tokenID);
    //imgUpload.uploadImage_noFile(baseurl,tokenID);
    imgUpload.uploadImg_invalidFile(baseurl,tokenID);

    vidUpload.uploadVideo(baseurl,tokenID);
    vidUpload.uploadVideo_invalidAuth(baseurl,tokenID);
    vidUpload.uploadVideo_noAuth(baseurl,tokenID);
    vidUpload.uploadVideo_diffMethod(baseurl,tokenID);
    vidUpload.uploadVideo_noIndex(baseurl,tokenID);
    //vidUpload.uploadVideoWithoutFile(baseurl,tokenID);
    vidUpload.uploadVideo_invFile(baseurl,tokenID);

    docUpload.uploadDoc(baseurl,tokenID);
    docUpload.uploadDoc_invalidAuth(baseurl,tokenID);
    docUpload.uploadDoc_noAuth(baseurl,tokenID);
    docUpload.uploadDoc_diffMethod(baseurl,tokenID);
    docUpload.uploadDoc_displayMan(baseurl,tokenID);
    //docUpload.uploadDoc_noDocument(baseurl,tokenID);
    docUpload.uploadDoc_invalidFile(baseurl,tokenID);

    getOfferDet.getOfferbyID(baseurl,tokenID);
    getOfferDet.getOfferbyID_diffMethod(baseurl,tokenID);
    getOfferDet.getOfferbyInvalidID(baseurl,tokenID);

    getOfferDetBySEO.getOfferbySEOID(baseurl,tokenID);
    getOfferDetBySEO.getOfferbySEOID_diffMethod(baseurl,tokenID);
    getOfferDetBySEO.getOfferbyInvalidSEOID(baseurl,tokenID);

    getAllOffer.AllOffers(baseurl,tokenID);
    getAllOffer.AllOffers_diffMethod(baseurl,tokenID);
    // getAllOffer.AllOffersPagination(baseurl,tokenID);

    getOfferOfCurrentUser.UserAllOffers(baseurl,tokenID);
    getOfferOfCurrentUser.UserAllOffers_invalidAuth(baseurl,tokenID);
    getOfferOfCurrentUser.UserAllOffers_noAuth(baseurl,tokenID);
    getOfferOfCurrentUser.UserAllOffers_diffMethod(baseurl,tokenID);
    // getOfferOfCurrentUser.UserAllOffersPagination(baseurl,tokenID);

    siblingOffer.siblingOffer(baseurl,tokenID);
    siblingOffer.siblingOffer_diffMethod(baseurl,tokenID);
    siblingOffer.siblingOffer_invalid(baseurl,tokenID);

    // uploadDraftImage.uploadDraftImage_JPEG(baseurl,tokenID);
    // uploadDraftImage.uploadDraftImage_JPG(baseurl,tokenID);
    // uploadDraftImage.uploadDraftImage_PNG(baseurl,tokenID);
    // uploadDraftImage.uploadDraftImage_diffMethod(baseurl,tokenID)
    // uploadDraftImage.uploadDraftImage_draftInvalid(baseurl,tokenID);
    // uploadDraftImage.uploadDraftImage_draftMan(baseurl,tokenID);
    // uploadDraftImage.uploadDraftImage_invalidAuth(baseurl,tokenID);
    // uploadDraftImage.uploadDraftImage_invalidFile(baseurl,tokenID);
    // uploadDraftImage.uploadDraftImage_noAuth(baseurl,tokenID);
    // uploadDraftImage.uploadDraftImage_noDisplay(baseurl,tokenID);
    //uploadDraftImage.uploadDraftImage_noFile(baseurl,tokenID);

    // removeImageDraftOffer.removeDraftImage(baseurl,tokenID);    ;
    // removeImageDraftOffer.removeDraftImage_draftID_blank(baseurl,tokenID);
    // removeImageDraftOffer.removeDraftImage_draftID_invalid(baseurl,tokenID);
    // removeImageDraftOffer.removeDraftImage_resID_blank(baseurl,tokenID);
    // removeImageDraftOffer.removeDraftImage_resID_invalid(baseurl,tokenID);

    // uploadDraftVideo.uploadDraftVideo(baseurl,tokenID);
    // uploadDraftVideo.uploadDraftVideo_DraftMan(baseurl,tokenID);
    // uploadDraftVideo.uploadDraftVideo_InvDraftID(baseurl,tokenID);
    // uploadDraftVideo.uploadDraftVideo_displayMan(baseurl,tokenID);
    // uploadDraftVideo.uploadDraftVideo_invFile(baseurl,tokenID);
    //uploadDraftVideo.upDrafVid_noFile(baseurl,tokenID);

    // removeDraftVideo.remDrafVid(baseurl,tokenID);
    // removeDraftVideo.remDrafVid_DraftMan(baseurl,tokenID);
    // removeDraftVideo.remDrafVid_InvDraftID(baseurl,tokenID);
    // removeDraftVideo.remDrafVid_ManResourceID(baseurl,tokenID);
    // removeDraftVideo.remDrafVid_InvResourceID(baseurl,tokenID);
    
    // uploadDraftDocument.uploadDraftDoc(baseurl,tokenID);
    // uploadDraftDocument.uploadDraftDoc_invalidDraft(baseurl,tokenID);
    // uploadDraftDocument.uploadDraftDoc_displayMan(baseurl,tokenID);
    // //uploadDraftDocument.uploadDraftDoc_noFile(baseurl,tokenID);
    // uploadDraftDocument.uploadDraftDoc_invalidFile(baseurl,tokenID);

    // removeDraftDocument.removeDraftDoc(baseurl,tokenID);
    // removeDraftDocument.removeDraftDoc_draftMan(baseurl,tokenID);
    // removeDraftDocument.removeDraftDoc_draftInvalid(baseurl,tokenID);
    // removeDraftDocument.removeDraftDoc_resourceMan(baseurl,tokenID);
    // removeDraftDocument.removeDraftDoc_invalidResource(baseurl,tokenID);
    // removeDraftDocument.removeDraftDoc_invalidAuth(baseurl,tokenID);
    // removeDraftDocument.removeDraftDoc_noAuth(baseurl,tokenID);
    // removeDraftDocument.removeDraftDoc_diffMethod(baseurl,tokenID);

    // getDraftOfferByID.draftOfferByID(baseurl,tokenID);
    // getDraftOfferByID.draftOfferByID_invalid(baseurl,tokenID);
    // getDraftOfferByID.draftOfferByID_noAuth(baseurl,tokenID);
    // getDraftOfferByID.draftOfferByID_diffMethod(baseurl,tokenID);
    
    // changeOfferType.offerTypeChange(baseurl,tokenID);
    // changeOfferType.offerTypeChange_draftIDMan(baseurl,tokenID);
    // changeOfferType.offerTypeChange_invalidDraftID(baseurl,tokenID);
    // changeOfferType.offerTypeChange_offerTypeMan(baseurl,tokenID);
    // changeOfferType.offerTypeChange_invalidOfferType(baseurl,tokenID);
    // changeOfferType.offerTypeChange_invalidAuth(baseurl,tokenID);
    // changeOfferType.offerTypeChange_noAuth(baseurl,tokenID);
    // changeOfferType.offerTypeChange_diffMethod(baseurl,tokenID);

    // draftOfferByCurrentUser.draftOffer(baseurl,tokenID);
    // draftOfferByCurrentUser.draftOffer_pagination(baseurl,tokenID);
    // draftOfferByCurrentUser.draftOffer_invalidAuth(baseurl,tokenID);
    // draftOfferByCurrentUser.draftOffer_noAuth(baseurl,tokenID);
    // draftOfferByCurrentUser.draftOffer_diffMethod(baseurl,tokenID);

    offer_status.offerStatus_rejectedOffer(baseurl,tokenID);
    offer_status.offerStatus_activeOffer(baseurl,tokenID);
    offer_status.offerStatus_UnderReviewOffer(baseurl, tokenID);
    offer_status.offerStatus_InvalidAuth(baseurl, tokenID);
    offer_status.offerStatus_NoAuth(baseurl, tokenID);
    offer_status.offerStatus_diffMethod(baseurl, tokenID);    
}
