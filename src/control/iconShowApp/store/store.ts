import { createStore } from 'satcheljs';
import { ShowStore,  } from './ShowStore';

export default createStore<ShowStore>
("ShowStore", 
    {
        widthShow: false
    }
);