import styled from 'styled-components';

export const ModalContainer = styled.div<{ isOpen: boolean }>``;

export const ModalContent = styled.div``;

export const ModalFooter = styled.div``;

export const ModalHeader = styled.div``;

export const ModalBody = styled.div``;

export const ModalClose = styled.div``;

export const ModalTitle = styled.h2`

`;

export const Overlay = styled.div<{ isOpen: boolean }>`
    @media (max-width: 1024px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        transition: all var(--transition-default);
        display: ${props => (props.isOpen ? 'block' : 'none')};
        z-index: 999;
    }
`;