import { mutator } from "satcheljs";
import getStore from "../../detailsList/store/store";
import { addUser } from "../action/addUser";

mutator(addUser, (actionMessage) => {
  getStore().arrWords.concat({
    id: getStore().arrWords.length + 1,
    displayname: actionMessage.text,
    username: actionMessage.text,
    email: actionMessage.text,
  });
});
