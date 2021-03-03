import { postAction } from "./Action/createAnAction.js";
import { getGroupedAction } from "./Action/getAllAction.js";
import { getActionByID } from "./Action/getAnActionByID.js";
import { getActionByGroupName } from "./Action/getActionByGroupName.js";
import { deleteActionByID } from "./Action/deleteAnAction.js";

import { createActionFrequency } from "./Action_Frequency/createActionFrequency.js";
import { getActionFrequency } from "./Action_Frequency/getActionFrequency.js";
import { getActionFrequencybyName } from "./Action_Frequency/getParticularActionFrequency.js";
import { deleteActionFrequency } from "./Action_Frequency/deleteActionFrequency.js";

import { createActionGroup } from "./Action_group/createActionGroup.js";
import { getActionGroup } from "./Action_group/getAllActionGroup.js";
import { getParticularActionGroup } from "./Action_group/getParticularActionGroup.js";
import { deleteActionGroup } from "./Action_group/deleteActionGroup.js";

import { getActionMode } from "./Action_mode/getActionMode.js";
import { getParticularActionMode } from "./Action_mode/getParticularModeName.js";

export function actionSanity(baseurl)
{
// export default function actionSanity(baseurl)
// {
    // var baseurl = 'https://alpha.api.gintaa.com';
    postAction(baseurl);
    getGroupedAction(baseurl);
    getActionByID(baseurl);
    getActionByGroupName(baseurl);
    

    createActionFrequency(baseurl);
    getActionFrequency(baseurl);
    getActionFrequencybyName(baseurl);

    createActionGroup(baseurl);
    getActionGroup(baseurl);
    getParticularActionGroup(baseurl);

    getActionMode(baseurl);
    getParticularActionMode(baseurl);

    deleteActionGroup(baseurl);
    deleteActionFrequency(baseurl);
    deleteActionByID(baseurl);
}
