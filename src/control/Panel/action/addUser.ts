import { action } from "satcheljs";
import getStoreDetails from "../../detailsList/store/store";

const store = getStoreDetails();
export let addUser = action(
    'ADD_USER',
    (text:any) => ({ 
        displayname:text,
        username:text,
        email:text,
    }));
