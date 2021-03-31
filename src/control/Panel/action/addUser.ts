import { action } from "satcheljs";
import getStore from "../../detailsList/store/store";

const store = getStore();
export let addUser = action(
    'ADD_USER',
    (text: string) => ({ 
        text: text
    }));
