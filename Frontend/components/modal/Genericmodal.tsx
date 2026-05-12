import React, { JSX, useState } from "react";

interface ModalProps {
  trigger: React.ReactNode;
  render: (
    handleOpenModal: () => void,
    handleCloseModal: () => void
  ) => JSX.Element;
}

export const Modal: React.FC<ModalProps> = ({ trigger, render }) => {
  const [viewModal, setViewModal] = useState<boolean>(false);
  const handleOpenModal = () => setViewModal(true);
  const handleCloseModal = () => setViewModal(false);

  return (
    <div className="modal-container">
      <div className="trigger-container" onClick={handleOpenModal}>
        {trigger}
      </div>
      {viewModal && render(handleOpenModal, handleCloseModal)}
    </div>
  );
};
