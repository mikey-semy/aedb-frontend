import React from 'react';

interface FormActionProps {
  onRequestCancel: () => void;
  contentCancel: string;
  contentSubmit: string;
}

const FormAction: React.FC<FormActionProps> = ({ onRequestCancel, contentCancel, contentSubmit }) => {
  return (
    <div className="form__action">
      <button className="button__cancel" type="button" onClick={onRequestCancel}>{contentCancel}</button>
      <button className="button__submit" type="submit">{contentSubmit}</button>
    </div>
  );
};

export default FormAction;