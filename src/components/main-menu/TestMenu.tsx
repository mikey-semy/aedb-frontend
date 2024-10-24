import React, { useState } from 'react';

const TestMenu: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    return (
        <div style={{
            width: isCollapsed ? '50px' : '262px',
            transition: 'width 0.3s ease-in-out',
            backgroundColor: 'white',
            height: '100vh'
        }}>
            <button onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? '>' : '<'}
            </button>
        </div>
    );
}
export default TestMenu;