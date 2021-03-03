import http from 'k6/http';
import { check } from 'k6';
import { getVerticalID } from "../Vertical/getAllVertical.js";

var endpoint = '/categories/v1/tags/import/csv';
const tagSheet = open ('./tag_sheet.xlsx','b');
const invtagSheet = open ('./tag_sheet.png','b');

export default function multipleTagCreate()
{
    var baseurl = 'https://alpha.api.gintaa.com';
    //createTagsFromExcel(baseurl);
    //createTagsFromExcel_invalidFile(baseurl);
    createTagsFromExcel_nonExistingVer(baseurl)
}
export function createTagsFromExcel(baseurl)
{
    var url=baseurl.concat(endpoint);
    var verticalID = getVerticalID(baseurl);
    var data = {
        file: http.file(tagSheet,'tag_sheet.xlsx','multipart/form-data'),
        verticalId: verticalID
    };
    var res = http.post(url,data);
    check(res, {
        ['createTagsFromExcel: Status code MUST be 200' ]: res.status === 200,
        ['createTagsFromExcel: Tags Created under same vertical']: res.json().payload[0].vertical == verticalID
      });
}
export function createTagsFromExcel_invalidFile(baseurl)
{
    var url=baseurl.concat(endpoint);
    var verticalID = getVerticalID(baseurl);
    var data = {
        file: http.file(invtagSheet,'tag_sheet.png','multipart/form-data'),
        verticalId: verticalID
    };
    var res = http.post(url,data);
    check(res, {
        ['createTagsFromExcel_invalidFile: Status code MUST be 415' ]: res.status === 415,
      });
}
export function createTagsFromExcel_nonExistingVer(baseurl)
{
    var url=baseurl.concat(endpoint);
    var verticalID = '000000';
    var data = {
        file: http.file(tagSheet,'tag_sheet.xlsx','multipart/form-data'),
        verticalId: verticalID
    };
    var res = http.post(url,data);
    check(res, {
        ['createTagsFromExcel_nonExistingVer: Status code MUST be 404' ]: res.status === 404,
      });
}