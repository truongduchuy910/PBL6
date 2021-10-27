import React from "react";
import { gql, useQuery } from "@apollo/client";
export const USER_INFO = gql`
    query {
        authenticatedUser {
            avatar {
                publicUrl
            }
        }
    }  
`;
export default function UserItem({ UI }) {
    const { loading, error, data = {} } = useQuery(USER_INFO);
    const { authenticatedUser } = data;
    return <UI loading={loading} error={error} user={authenticatedUser} />;
}
