// ContentHeader.types.ts
import { ContentContextTypes } from '../../../contexts/Content/ContentContext.types';

export interface ContentHeaderContainerTypes {
    contentData: ContentContextTypes['contentData']; // Указываем только contentData
}
