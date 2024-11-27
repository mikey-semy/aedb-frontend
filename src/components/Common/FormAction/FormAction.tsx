import React from 'react';
import { FormActionTypes } from './FormAction.types';
import { FormActionContainer } from './FormAction.styles';
import { SubmitButton, CancelButton } from './index';

const FormAction: React.FC<FormActionTypes> = (
  { 
    onRequestCancel, 
    contentCancel, 
    contentSubmit, 
    disabled 
  }) => {
  return (
    <FormActionContainer>
      <SubmitButton 
        type="submit" 
        icon={contentSubmit.icon} 
        title={contentSubmit.title}  
        disabled={disabled}
      />
      <CancelButton
        onClick={onRequestCancel} 
        icon={contentCancel.icon} 
        title={contentCancel.title}  
        disabled={false}
      />  
    </FormActionContainer>
  );
};

export default FormAction;