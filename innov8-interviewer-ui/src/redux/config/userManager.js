import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
  client_id: 'ZDY1ZDMyOGMtNmI3My00',
  redirect_uri: 'https://localhost/callback/',
  response_type: 'id_token token',
  scope: 'openid',
  authority: 'https://w3id.alpha.sso.ibm.com/isam',
  post_logout_redirect_uri: 'https://localhost/',
  silent_redirect_uri: 'https://localhost/callback/',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  metadata: {
    issuer: 'https://w3id.alpha.sso.ibm.com/isam',
    authorization_endpoint: 'https://w3id.alpha.sso.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/authorize',
    token_endpoint: 'https://w3id.alpha.sso.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/token',
    introspection_endpoint: 'https://w3id.alpha.sso.ibm.com/isam/oidc/endpoint/amapp-runtime-oidcidp/introspect',
    jwks_uri: null
  }
}

const userManager = createUserManager(userManagerConfig);

export default userManager;
