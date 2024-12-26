import { Router } from "express";
import RestaurantService from "../services/restaurant.service";

const router = Router();

const ACCESS_TOKEN = "eyJraWQiOiJ2blJoTXExN3o3K05yVVBlOUljRUFLMXI5UmRcL2xcL1ZtbVV5Umo3bVQxOVE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpLWRwLmRlbGl2ZXJvby5uZXRcL2FwaV9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3MzUyMjA3MTksImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX09ERTdRNHBwaSIsImV4cCI6MTczNTIyMTAxOSwiaWF0IjoxNzM1MjIwNzE5LCJ2ZXJzaW9uIjoyLCJqdGkiOiJjYzQ4NWFiMi1iYTg3LTRjYzAtOGIwMC0zZTZlNDdmNmFmZTUiLCJjbGllbnRfaWQiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIn0.MYckreY7ZEA1-kLg-eg6ZFP9qGcAyfTEBB_E7h7-jDN82Y_siA00K4VY4kPzxvUjXt4SjTzwshhxb4i37Y-expP_vwBWClqLZmN7dscjkNi-6UB28KdmySpqwgBy0E8zFrP8Rs1xa9UvfYExBntE7W35bfPzFXr7QOJY-fjrckpz9cXSefye-2J0ss4nJCsbQgqSyOwLXY1KdV9v9A78Ze1LB5tVCmrAx7CFj_fmdmyML8ohXGS7GjihiNO8LQrNOH1prBC7xZOvd_qplmkSY8CPOhRoWriLzB8-atilmviHaAmEvoKv46FzNJkWzYCD4n3GutOJDWMpiRGZ55LsEg";

router.get("/", async (req, res) => {
    try {
        const restaurant = await new RestaurantService(ACCESS_TOKEN).getBrandId();
        res.status(200).json(restaurant)
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

export default router;