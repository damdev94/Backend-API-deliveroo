import axios from "axios";


export default class DeliverooService {

    private clientId : string;
    private clientSecret: string;
    public accessToken: string;

    constructor() {
        this.clientId = '6do68ig50jbg84afhvkrmaa4gd';
        this.clientSecret = 'bgckteah0ur3p457rtub7ipkv43b1j2cmsmj14rrjaokghhtv4d';
        this.accessToken = ""
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
    
            this.accessToken = response.data.access_token;
            return this.accessToken;
        } catch (error: any) {
            console.error('Erreur lors de la récupération du token:', error.response?.data || error.message);
            throw new Error('Impossible d\'obtenir le token d\'accès');
        }
    }
    
}