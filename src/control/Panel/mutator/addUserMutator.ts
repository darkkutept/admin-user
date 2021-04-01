import { mutator } from "satcheljs";
import getStoreDetails from "../../detailsList/store/store";
import { addUser } from "../action/addUser";

mutator(addUser, (actionMessage) => {
    getStoreDetails().arrWords = getStoreDetails().arrWords.concat({
    id: getStoreDetails().arrWords.length + 1,
    displayname: actionMessage.displayname,
    username: actionMessage.username,
    email: actionMessage.email,
  });
});
