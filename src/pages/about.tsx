import NavBar from '@/app/components/NavBar';
import {AuthenticatorProvider} from '../app/amplifyUIComponents';
import '../app/configure';
import { Authenticator } from '@aws-amplify/ui-react';

export default function About() {
    return <div>
      <AuthenticatorProvider>
        <NavBar />
        <Authenticator/>
      </AuthenticatorProvider>
    </div>
  }