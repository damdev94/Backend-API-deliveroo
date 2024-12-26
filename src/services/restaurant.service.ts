import axios from "axios";

export default class RestaurantService {

    private baseUrl = 'https://api-sandbox.developers.deliveroo.com';
    private accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken
    }

    async getAllRestaurants() {
        try {
            const response = await axios.get(`${this.baseUrl}/site/1593/brands`, {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data.brands
        } catch (err: any) {
            console.error('Error fetching restaurant:', err.response?.data || err.message);
            throw new Error('Unable to fetch restaurants.');
        }
    }
}