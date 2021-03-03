import { searchProduct } from "./Search/productSearch.js";
import { catURLSearch } from "./Search/searchByCat.js";
import { searchHis } from "./Search/searchHistory.js";
import { searchString } from "./Search/stringSearch.js";
import { suggestionSearch } from "./Search/searchSuggestion.js";

// export function searchSanity()
// {
export default function searchSanity()
{
    searchProduct();
    catURLSearch();
    searchHis();
    searchString();
    suggestionSearch()
}