import {
  AuthenticationResult,
  EventMessage,
  EventType,
} from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { useEffect } from 'react';

export const AuthWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { instance } = useMsal();

  useEffect(() => {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    const accounts = instance.getAllAccounts();
    if (accounts.length > 0) {
      instance.setActiveAccount(accounts[0]);
    }

    instance.enableAccountStorageEvents();
  }, []);

  useEffect(() => {
    const callbackId = instance.addEventCallback((message: EventMessage) => {
      console.log('Event Messages', message);
      if (message.eventType === EventType.LOGIN_SUCCESS && message.payload) {
        const payload = message.payload as AuthenticationResult;
        const account = payload.account;
        instance.setActiveAccount(account);
      }
    });
    return () => {
      instance.removeEventCallback(callbackId!);
    };
  }, [instance]);

  return children;
};
