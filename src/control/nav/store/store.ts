import { createStore } from 'satcheljs';
import { NavStore,IExpandableItem  } from './NavStore';

export default createStore<NavStore>
("NavStore", 
    {
        isExpanded: true,
        expandableItems:new Array<IExpandableItem>()
    }
);