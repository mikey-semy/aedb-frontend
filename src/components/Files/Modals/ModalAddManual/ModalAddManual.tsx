import { useImperativeHandle, forwardRef, useRef} from "react";
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
    
    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current?.open();
        }
    }));

    const handleSubmit = (manual:  ManualFormData) => {
        addManual(manual)
        .then(() => {
            fetchManualItems();
            modalRef.current?.close();
          })
    };

    const handleCancel = () => {
        modalRef.current?.close();
    };
    
    return (
        <Modal
            title="Добавить инструкцию"
            ref={modalRef}
            appendTo={document.body}
        >
            <FormAddManual 
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                ref={formRef}
            />
        </Modal>
    );
});

export default ModalAddManual;