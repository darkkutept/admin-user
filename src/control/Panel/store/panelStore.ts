import { createStore } from "satcheljs";
import { PanelStore } from "./store";

export const getStore = createStore<PanelStore>(
    "PanelStore",
    {
      isOpen:false,
      openPanel:false,
      dismissPanel:false,
    });