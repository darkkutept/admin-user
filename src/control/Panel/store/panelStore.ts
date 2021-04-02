import { createStore } from "satcheljs";
import { PanelStore } from "./store";

export const getStore = createStore<PanelStore>(
    "Panel_Store",
    {
      isOpen:false,
      openPanel:false,
      dismissPanel:false,
    });