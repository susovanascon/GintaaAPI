import { tokenGenerate,tokenGenerate_2 } from "./generateToken.js";
import { getUserDetail } from "./User/getUserProf.js";
import { initiateVerifyEmail } from "./User/ini_verify_email.js";
import { initiateVerifyMob } from "./User/ini_verify_mob.js";
import { addAddress } from "./User_Address/add_usr_address.js";
import { createNewOfferItem } from "./Offer/createNewItem.js";
import { createService } from "./Offer/createNewService.js";
import { getOfferbyID } from "./Offer/offerByID.js";
import { createRoom } from "./Chat/createRoom.js";
import { addQuestionForOffer } from "./QnA/questionAdd.js";
import { postReplyOfQuestion } from "./QnA/replyPost.js";

export default function()
{
    var user1token = tokenGenerate();
    var user2token = tokenGenerate_2();
    getUserDetail(user1token);
    getUserDetail(user2token);
    initiateVerifyEmail(user1token);
    initiateVerifyEmail(user2token);
    initiateVerifyMob(user1token);
    initiateVerifyMob(user2token);
    addAddress(user1token);
    addAddress(user2token);
    createNewOfferItem(user1token);
    createService(user2token);
    getOfferbyID();
    createRoom(user1token);
    addQuestionForOffer(user2token);
    postReplyOfQuestion(user1token)
}
