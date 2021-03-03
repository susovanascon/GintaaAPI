import * as getAllCurrency from "./Currency/createCurrency.js";
import * as deleteCurrency from "./Currency/delCurr.js";
import * as getCurrencyByID from "./Currency/getCurByID.js";
import * as getAllCurrencies from "./Currency/getCurrency.js";

export function currencyController(baseurl)
{
    var baseurl = 'https://alpha.api.gintaa.com';
    getAllCurrency.getCurID(baseurl);
    getAllCurrency.createCurrency(baseurl);
    getAllCurrency.createCurrency_activeMan(baseurl);
    getAllCurrency.createCurrency_baseMan(baseurl);
    getAllCurrency.createCurrency_conMan(baseurl);
    getAllCurrency.createCurrency_codeMan(baseurl);
    getAllCurrency.createCurrency_labMan(baseurl);
    getAllCurrency.createCurrency_symMan(baseurl);
    getAllCurrency.createCurrency_diffMethod(baseurl);

    getCurrencyByID.activeCurbyID(baseurl);
    getCurrencyByID.actCurbyID_invCurID(baseurl);

    getAllCurrencies.activeCurrency(baseurl);
    getAllCurrencies.currencyPagination(baseurl);

    deleteCurrency.deleteCurrency(baseurl);
    deleteCurrency.deleteCurrency_invID(baseurl);
}