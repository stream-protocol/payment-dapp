export class WalletError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'WalletError';
  }
}

export class WalletConnectionError extends WalletError {
  constructor(message: string) {
    super(message);
    this.name = 'WalletConnectionError';
  }
}

export class WalletDisconnectError extends WalletError {
  constructor(message: string) {
    super(message);
    this.name = 'WalletDisconnectError';
  }
}

// Example error messages
export const ERROR_MESSAGES = {
  CONNECTION_FAILED: 'Connection to wallet failed.',
  DISCONNECT_FAILED: 'Disconnecting from wallet failed.',
  CUSTOM_ERROR: 'A custom wallet error occurred.',
};