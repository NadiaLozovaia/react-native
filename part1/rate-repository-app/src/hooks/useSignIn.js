import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';
import { useEffect } from 'react';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
    const apolloClient = useApolloClient()
    const authStorage = useAuthStorage();

    const [mutate, result] = useMutation(AUTHENTICATE,
        {
            onError: (error) => {
                console.log(error.graphQLErrors[0].message)
            }
        }
    );

    // const getAccessToken = async () => {
    //     const accessToken = await authStorage.getAccessToken()
    //     // await authStorage.removeAccessToken();
    //     console.log(accessToken, 'accessToken')
    //     return accessToken
    // }
    // const token = getAccessToken()


    const signIn = async ({ username, password }) => {

        // call the mutate function here with the right arguments
        const { data } = await mutate({ variables: { credentials: { username, password } } })
        await authStorage.setAccessToken(data.authenticate.accessToken);
        console.log(data.authenticate.accessToken)

        apolloClient.resetStore();

    };

 
    return [signIn, result];
};

export default useSignIn;