import CipherComponent from '@/components/CipherComponent/CipherComponent';
import React from 'react';

const Vigenere = () => {
  return (
    <div>
      <CipherComponent chiferType={"vigenere"} chiferName={"Шифр Виженера"}/>
    </div>
  );
};

export default Vigenere;