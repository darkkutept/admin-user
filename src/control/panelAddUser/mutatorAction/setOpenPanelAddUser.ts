import { mutatorAction } from "satcheljs";
import { getStore } from "../store/panelAddUserStore";

export let openPanelAddUser = mutatorAction(
    'OPEN_PANEL_ADD',
     function openPanelAddUser() {
        getStore().isOpen = !getStore().isOpen;
        
    });
