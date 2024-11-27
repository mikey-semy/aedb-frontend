export interface FormActionTypes {
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