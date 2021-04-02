import { mutatorAction } from "satcheljs";
import { getStore } from "../store/panelStore";

export let openPanel = mutatorAction(
    'OPEN_PANEL',
     function openPanel() {
        getStore().isOpen = !getStore().isOpen;
    });
    export let openPanelName = mutatorAction(
        'OPEN_PANEL_NAME',
         function openPanel() {
            getStore().isOpen = !getStore().isOpen;
        });
