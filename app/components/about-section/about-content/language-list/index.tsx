'use client'

import React, { useState, useEffect } from 'react';
import DetailSubTitle from '../detail-module';

const LanguagesList = () => {
  const [languages, setLanguages] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fetchLanguageData/route');
        const data = await response.json();
        setLanguages(data.join(', '));
      } catch (error) {
        console.error('Error fetching languages:', error);
        setLanguages('Failed to load languages.');
      }
    };

    fetchData();
  }, []);

  return (
    <DetailSubTitle title="languages" hasTextContent={true} textContent={languages} />
  );
};

export default LanguagesList;
