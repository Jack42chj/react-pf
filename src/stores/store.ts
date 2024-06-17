import { create } from "zustand";

interface ModalType {
    isOpen: Boolean;
    title: string;
    currentPage: number;
    setOpenModal: (name: string) => void;
    setCloseModal: () => void;
    setCurrentPage: (page: number) => void;
}

const Store = create<ModalType>((set) => ({
    isOpen: false,
    title: "",
    currentPage: 0,
    setOpenModal: (name: string) =>
        set((state) => ({ ...state, isOpen: true, title: name })),
    setCloseModal: () =>
        set((state) => ({ ...state, isOpen: false, title: "" })),
    setCurrentPage: (page: number) =>
        set((state) => ({ ...state, currentPage: page })),
}));

export default Store;
