import { MenuItem } from '../../types';

export const menuItems: MenuItem[] = [
    {
      label: 'Инструкции',
      icon: '📄',
      path: '/manuals',
    },
    {
      label: 'Знания',
      icon: '📖',
      subItems: [
        { label: 'Электробезопасность', icon: '⚡️', path: '/esafety' },
        { label: 'Предсменный экзаменатор', icon: '📋', path: 'https://pse.aedb.online' },
      ],
    },
    {
      label: 'AI',
      icon: '🦆',
      path: 'https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1',
    },
  ];