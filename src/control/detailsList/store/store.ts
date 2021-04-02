import { createStore } from "satcheljs";
import { Store } from "./AppState";


let getStoreDetails = createStore<Store>("detailStore", {
  arrWords: [
    {
      id: "1",
      displayname: "Hieu Le",
      username: 'hieule@proptechsoft.com',
      email:'abcxyz@gmail.com'
    },
    {
      id: "2",
      displayname: "Cuong Cuong",
      username: 'cuongnuyen@proptechsoft.com',
      email:'abcxyz@gmail.com'
    },
    {
      id: "3",
      displayname: "Tu Nguyen",
      username: 'tunguyen@proptechsoft.com',
      email:'abcxyz@gmail.com'
    },
    {
      id: "4",
      displayname: "Nhi Huynh",
      username: 'nhihuynh@proptechsoft.com',
      email:'abcxyz@gmail.com'
    },
  ],
  isAdding: false,

});



export default getStoreDetails;
