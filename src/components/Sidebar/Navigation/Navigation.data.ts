import { NavigationTypes } from './Navigation.types';

import { BsFileEarmarkText } from 'react-icons/bs';
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdQuiz } from 'react-icons/md';
import { RiRobot2Line } from 'react-icons/ri';

export const NavigationData: NavigationTypes[] = [
  {
    path: '/files',
    label: 'Файлы',
    icon: BsFileEarmarkText,
  },
  {
    path: '/esafety',
    label: 'ЭБ',
    icon: MdOutlineElectricBolt,
  },
  {
    path: 'https://pse.aedb.online',
    label: 'ПСЭ',
    icon: MdQuiz,
  },
  {
    path: 'https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1',
    label: 'AI',
    icon: RiRobot2Line,
  },
];