import { Router } from "express";
import RestaurantService from "../services/restaurant.service";

const router = Router();

const ACCESS_TOKEN = "eyJraWQiOiJ2blJoTXExN3o3K05yVVBlOUljRUFLMXI5UmRcL2xcL1ZtbVV5Umo3bVQxOVE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpLWRwLmRlbGl2ZXJvby5uZXRcL2FwaV9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3MzM0MDI1NzIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX09ERTdRNHBwaSIsImV4cCI6MTczMzQwMjg3MiwiaWF0IjoxNzMzNDAyNTcyLCJ2ZXJzaW9uIjoyLCJqdGkiOiJiOTNmYTkwZC1kZWU5LTQ1YjQtYTg4My1lZTY0ZTJmMTQzOGMiLCJjbGllbnRfaWQiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIn0.3DSLULGZUGwbPn1_5N-DM1rF6J9FBJkio7I3krDvstR0XKsQ6hyTSdmRKkCUfT2xht5J4GhLOLTzGozURvx3PfOPJORXU3caHu6sFYDeIA48yfAQkO5tl4OiHDRwIuPXcxtUESoJ1cYZg6xrP3ArkHQU4vWmN_Tl9z313hQieKWN5X3-LEQ3E9JyvXar0zAmnYz13G07K87AVDxJ5Dwx8kYVXRvIu9bIFrjAvThRGV0XGLgu6cnJ1lESyy6WaxoPYFeNgDi_uhY3bIvshQSuR3vgGoY5PXiOprEltxLOsk8vJAgGv-VDi2H6pNd500CndtlbZfWn9Ir_qe_Xjskfpw";

router.get("/", async (req, res) => {
    try {
        const restaurant = await new RestaurantService(ACCESS_TOKEN).getAllRestaurants();
        res.status(200).json(restaurant)
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

export default router;