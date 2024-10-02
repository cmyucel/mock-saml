import { fetchPrivateKey, fetchPublicKey } from 'utils';

const appUrl = process.env.APP_URL || 'https://cool-dolphin-88.rshare.io';
const entityId = process.env.ENTITY_ID || 'https://saml.example.com/entityid';
const privateKey = fetchPrivateKey();
const publicKey = fetchPublicKey();

const config = {
  appUrl,
  entityId,
  privateKey,
  publicKey,
};

export default config;
