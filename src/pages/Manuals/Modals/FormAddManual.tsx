import React from 'react';
import Modal from '../../../components/Common/Modal/Modal';

const FormAddManual = React.forwardRef(function FormAddManual(
  {}, ref
) {
  const handleSubmit = async () => {
    console.log("Добавление инструкции")
  }
  return (
    <>
    <Modal
        title="Добавить инструкцию"
        openButtonTitle="Добавить инструкцию"
        onSubmit={handleSubmit}
        ref={ref}
      >
        <h1>Инструкция</h1>
      </Modal>
    </>
  );
});

export default FormAddManual;