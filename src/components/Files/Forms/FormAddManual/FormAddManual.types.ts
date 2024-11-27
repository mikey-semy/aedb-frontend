import { MutableRefObject } from 'react';

export interface FormAddManualTypes {
	onSubmit: (data: any) => void
	onCancel: () => void
	ref: MutableRefObject<{ open: () => void; }>
}