import type { KeycloakInitOptions } from '@react-keycloak/keycloak-ts';

type BrowserResponse = {
  type: string;
  url?: string;
};

export type Browser = {
  isAvailable(): Promise<boolean>;
  openAuthSession(url: string, redirectUrl: string): Promise<BrowserResponse>;
  open(url: string): Promise<BrowserResponse>;
};

export interface RNKeycloakInitOptions extends KeycloakInitOptions {
  browserAdapter?: Browser;
}