import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ME } from '../graphql/queries';

const useMe = () => {
  const { data, error, loading } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
    // Other options
  });
 
  return {data, error, loading} 
};




export default useMe;