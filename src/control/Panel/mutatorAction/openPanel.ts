import { mutatorAction } from "satcheljs";
import { getStore } from "../store/panelStore";

export let openPanel = mutatorAction(
    'OPEN_PANEL',
     function openPanel() {
        getStore().isOpen = !getStore().isOpen;
    });

