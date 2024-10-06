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
}

const FormAction: React.FC<FormActionProps> = ({ onRequestCancel, contentCancel, contentSubmit }) => {
  return (
    <div className="form__action">
      <Button 
        type="button" 
        onClick={onRequestCancel} 
        icon={contentCancel.icon} 
        title={contentCancel.title}  
        className="button button__cancel  button--icon"
      />
      <Button 
        type="submit" 
        icon={contentSubmit.icon} 
        title={contentSubmit.title}  
        className="button button__submit  button--icon"
      />
    </div>
  );
};

export default FormAction;