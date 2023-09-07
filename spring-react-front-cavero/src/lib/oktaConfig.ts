
export const oktaConfig = {
  clientId: '0oaass09mbd6YowNQ5d7',
  issuer: 'https://dev-26226003.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/login/callback',
  scopes: ['openid', 'profile','email'],
  pkce: true,
  disableHttpsCheck: true, 
}
