'use client'

import React, { useState, useEffect } from 'react';
import DetailSubTitle from '../detail-module';

interface QueryProps {
  query: string;
  api: string;

}

const QueryList: React.FC<QueryProps> = ({
  query,
  api
}) => {
  const API_URI = api as string;
  const [lists, setLists] = useState('Loading...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URI);
        const data = await response.json();
        if (Array.isArray(data)) {
          const listNames = data.map(lang => lang.name).join(', ');
          setLists(listNames);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        console.error('Error fetching lists:', error);
        setLists('Failed to load lists.');
      }
    };

    fetchData();
  }, [API_URI]);

  return (
    <DetailSubTitle title={query} hasTextContent={true} textContent={lists} />

  );
};

export default QueryList;
