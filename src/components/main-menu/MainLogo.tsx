import React from 'react';
import { Link } from 'react-router-dom';
const Logo: React.FC = () => {
    return (
        <>
            <div className='main-logo'>
                <Link 
                    className="main-logo__link" 
                    to="/"
                >
                    <span className="main-logo__text">
                        aedb
                    </span>
                </Link>
            </div>
        </>
    )
}
export default Logo;