import { Router } from "express";
import RestaurantService from "../services/restaurant.service";

const router = Router();

const ACCESS_TOKEN = "eyJraWQiOiJ2blJoTXExN3o3K05yVVBlOUljRUFLMXI5UmRcL2xcL1ZtbVV5Umo3bVQxOVE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpLWRwLmRlbGl2ZXJvby5uZXRcL2FwaV9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3MzUyNDUxNDUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX09ERTdRNHBwaSIsImV4cCI6MTczNTI0NTQ0NSwiaWF0IjoxNzM1MjQ1MTQ1LCJ2ZXJzaW9uIjoyLCJqdGkiOiJlM2U1MjE2Yy0yYjE3LTRhZjQtOTE2Yi0xN2FlNDhlYjIwM2MiLCJjbGllbnRfaWQiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIn0.lDr2Vm8MKeJOgYq8PJUW2fEyqMZwfRC8gyyrZ-n6HS_c3IbXbW_9yo5xiT2a34Wdp_zKYU6An3mn3SmjWzjHMigy0M4zNxvqWycJIIBSFJeSr814qmnhTR7ma6PDZv3iycr6HK6kA3z9Ko_I_EIQ5jiP4EnT0evdHvpYzdMgtEvT4_VkDDlvlsMVovNeCf-x-XoLuPREw_6h6DNYivGgFL9BbhqFBr97CRV2oKMzL9s0VXVl3tt3igC5VUa1ZEAX2s7eJeHD3iVTrP0TaHIGMMxT7spU9mBRIioCThe4ZDwNWJeDvg4VxXibB82TfQ9G6PYiFt7mi5HpDBE84VmA6w";

router.get("/", async (req, res) => {
    try {
        const restaurant = await new RestaurantService(ACCESS_TOKEN).getBrandId();
        res.status(200).json(restaurant)
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

router.put("/upload/menu", async (req, res) => {
    try {
        const menu = await new RestaurantService(ACCESS_TOKEN).uploadMenu();
        res.status(200).json(menu)
    } catch (err: any) {
        res.status(500).json(err.message);
    }
})

router.get("/menu", async (req, res) => {
    try {
        const menu = await new RestaurantService(ACCESS_TOKEN).getMenu();
        res.status(200).json(menu)
    } catch (err: any) {
       res.status(500).json(err.message);
    }
})

export default router;