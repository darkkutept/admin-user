import { createStore } from "satcheljs";
import { PanelAddUserStore } from "./store";

export const getStore = createStore<PanelAddUserStore>(
    "PanelAddUserStore",
    {
      isOpen:false,
    });