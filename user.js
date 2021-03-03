import * as getUserDetails from "./User/getUserProf.js";
import * as emailverification from "./User/ini_verify_email.js";
import * as mobverificationfrom from "./User/ini_verify_mob.js";
import * as updateDetails from "./User/updateUsers.js";
import * as f_email_verification from "./User/verify_email.js" ;
import * as f_mob_verification from "./User/verify_mob.js";
import * as user_def_add_change from './User_Address/updateUserDefaultAddress.js';
import * as del_user_add from "./User_Address/delete_usr_add.js";
import * as user_def_add from "./User_Address/getUserDefaultAdd.js";
import * as get_usr_add_id from "./User_Address/getUserAddID.js";
import * as get_all_usr_add from "./User_Address/usr_all_add.js";
import * as upload_user_doc from "./User/uploadProfileImg.js";
import * as add_usr_address from "./User_Address/add_usr_address.js";
import * as update_address from "./User_Address/upd_usr_add.js";
import { tokenGenerate } from './generateToken.js';


export default function userInfo(tokenID)
{
    var tokenID = tokenGenerate() ;

    getUserDetails.getUserDetail(tokenID); 
    getUserDetails.getUserDetail_noToken();
    getUserDetails.getUserDetail_invalidToken(tokenID);
    getUserDetails.getUserDetail_diffMethod(tokenID);

    emailverification.initiateVerifyEmail(tokenID);
    emailverification.initiateVerifyEmail_noToken();
    emailverification.initiateVerifyEmail_invalidToken(tokenID);
    emailverification.initiateVerifyEmail_invalidEmail(tokenID);
    emailverification.initiateVerifyEmail_diffMethod(tokenID);
    emailverification.initiateVerifyEmail_existingMail(tokenID);

    //*************NOT AUTOMATED**************************
    // f_email_verification.verify_email(tokenID);
    // f_email_verification.verify_email_no_auth(baseurl);
    //***************************************************

    mobverificationfrom.initiateVerifyMob(tokenID);
    mobverificationfrom.initiateVerifyMob_noToken();
    mobverificationfrom.initiateVerifyMob_invalidToken(tokenID);
    mobverificationfrom.initiateVerifyMob_alphabeticNumber(tokenID);
    mobverificationfrom.initiateVerifyMob_alphanumericNumber(tokenID);
    //mobverificationfrom.initiateVerifyMob_symbolicNumber(tokenID);
    mobverificationfrom.initiateVerifyMob_diffMethod(tokenID);
    mobverificationfrom.initiateVerifyMob_existingMob(tokenID);

    //************NOT AUTOMATED********************
    // f_mob_verification.verify_mob(tokenID);
    // f_mob_verification.vm_no_auth(baseurl);
    //***************************************** */
    
    updateDetails.updateUser(tokenID);
    updateDetails.updateUser_blankNameField(tokenID);
    updateDetails.updateUser_invalidLengthName(tokenID);
    updateDetails.updateUser_symName(tokenID);
    updateDetails.updateUser_numName(tokenID);
    updateDetails.updateUser_genMan(tokenID);
    updateDetails.updateUser_genBlank(tokenID);
    updateDetails.updateUser_genNum(tokenID);
    updateDetails.updateUser_genSym(tokenID)
    updateDetails.updateUser_invGen(tokenID);
    updateDetails.updateUser_dobMan(tokenID);
    updateDetails.updateUser_lessDOB(tokenID);
    updateDetails.updateUser_invDOB(tokenID);
    updateDetails.updateUser_dobBlank(tokenID);
    updateDetails.updateUser_invDOBMonth(tokenID);
    updateDetails.updateUser_invDOBYear(tokenID)
    updateDetails.updateUser_invalidAuth(tokenID);
    updateDetails.updateUser_noToken();
    updateDetails.updateUser_diffMethod(tokenID);
    updateDetails.updateUser_diffContentType(tokenID);

    var addressID = add_usr_address.addAddress(tokenID);

    user_def_add_change.changeUserDefault(addressID,tokenID);
    user_def_add_change.changeUserDefault_addressIDMan(tokenID);
    user_def_add_change.changeUserDefault_blankAddress(tokenID);
    user_def_add_change.changeUserDefault_diffMethod(tokenID);
    user_def_add_change.changeUserDefault_invalidAddress(tokenID);
    user_def_add_change.changeUserDefault_invalidToken(addressID,tokenID);
    user_def_add_change.changeUserDefault_noToken(addressID);

    user_def_add.getUserDefaultAddress(tokenID);
    user_def_add.getUserDefaultAddress_noToken();
    user_def_add.getUserDefaultAddress_invalidToken(tokenID);
    user_def_add.getUserDefaultAddress_diffMethod(tokenID);

    get_usr_add_id.getAddressByID(addressID,tokenID);
    get_usr_add_id.getAddressByID_invalidAddressByID(tokenID);
    get_usr_add_id.getAddressByID_diffMethod(addressID,tokenID);
    get_usr_add_id.getAddressByID_invalidToken(addressID,tokenID);
    get_usr_add_id.getAddressByID_noToken(addressID);

    get_all_usr_add.getUserAllAddress(tokenID);
    get_all_usr_add.getUserAllAddress_noToken();
    get_all_usr_add.getUserAllAddress_diffMethod(tokenID);
    get_all_usr_add.getUserAllAddress_invalidToken(tokenID);
    
    upload_user_doc.uploadProfileImage(tokenID);
    upload_user_doc.uploadProfileImage_blankImage(tokenID);
    upload_user_doc.uploadProfileImage_invalidImage(tokenID);
    upload_user_doc.uploadProfileImage_noToken(tokenID);
    upload_user_doc.uploadProfileImage_invalidToken(tokenID);
    upload_user_doc.uploadProfileImage_diffMethod(tokenID);
        
    add_usr_address.addAddress_addLineMan(tokenID);
    add_usr_address.addAddress_addLineBlnk(tokenID);
    add_usr_address.addAddress_numericAddLine(tokenID)
    add_usr_address.addAddress_capAlphabeticAddLine(tokenID)
    add_usr_address.addAddress_smallAlphabeticAddLine(tokenID)
    add_usr_address.addAddress_alphanumericWithSpecialCharacterAddLine(tokenID)
    add_usr_address.addAddress_alphanumericAddLine(tokenID)
    add_usr_address.addAddress_zipMan(tokenID)
    add_usr_address.addAddress_zipBlnk(tokenID);
    add_usr_address.addAddress_addZipAlphanumeric(tokenID);
    
    add_usr_address.addAddress_greaterZip(tokenID);
    add_usr_address.addAddress_lessZip(tokenID);
    add_usr_address.addAddress_numericFlat(tokenID);
    add_usr_address.addAddress_capAlphabeticFlat(tokenID);
    add_usr_address.addAddress_addFlatnoMan(tokenID);
    add_usr_address.addAddress_addFlatnoBlnk(tokenID);
    add_usr_address.addAddress_addFlatnoAlphanumeric(tokenID);
    add_usr_address.addAddress_smallAlphabeticFlat(tokenID);
    add_usr_address.addAddress_alphanumericWithSpecialCharacterFlat(tokenID);
    add_usr_address.addAddress_alphanumericFlat(tokenID);
    add_usr_address.addAddress_addAreaMan(tokenID);
    add_usr_address.addAddress_addAreaBlnk(tokenID);
    add_usr_address.addAddress_addAreaAlphanumeric(tokenID);
    add_usr_address.addAddress_numericArea(tokenID);
    add_usr_address.addAddress_capAlphabeticArea(tokenID);
    add_usr_address.addAddress_smallAlphabeticArea(tokenID);
    add_usr_address.addAddress_alphanumericWithSpecialCharacterArea(tokenID);
    add_usr_address.addAddress_alphanumericArea(tokenID);
    add_usr_address.addAddress_addAnnoMan(tokenID);
    add_usr_address.addAddress_addAnnoBlnk(tokenID);
    add_usr_address.addAddress_addAnnoAlphanumeric(tokenID);
    add_usr_address.addAddress_numericAnno(tokenID);
    add_usr_address.addAddress_capAlphabeticAnno(tokenID);
    add_usr_address.addAddress_smallAlphabeticAnno(tokenID);
    add_usr_address.addAddress_alphanumericWithSpecialCharacterAnno(tokenID);
    add_usr_address.addAddress_alphanumericAnno(tokenID);
    add_usr_address.addAddress_addLanmMan(tokenID);
    add_usr_address.addAddress_addLanmBlank(tokenID);
    add_usr_address.addAddress_addLanmAlphanumeric(tokenID);
    add_usr_address.addAddress_numericLandmark(tokenID);
    add_usr_address.addAddress_capAlphabeticLandmark(tokenID);
    add_usr_address.addAddress_smallAlphabeticLandmark(tokenID);
    add_usr_address.addAddress_alphanumericWithSpecialCharacterLandmark(tokenID);
    add_usr_address.addAddress_alphanumericLandmark(tokenID);
    add_usr_address.addAddress_addCityMan(tokenID);
    add_usr_address.addAddress_addCityBlnk(tokenID);
    add_usr_address.addAddress_addCityNumeric(tokenID);
    add_usr_address.addAddress_addCitySymbols(tokenID);
    add_usr_address.addAddress_numericCity(tokenID);
    add_usr_address.addAddress_capAlphabeticCity(tokenID);
    add_usr_address.addAddress_smallAlphabeticCity(tokenID);
    add_usr_address.addAddress_alphanumericWithSpecialCharacterCity(tokenID);
    add_usr_address.addAddress_alphanumericCity(tokenID);
    add_usr_address.addAddress_addStateMan(tokenID);
    add_usr_address.addAddress_addStateBlank(tokenID);
    add_usr_address.addAddress_addStateSymbols(tokenID);
    add_usr_address.addAddress_numericState(tokenID);
    add_usr_address.addAddress_capAlphabeticState(tokenID);
    add_usr_address.addAddress_smallAlphabeticState(tokenID);
    add_usr_address.addAddress_alphanumericWithSpecialCharacterState(tokenID);
    add_usr_address.addAddress_alphanumericState(tokenID);
    add_usr_address.addAddress_addCntryMan(tokenID);
    add_usr_address.addAddress_addCntryBlank(tokenID);
    add_usr_address.addAddress_addCntryNonAlphabet(tokenID);
    add_usr_address.addAddress_numericCountry(tokenID);
    add_usr_address.addAddress_capAlphabeticCountry(tokenID);
    add_usr_address.addAddress_smallAlphabeticCountry(tokenID);
    add_usr_address.addAddress_alphanumericWithSpecialCharacterCountry(tokenID);
    add_usr_address.addAddress_alphanumericCountry(tokenID);
    add_usr_address.addAddress_addLatMan(tokenID);
    add_usr_address.addAddress_addLatBlank(tokenID);
    add_usr_address.addAddress_addLonMan(tokenID);
    add_usr_address.addAddress_addLonBlank(tokenID);
    add_usr_address.addAddress_addLatGr90(tokenID);
    add_usr_address.addAddress_decimalLatBet90toM90(tokenID);
    add_usr_address.addAddress_decimalLatBey90toM90(tokenID);
    add_usr_address.addAddress_addLonGr180(tokenID);
    add_usr_address.addAddress_addLatLess90(tokenID);
    add_usr_address.addAddress_addLonLess180(tokenID);
    add_usr_address.addAddress_decimalLngBet180toM180(tokenID);
    add_usr_address.addAddress_decimalLngBey180toM180(tokenID);
    add_usr_address.addAddress_noAuth(tokenID);
    add_usr_address.addAddress_invalidAuth(tokenID);
    add_usr_address.addAddress_diffMethod(tokenID);
    add_usr_address.addAddress_diffContentType(tokenID);

    update_address.updateAddress(addressID,tokenID);
    update_address.updateAddress_noAddLine(addressID,tokenID);
    update_address.updateAddress_noAnno(addressID,tokenID);
    update_address.updateAddress_annoNonAlphanumeric(addressID,tokenID);
    update_address.updateAddress_noArea(addressID,tokenID);
    update_address.updateAddress_areaNonAphabetic(addressID,tokenID);;
    update_address.updateAddress_citywithoutAlphabet(addressID,tokenID);;
    update_address.updateAddress_countryWithouAlphabet(addressID,tokenID);;
    update_address.updateAddress_flatNonNumeric(addressID,tokenID);;
    update_address.updateAddress_latGr90(addressID,tokenID);;
    update_address.updateAddress_latlessM90(addressID,tokenID);;
    update_address.updateAddress_lngGr180(addressID,tokenID);;
    update_address.updateAddress_lnglessM190(addressID,tokenID);    
    update_address.updateAddress_noCity(addressID,tokenID);
    update_address.updateAddress_noCountry(addressID,tokenID);
    update_address.updateAddress_noFlat(addressID,tokenID);
    update_address.updateAddress_noLM(addressID,tokenID);
    update_address.updateAddress_noLat(addressID,tokenID);
    update_address.updateAddress_noState(addressID,tokenID);
    update_address.updateAddress_noZip(addressID,tokenID);
    update_address.updateAddress_nolng(addressID,tokenID);
    update_address.updateAddress_stateWithoutAlphabet(addressID,tokenID);
    update_address.updateAddress_symLM(addressID,tokenID);
    update_address.updateAddress_zipAlpha(addressID,tokenID);
    update_address.updateAddress_zipLenInvalid(addressID,tokenID);
    update_address.updateAddress_noAuth(addressID,tokenID)
    update_address.updateAddress_invalidAuth(addressID,tokenID)
    update_address.updateAddress_diffMethod(addressID,tokenID)
    update_address.updateAddress_diffHeader(addressID,tokenID);

   
    console.log(",USER SERVICE COMPLETED");
    //update_address.upd_address(tokenID);

    console.log("------------------ Susovan Start ------------------");
    update_address.updateAddress_numericArea (addressID,tokenID) // created by susovan
    update_address.updateAddress_capAlphabeticArea(addressID,tokenID) // created by susovan
    update_address.updateAddress_smallAlphabeticArea(addressID,tokenID) // created by susovan
    update_address.updateAddress_alphanumericWithSpecialCharacterFlat(addressID,tokenID) // created by suman
    update_address.updateAddress_alphanumericFlat(addressID,tokenID) // created by susovan
    update_address.updateAddress_blankAnno(addressID,tokenID)// created by susovan
    update_address.updateAddress_numericAnno(addressID,tokenID)// created by susovan
    update_address.updateAddress_capAlphabeticAnno(addressID,tokenID)// created by susovan
    update_address.updateAddress_smallAlphabeticAnno (addressID,tokenID)// created by susovan
    update_address.updateAddress_alphanumericWithSpecialCharacterAnno(addressID,tokenID)// created by susovan
    update_address.updateAddress_alphanumericAnno(addressID,tokenID)// created by susovan
    update_address.updateAddress_specialCharAnno(addressID,tokenID)// created by susovan
    update_address.updateAddress_blankLandmark(addressID,tokenID)// created by susovan
    update_address.updateAddress_numericLandmark(addressID,tokenID)// created by susovan
    update_address.updateAddress_capAlphabeticLandmark(addressID,tokenID)// created by susovan
    update_address.updateAddress_smallAlphabeticLandmark(addressID,tokenID)// created by susovan
    update_address.updateAddress_alphanumericWithSpecialCharacterLandmark(addressID,tokenID)// created by susovan
    update_address.updateAddress_alphanumericLandmark(addressID,tokenID)// created by susovan
    update_address.updateAddress_specialCharLandmark(addressID,tokenID)// created by susovan
    update_address.updateAddress_blankCity(addressID,tokenID) // created by susovan
    update_address.updateAddress_numericCity(addressID,tokenID) // created by susovan
    update_address.updateAddress_capAlphabeticCity(addressID,tokenID) // created by susovan
    update_address.updateAddress_smallAlphabeticCity(addressID,tokenID) // created by susovan
    update_address.updateAddress_alphanumericWithSpecialCharacterCity  (addressID,tokenID) // created by susovan
    update_address.updateAddress_blankState(addressID,tokenID) // created by susovan
    update_address.updateAddress_numericState(addressID,tokenID) // created by susovan
    update_address.updateAddress_capAlphabeticState(addressID,tokenID) // created by susovan
    update_address.updateAddress_smallAlphabeticState(addressID,tokenID) // created by susovan
    update_address.updateAddress_alphanumericWithSpecialCharacterState(addressID,tokenID) // created by susovan
    update_address.updateAddress_alphanumericState(addressID,tokenID) // created by susovan
    update_address.updateAddress_blankCountry(addressID,tokenID) // created by susovan
    update_address.updateAddress_numericCountry(addressID,tokenID) // created by susovan
    update_address.updateAddress_capAlphabeticCountry(addressID,tokenID) // created by susovan
    update_address.updateAddress_smallAlphabeticCountry(addressID,tokenID) // created by susovan
    update_address.updateAddress_alphanumericWithSpecialCharacterCountry(addressID,tokenID) // created by susovan
    update_address.updateAddress_alphanumericCountry(addressID,tokenID) // created by susovan
    update_address.updateAddress_blankLattitud(addressID,tokenID) // created by susovan
    update_address.updateAddress_blankLongitude(addressID,tokenID) // created by susovan
    console.log("------------------ Susovan End ------------------");


    console.log("------------------ suman  ------------------");
    del_user_add.delUserAddress_invAddress(tokenID);
    del_user_add.delUserAddress_diffMethod(addressID,tokenID);
    del_user_add.delUserAddress_invalidToken(addressID,tokenID);
    del_user_add.delUserAddress_noToken(addressID);
    del_user_add.delUserAddress(addressID,tokenID);
    
}