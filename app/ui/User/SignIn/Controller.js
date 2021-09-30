import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_AUTH } from "../Auth/Controller";
import { useMutation, gql, useApolloClient, useQuery } from "@apollo/client";
export const USER_SIGNIN = gql`
  mutation($phone: String, $password: String) {
    user: authenticateUserWithPassword(phone: $phone, password: $password) {
      token
      item {
        phone
        name
      }
    }
  }
`;
export default function UserSignIn({ UI, navigation }) {
  const client = useApolloClient();
  useQuery(USER_AUTH, {
    onCompleted: ({ user }) => {
      if (user) navigation.navigate("home");
    },
  });
  const [on, result = {}] = useMutation(USER_SIGNIN, {
    onCompleted: async ({ user = {} }) => {
      const { token } = user;
      try {
        await AsyncStorage.setItem("@token", token);
        navigation.navigate("home");
      } catch (e) {
      } finally {
        await client.clearStore();
        await client.resetStore();
      }
    },
    onError: async (error) => {
      try {
        await AsyncStorage.removeItem("@token");
      } catch (e) {
      } finally {
        await client.clearStore();
        await client.resetStore();
      }
    },
  });
  const signIn = ({ phone, password }) => {
    return on({ variables: { phone, password } });
  };
  const { loading, error, data = {} } = result;
  const { user } = data;
  return <UI signIn={signIn} loading={loading} error={error} user={user} />;
}
