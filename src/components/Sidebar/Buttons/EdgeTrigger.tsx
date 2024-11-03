import React, { useState } from 'react';
import { EdgeTriggerContainer } from './EdgeTrigger.styles';
import { useSidebar } from '../../../contexts';

const EdgeTrigger: React.FC = () => {
    const { toggleSidebar } = useSidebar();
    
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('a')) return;
        e.cancelable = false;
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        e.cancelable = false;
        if (touchStart !== null) {
            setTouchEnd(e.targetTouches[0].clientX);
        }
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) { // Свайп влево
            toggleSidebar();
        }
        if (touchStart - touchEnd < -50) { // Свайп вправо
            toggleSidebar();
        }
    };

    return (
        <EdgeTriggerContainer   
            onClick={() => toggleSidebar()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        />
    )
}
export default EdgeTrigger;