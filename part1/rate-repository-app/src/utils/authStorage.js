import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const rawAccessToken = await AsyncStorage.getItem(
        `${this.namespace}:tokens`,
      );
  
      return rawAccessToken ? JSON.parse(rawAccessToken) : [];
  }
  
  async setAccessToken(accessToken) {
    // Add the access token to the storage
    // const currentTokens = await this.getAccessToken();
    // const newToken = [...currentTokens, accessToken];
    // await AsyncStorage.removeItem(`${this.namespace}:tokens`);

    await AsyncStorage.setItem(
      `${this.namespace}:tokens`,
      JSON.stringify(accessToken),
    );
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:tokens`);
  };
}

export default AuthStorage;