import { getStore } from "../store/panelAddUserStore";

const store = getStore();

export function getIsOpen() {
    return store.isOpen;
  }