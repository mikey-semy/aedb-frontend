import { useImperativeHandle, forwardRef, useRef} from "react";
import { Modal, FormAddManual } from '@/components';
import { ModalRef } from '@/components/Common/Modal/Modal.types';
const ModalAddManual = forwardRef(function ModalAddManual({}, ref) {
    const modalRef = useRef<ModalRef | null>(null);
    const formRef = useRef<{ open: () => void }>({ open: () => {} });
    
    useImperativeHandle(ref, () => ({
        open: () => {
            modalRef.current?.open();
        }
    }));

    const handleSubmit = (manual: any) => {
        console.log(manual);
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