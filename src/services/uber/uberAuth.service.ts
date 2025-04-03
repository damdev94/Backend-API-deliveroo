import axios from "axios";

export default class UberAuthService {
  private clientId: string;
  private clientSecret: string;
  private redirectUri: string;
  private uberAuthUrl: string;

  constructor() {
    this.clientId = 'Gr4inIAoDSz9500ewUj0-5PehZ7johlM';
    this.clientSecret = 'yHzRE5m0k0Ln-ZJZBukEP8G1LvtYZ8yYIWU7Wq0n';
    this.redirectUri = "http://localhost:4000/api/auth/callback";
    this.uberAuthUrl = "https://login.uber.com/oauth/authorize";
  }

  generateAuthUrl(): string {
    return `${this.uberAuthUrl}?client_id=${this.clientId}&response_type=code&redirect_uri=${this.redirectUri}`;
  }
}