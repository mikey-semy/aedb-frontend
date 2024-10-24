import React from 'react';

const Footer: React.FC = () => {

  return (
    <>
        <footer className='footer'>
          <div className="footer-bottom">
            ADEB ©{new Date().getFullYear()} Создано для удобства
          </div>
        </footer>    
    </>
  );
};

export default Footer;