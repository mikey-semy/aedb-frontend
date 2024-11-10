import styled from 'styled-components';

export const ModalContainer = styled.div<{ isOpen: boolean }>`

    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    height: 400px;
    width: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    
    background-color: var(--modal-background, #FFFFFF);
    border-radius: var(--border-radius-default, 5px);
    box-shadow: 
        var(--modal-box-shadow, 0 0 0px 1px var(--box-shadow-color)), 
        var(--modal-box-shadow-2, 0 0 10px 5px rgba(0, 0, 0, 0.2));
    padding: 24px;

`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: auto;
`;

export const ModalTitle = styled.h2`
    font-family: var(--content-header-font, 'Inter');
    font-size: 18px;
    font-weight: 600;
    color: var(--content-header-color, #000000);
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin: 20px auto;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-top: auto;
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: all var(--transition-default);
    display: ${props => (props.isOpen ? 'block' : 'none')};
    z-index: 999;
`;