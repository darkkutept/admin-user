import { mutatorAction } from "satcheljs";
import { getStore } from "../store/panelChangeNameStore";

export let openPanelName = mutatorAction(
    'OPEN_PANEL_NAME',
     function openPanelName() {
        
        getStore().isOpen = !getStore().isOpen;
        
    });
