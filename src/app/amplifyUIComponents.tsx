// AmplifyConnectedComponents.jsx
"use client";
import * as React from "react";
import { Authenticator, useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function GatedAuth({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  if (user) {
    return <>{children}</>; // can be Server Component
  }

  return <Authenticator />;
}

function GatedAuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <Authenticator.Provider>
      <GatedAuth>{children}</GatedAuth>
    </Authenticator.Provider>
  );
}

export { Authenticator, withAuthenticator, GatedAuthProvider };
