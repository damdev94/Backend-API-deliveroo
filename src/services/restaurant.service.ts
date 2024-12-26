import deliveroo from '@api/deliveroo';

export default class RestaurantService {

    private baseUrl = 'https://api-sandbox.developers.deliveroo.com';
    private accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken
    }

    async getBrandId() {
        deliveroo.auth(this.accessToken);
        deliveroo.server(`${this.baseUrl}/site`);
        deliveroo.get_v2SiteBrandId({site_id: '1593'})
        .then(({ data }) => console.log(data))
        .catch(err => console.error(err));
    }
    

    // async getAllRestaurants() {
    //     try {
    //         const response = await axios.get(`${this.baseUrl}/site/v1/restaurant_locations/1593`, {
    //             headers: {
    //                 Authorization: `Bearer ${this.accessToken}`,
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //         return response.data.brands
    //     } catch (err: any) {
    //         console.error('Error fetching restaurant:', err.response?.data || err.message);
    //         throw new Error('Unable to fetch restaurants.');
    //     }
    // }
}