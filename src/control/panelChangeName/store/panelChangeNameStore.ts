import { createStore } from "satcheljs";
import { PanelChangeNameStore } from "./store";

export const getStore = createStore<PanelChangeNameStore>(
    "PanelChangeNameStore",
    {
      isOpen:false,
    });