import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

import { useModalStore } from "../stores/modal";

const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const addModal = useModalStore((state) => state.addModal);
  const removeModal = useModalStore((state) => state.removeModal);

  const openModalComponent = (compo: ReactNode): void => {
    document.body.style.cssText = "overflow-y: hidden";
    addModal(compo);
  };

  const handleModalOpen =
    (compo: ReactNode) =>
    (e?: MouseEvent<Element>): void => {
      e?.stopPropagation();
      openModalComponent(compo);
    };

  const handleModalClose = (): void => {
    removeModal();
    document.body.style.cssText = "overflow: auto";
  };

  return {
    modalRef,
    handleModalOpen,
    handleModalClose,
  };
};

export default useModal;
