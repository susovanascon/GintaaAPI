import { getUserDetail } from "./User/getUserProf.js";
import { initiateVerifyEmail } from "./User/ini_verify_email.js";
import { initiateVerifyMob } from "./User/ini_verify_mob.js";
import { updateUser } from "./User/updateUsers.js";
//import * as f_email_verification from "./User/verify_email.js" ;
//import * as f_mob_verification from "./User/verify_mob.js";
import { changeUserDefault } from "./User_Address/updateUserDefaultAddress.js";
import { getAddressByID } from "./User_Address/getUserAddID.js";
import { getUserAllAddress } from "./User_Address/usr_all_add.js";
import { uploadProfileImage } from "./User/uploadProfileImg.js";
import { addAddress } from "./User_Address/add_usr_address.js";
import { updateAddress } from "./User_Address/upd_usr_add.js";
import { delUserAddress } from "./User_Address/delete_usr_add.js";
import { getUserDefaultAddress } from "./User_Address/getUserDefaultAdd.js";
import { tokenGenerate } from './generateToken.js';

// export function userSanity(tokenID)
// {
export default function userSanity(tokenID)
{
    var tokenID = tokenGenerate() ;
    getUserDetail(tokenID);
    initiateVerifyEmail(tokenID);
    initiateVerifyMob(tokenID);
    updateUser(tokenID);
    var addressID = addAddress(tokenID);
    updateAddress(addressID,tokenID);
    changeUserDefault(addressID,tokenID);
    getUserDefaultAddress(tokenID)
    getUserAllAddress(tokenID);
    getAddressByID(addressID,tokenID);
    uploadProfileImage(tokenID);
    
    delUserAddress(addressID,tokenID);
}