import { mutatorAction } from "satcheljs";
import { getStore } from "../store/panelChangeNameStore";

export let openPanelName = mutatorAction(
    'OPEN_PANEL_NAME',
     function openPanel() {
        getStore().isOpen = !getStore().isOpen;
    });
