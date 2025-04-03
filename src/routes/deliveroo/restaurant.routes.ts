import { Router } from "express";
import RestaurantService from "../../services/deliveroo/restaurant.service";
import DeliverooService from "../../services/deliveroo/deliveroo.service";

const router = Router();


router.get("/", async (req, res) => {
    try {
        const ACCESS_TOKEN: string = await new DeliverooService().getAccessToken();
        const restaurant = await new RestaurantService(ACCESS_TOKEN).getBrandId();
        res.status(200).json(restaurant)
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

router.get("/list", async (req, res) => {
    try {
        const ACCESS_TOKEN: string = await new DeliverooService().getAccessToken();
        const restaurants = await new RestaurantService(ACCESS_TOKEN).getAllRestaurants();
        res.status(200).json(restaurants)
    } catch (err: any) {
        res.status(500).json(err.message);
    }
})

router.put("/upload/menu", async (req, res) => {
    try {
        const ACCESS_TOKEN: string = await new DeliverooService().getAccessToken();
        const menu = await new RestaurantService(ACCESS_TOKEN).uploadMenu();
        res.status(200).json(menu)
    } catch (err: any) {
        res.status(500).json(err.message);
    }
})

router.get("/menu", async (req, res) => {
    try {
        const ACCESS_TOKEN: string = await new DeliverooService().getAccessToken();
        const menu = await new RestaurantService(ACCESS_TOKEN).getMenu();
        res.status(200).json(menu)
    } catch (err: any) {
       res.status(500).json(err.message);
    }
})

export default router;