import React from 'react'
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className='container'>
      <hr />
          <div className='text-center py-3'>
            <p>{t("footer.baslik")} &copy; {currentYear}</p>
      </div>
    </footer>
  );
};
export default Footer;
