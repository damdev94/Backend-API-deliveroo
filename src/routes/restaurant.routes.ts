import { Router } from "express";
import RestaurantService from "../services/restaurant.service";

const router = Router();

const ACCESS_TOKEN = "eyJraWQiOiJ2blJoTXExN3o3K05yVVBlOUljRUFLMXI5UmRcL2xcL1ZtbVV5Umo3bVQxOVE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpLWRwLmRlbGl2ZXJvby5uZXRcL2FwaV9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3MzUyMjI2NjYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX09ERTdRNHBwaSIsImV4cCI6MTczNTIyMjk2NiwiaWF0IjoxNzM1MjIyNjY2LCJ2ZXJzaW9uIjoyLCJqdGkiOiJiMDExODE4YS04ZTA5LTQzMzQtOTBjNS01NWQ1YWNiMmYzMGIiLCJjbGllbnRfaWQiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIn0.C2dYrqqy4Q3HMhBx7x5tSKyeQ7JX8SqksZSKYfUB2RM6Hk90VjktTuGsRTPHhXxGKYO3MB4xUxVGCbhjN2xgrJI7jSeHqYn6aZG5C8vmqJaTrmgm1sdeh-3lXv6bnAXjlY55XJsmk55pGyKygxcGUTIixOPYxAqFMnXyYXA_vWcMRf34jJWSWUqFhQaAbPQ88IRB1ozNZ2Wq7TwCDcSv2QgIa9oNtkhBRbSRnli5RX35gcXs55lxEZLfBbz8W6S1kAe4T8eGYiR1nk_IS63s8TG40MVWNcYqoX7tr4d3VUSFTttrC_2p8vnMcPeiQzK6AFdHcDciW-FrIbEZl4wc4Q";

router.get("/", async (req, res) => {
    try {
        const restaurant = await new RestaurantService(ACCESS_TOKEN).getBrandId();
        res.status(200).json(restaurant)
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

router.put("/upload", async (req, res) => {
    try {
        const menu = await new RestaurantService(ACCESS_TOKEN)
        res.status(200).json(menu)
    }catch(error: any) {

    }
})

export default router;