"use client";

import { Button, useAuthenticator, Flex, View } from "@aws-amplify/ui-react";

export default function NavBar() {
  const { user, signOut } = useAuthenticator();
  console.log('user', user);
  return (
    <Flex
      padding="20px"
      height="80px"
      backgroundColor="teal.60"
      justifyContent="space-between"
      textAlign="center"
    >
      <View>
        {user?.username ? (
          <>Welcome: {user?.username}</>
        ) : (
          <>Welcome, please signin!</>
        )}
      </View>
      {user ? <Button onClick={signOut}>Sign out</Button> : null}
    </Flex>
  );
}
