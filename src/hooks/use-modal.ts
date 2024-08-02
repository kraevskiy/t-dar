import { create } from "zustand";
import { handleOverflow } from "@/components/constants.ts";

export type ModalType = "form";

interface ModalData {
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
}

interface ModalActions {
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

const initialStore: ModalStore = {
  isOpen: false,
  type: null,
  data: {},
};

export const useModal = create<ModalStore & ModalActions>(set => ({
  ...initialStore,
  onOpen: (type, data = {}) => {
    handleOverflow("hidden");
    set({ isOpen: true, type, data });
  },
  onClose: () => {
    handleOverflow("auto");
    set({ ...initialStore });
  },
}));
