import { decodeJwt } from "jose";
import { loginRequest, apiConfig } from "../authConfig";
import { msalInstance } from "../index";
import { GraphData } from "../ui-components/ProfileData";

export async function callApi() {
    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }

    const { idToken } = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: account
    });


    const options = {
        method: "POST",
        body: JSON.stringify({ token: idToken }),
        headers: { "Content-Type": "application/json" },
    };

    return fetch(apiConfig.uri, options)
        .then(response => response.text())
        .then(token => decodeJwt(token) as GraphData)
        .catch(error => {
            console.log(error);
            return null;
        });
}