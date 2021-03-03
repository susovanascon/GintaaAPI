import { tokenGenerate,tokenGenerate_2 } from './generateToken.js';
import { addQuestionForOffer } from "./QnA/questionAdd.js";
import { getAllQuestion } from "./QnA/questionGetAll.js";
import { editQuestionOfOffer } from "./QnA/questionEdit.js";
import { maskQuestionOfOffer,unmaskQuestionOfOffer } from "./QnA/questionMask.js";
import { postReplyOfQuestion } from "./QnA/replyPost.js";
import { getQuestionReplies } from "./QnA/replyGet.js";
import { editReplyOfQuestion } from "./QnA/replyEdit.js";
import { deleteReplyForOffer } from "./QnA/replyRemove.js";
import { maskAllQuestionOfOffer,unmaskAllQuestionOfOffer } from "./QnA/questionAllMask.js";

// export function qnaSanity(baseurl,tokenID)
// {
export default function qnaSanity()
{
    var tokenID = tokenGenerate() ;
    var otherTokenID = tokenGenerate_2();
    var baseurl = 'https://alpha.api.gintaa.com';
    addQuestionForOffer(otherTokenID);
    getAllQuestion(baseurl,tokenID);
    editQuestionOfOffer(baseurl,otherTokenID,tokenID);
    postReplyOfQuestion(tokenID)
    getQuestionReplies(baseurl,tokenID);
    editReplyOfQuestion(baseurl,tokenID);
    deleteReplyForOffer(baseurl,tokenID);
    maskQuestionOfOffer(baseurl,tokenID);
    maskAllQuestionOfOffer(baseurl,tokenID);
}