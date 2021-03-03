import { activeCurrency } from "./Currency/getCurrency.js";
import { createCurrency } from "./Currency/createCurrency.js";
import { activeCurbyID } from "./Currency/getCurByID.js";
import { updateBase } from "./Currency/updateCurrAsBase.js";
import { deleteCurrency } from "./Currency/delCurr.js";
import { getCurByName } from "./Currency/getCurrByName.js";
import { getCurrExchange } from "./Currency/getCurrencyExchange.js";
import { createCurrExchange } from "./Currency/createCurExchange.js";
import { getCurrExchangeByID } from "./Currency/currExchangeByID.js";

// export function currencySanity(baseurl)
// {
export default function currencySanity(baseurl)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    activeCurrency(baseurl);
    createCurrency(baseurl);
    activeCurbyID(baseurl);
    updateBase(baseurl);
    //getCurByName(baseurl); *** SKIPPING SINCE THE API IS NOT PRESENT IN ALPHA
    
    getCurrExchange(baseurl);
    createCurrExchange(baseurl);
    getCurrExchangeByID(baseurl);

    deleteCurrency(baseurl);
}