import { Configuration, PopupRequest } from '@azure/msal-browser';

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
  names: {
    signUpSignIn: 'b2c_1_new_sisu',
  },
  authorities: {
    signUpSignIn: {
      authority:
        'https://testeduorganization.b2clogin.com/testeduorganization.onmicrosoft.com/b2c_1_new_sisu',
    },
  },
  authorityDomain: 'testeduorganization.b2clogin.com',
};

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
  auth: {
    clientId: 'cc8ee927-db4d-4038-9897-4f5d0ff3b782',
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: 'http://localhost:3000',
    postLogoutRedirectUri: 'http://localhost:3000/auth',
  },
  system: {
    allowNativeBroker: false, // Disables WAM Broker
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ['openid', 'email'],
};

/**
 * Enter here the coordinates of your web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig = {
  uri: 'https://mfe-bff.franqueado.grupoboticario.digital/authentication/signin',
};
