import { Configuration, PopupRequest } from "@azure/msal-browser";

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signUpSignIn: "b2c_1_si_gestaoprocessosfranqueados"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://gboticariob2cauthhml.b2clogin.com/gboticariob2cauthhml.onmicrosoft.com/b2c_1_si_gestaoprocessosfranqueados"
        },
    },
    authorityDomain: "gboticariob2cauthhml.b2clogin.com"
}

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: "9df95b5a-3e9a-45d3-8cf5-dafcb7c2519e",
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: "https://dworkflow-mgmt-host.grupoboticario.com.br/auth/callback",
        postLogoutRedirectUri: "https://dworkflow-mgmt-host.grupoboticario.com.br/auth/"
    },
    system: {
        allowNativeBroker: false // Disables WAM Broker
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
    scopes: ["openid", "email"]
};

/**
 * Enter here the coordinates of your web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig = {
    uri: 'https://mfe-bff.franqueado.grupoboticario.digital/authentication/signin'
};