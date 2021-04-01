import { mutatorAction } from "satcheljs";
import getStoreDetails from "../store/store";

const store = getStoreDetails();

export let addToArray = mutatorAction(
    'ADD_TOARRAY',
    function addTodo(actionMessage) {
        store.arrWords = store.arrWords.concat([{
            id: store.arrWords.length +1,
            displayname:actionMessage.displayname,
            username:actionMessage.username,
            email:actionMessage.email,
        }]);
    });
