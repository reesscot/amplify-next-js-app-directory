// AmplifyConnectedComponents.jsx
"use client";
import * as React from "react";
import { Authenticator as AmplifyAuthenticator, useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";

function GatedAuth({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  if (user) {
    return <>{children}</>; // can be Server Component
  }

  return <AmplifyAuthenticator />;
}

function AuthenticatorProvider({children}: {children: React.ReactNode}) {
    return(
        <AmplifyAuthenticator.Provider>
            {children}
        </AmplifyAuthenticator.Provider>
    )
}

export { AuthenticatorProvider, GatedAuth };
