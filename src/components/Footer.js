
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-2 mt-2">
      <p className="text-gray-600 text-sm">
        &copy; {currentYear} Bộ môn Kỹ Thuật Phần Mềm, Trường CNTT & TT, ĐH Cần Thơ.
      </p>
    </footer>
  );
};

export default Footer;
