import { createRoom } from "./Chat/createRoom.js";
import { getRoom } from "./Chat/getAllRoom.js";
import * as uploadSingleImage from "./Chat/chatImgUpload.js";
import { uploadDoc } from "./Chat/chatDocUpload.js";
import { uploadVid } from "./Chat/chatVidUpload.js";
import { uploadMultiDoc } from "./Chat/uploadMultipleDocument.js";
import { uploadMultiImage } from "./Chat/uploadMultipleImage.js";
import { uploadMultiVid } from "./Chat/uploadMultipleVideo.js";
import { getChatMsg } from "./Chat/getRoomMsg.js";
import { tokenGenerate,tokenGenerate_2 } from "./generateToken.js";

// export function chatSanity(baseurl,tokenID,otherTokenID)
// {
export default function chatSanity()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
    
    createRoom(tokenID);
    getRoom(baseurl,otherTokenID);

    uploadDoc(baseurl,tokenID,otherTokenID)

    uploadVid(baseurl,tokenID,otherTokenID)

    uploadSingleImage.uploadJPGimage(baseurl,tokenID,otherTokenID);
    uploadSingleImage.uploadPNGimage(baseurl,tokenID,otherTokenID);

    uploadMultiVid(baseurl,tokenID,otherTokenID);
    uploadMultiImage(baseurl,tokenID,otherTokenID);
    uploadMultiDoc(baseurl,tokenID,otherTokenID);

    getChatMsg(baseurl,tokenID,otherTokenID);
}