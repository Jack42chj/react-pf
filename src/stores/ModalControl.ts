import { create } from "zustand";

interface ModalType {
    isOpen: Boolean;
    title: string;
    setOpenModal: (name: string) => void;
    setCloseModal: () => void;
}

const ModalControl = create<ModalType>((set) => ({
    isOpen: false,
    title: "",
    setOpenModal: (name: string) =>
        set((state) => ({ ...state, isOpen: true, title: name })),
    setCloseModal: () =>
        set((state) => ({ ...state, isOpen: false, title: "" })),
}));

export default ModalControl;
