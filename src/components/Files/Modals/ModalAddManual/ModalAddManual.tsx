import { useImperativeHandle, forwardRef, useRef, useState } from "react";
import { Modal, FormAddManual } from '@/components';
import { ModalRef } from '@/components/Common/Modal/Modal.types';
import { addManual } from "@/pages/Files/Manuals/Manuals.api";
import { ModalAddManualTypes } from "./ModalAddManual.types";
import { ManualFormData } from "@/pages/Files/Manuals/Manuals.types";

const ModalAddManual = forwardRef(
    function ModalAddManual(
        { fetchManualItems }: ModalAddManualTypes, 
        ref
    ) 
{
    const modalRef = useRef<ModalRef | null>(null);
    const formRef = useRef<{ open: () => void }>({ open: () => {} });
    const [error, setError] = useState<string | null>(null);

    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current?.open();
            setError(null); 
        }
    }));

    const handleSubmit = (manual:  ManualFormData) => {
        addManual(manual)
        .then(() => {
            fetchManualItems();
            modalRef.current?.close();
        })
        .catch((error) => {
            setError(`Ошибка добавления инструкции: ${error.message}`)
            console.error("Ошибка добавления инструкции:", error);
        });
    };

    const handleCancel = () => {
        modalRef.current?.close();
    };
    
    return (
        <Modal
            title="Добавить инструкцию"
            ref={modalRef}
            appendTo={document.getElementById('root')}
        >
            <FormAddManual 
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                ref={formRef}
                externalError={error}
            />
        </Modal>
    );
});

export default ModalAddManual;