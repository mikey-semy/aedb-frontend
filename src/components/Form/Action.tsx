import React from 'react';
import Button from './Button';
interface FormActionProps {
  onRequestCancel: () => void;
  contentCancel: {
    icon?: string | React.ReactNode;
    title: string;
  }
  contentSubmit: {
    icon?: string | React.ReactNode;
    title: string;
  }
  disabled?: boolean;
}

const FormAction: React.FC<FormActionProps> = ({ onRequestCancel, contentCancel, contentSubmit, disabled }) => {
  return (
    <div className="form__action">
      <Button 
        type="submit" 
        icon={contentSubmit.icon} 
        title={contentSubmit.title}  
        className="button__title button__icon button__icon-submit"
        disabled={disabled}
      />
      <Button 
        type="button" 
        onClick={onRequestCancel} 
        icon={contentCancel.icon} 
        title={contentCancel.title}  
        className="button__title button__icon button__icon-cancel"
        disabled={disabled}
      />  
    </div>
  );
};

export default FormAction;