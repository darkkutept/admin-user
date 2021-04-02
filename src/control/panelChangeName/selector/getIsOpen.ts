import { getStore } from "../store/panelChangeNameStore";

const store = getStore();

export function getIsOpen() {
    return store.isOpen;
  }