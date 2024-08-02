import { create } from "zustand";
import { handleOverflow } from "@/components/constants.ts";

type UseMenuState = {
  open: boolean;
}
type UseMenuActions = {
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

export const useDrawer = create<UseMenuState & UseMenuActions>((set) => ({
  open: false,
  onOpen: () => {
    handleOverflow("hidden");
    set({ open: true });
  },
  onClose: () => {
    handleOverflow("auto");
    set({ open: false });
  },
  onToggle: () => {
    handleOverflow();
    set(({ open }) => ({ open: !open }));
  },
}));
