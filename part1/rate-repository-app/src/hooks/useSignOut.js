import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';
import { useEffect } from 'react';
import { useApolloClient } from '@apollo/client';



const useSignOut = async () => {
    const apolloClient = useApolloClient()
    const authStorage = useAuthStorage();

    await authStorage.removeAccessToken();
    apolloClient.resetStore();

};
export default useSignOut;