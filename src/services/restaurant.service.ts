import axios from "axios";
import deliveroo from '@api/deliveroo';

export default class RestaurantService {

    private baseUrl = 'https://api-sandbox.developers.deliveroo.com';
    private accessToken: string;

    constructor(accessToken: string) {
        this.accessToken = accessToken
    }

    async getBrandId() {
        deliveroo.auth('eyJraWQiOiJ2blJoTXExN3o3K05yVVBlOUljRUFLMXI5UmRcL2xcL1ZtbVV5Umo3bVQxOVE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpLWRwLmRlbGl2ZXJvby5uZXRcL2FwaV9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3MzUyMjEzMTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX09ERTdRNHBwaSIsImV4cCI6MTczNTIyMTYxMywiaWF0IjoxNzM1MjIxMzEzLCJ2ZXJzaW9uIjoyLCJqdGkiOiJhY2UzYTM1YS0wYjZlLTQwMzgtODU0YS0xYjcxZWM4ZTg0MmUiLCJjbGllbnRfaWQiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIn0.FPb6sZrZDiGOClBaL6z4Rw4RS9oSJkEh5O1uP9dGvxNHz9OVe6QhCRKZn8yFhTVhIcuGX0nU0iQT1AxKoO_Q2Rm9v9uag7Op3bWCeRcy8nNo1Elokio0or161rZP4_11j2oabxtymvT-DkadUUPyyIZz3buImXYqF6i-W4P0rw2m-0rd6YIm5thHV7ImfzlKdbpfnJlxkL-Nwj6Y3pdoBVDaubG71JbqbIOuxGZTCfT00ZoaXPtG0wGzNS3AHPgbepWGu_MYtauDGMBfIqAJDM_nISEhVPekvG7oG3wQlxc6UlnRosX4IQ75rsWyK4Cm1jjTllTa2l3pbQem3o2onw');
        deliveroo.server('https://api-sandbox.developers.deliveroo.com/site');
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