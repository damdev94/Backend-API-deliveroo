import axios from "axios";


export default class DeliverooService {

    private clientId : string;
    private clientSecret: string;

    constructor() {
        this.clientId = 'm8ofide9ckmrotvqes36c9tgd';
        this.clientSecret = '1fl9v6nqb5vo8pv0e2l8538vh7mmos57okq8stq2hms27a4a5edg';
    }

    async getAccessToken(): Promise<string> {
        try {
            const response = await axios.post(
                'https://auth-sandbox.developers.deliveroo.com/oauth2/token',
                {
                    client_id: this.clientId,
                    client_secret: this.clientSecret, // Notez ici la correction de "cliendSecret" à "clientSecret"
                    grant_type: 'client_credentials',
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                    },
                }
            );
    
            const accessToken = response.data.access_token;
            console.log('Token d\'accès obtenu:', accessToken);
            return accessToken;
        } catch (error: any) {
            console.error('Erreur lors de la récupération du token:', error.response?.data || error.message);
            throw new Error('Impossible d\'obtenir le token d\'accès');
        }
    }
    
}