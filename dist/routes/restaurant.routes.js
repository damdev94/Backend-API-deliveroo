"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurant_service_1 = __importDefault(require("../services/restaurant.service"));
const router = (0, express_1.Router)();
const ACCESS_TOKEN = "eyJraWQiOiJ2blJoTXExN3o3K05yVVBlOUljRUFLMXI5UmRcL2xcL1ZtbVV5Umo3bVQxOVE9IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJodHRwczpcL1wvYXBpLWRwLmRlbGl2ZXJvby5uZXRcL2FwaV9hY2Nlc3MiLCJhdXRoX3RpbWUiOjE3MzM0MDI1NzIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX09ERTdRNHBwaSIsImV4cCI6MTczMzQwMjg3MiwiaWF0IjoxNzMzNDAyNTcyLCJ2ZXJzaW9uIjoyLCJqdGkiOiJiOTNmYTkwZC1kZWU5LTQ1YjQtYTg4My1lZTY0ZTJmMTQzOGMiLCJjbGllbnRfaWQiOiJtOG9maWRlOWNrbXJvdHZxZXMzNmM5dGdkIn0.3DSLULGZUGwbPn1_5N-DM1rF6J9FBJkio7I3krDvstR0XKsQ6hyTSdmRKkCUfT2xht5J4GhLOLTzGozURvx3PfOPJORXU3caHu6sFYDeIA48yfAQkO5tl4OiHDRwIuPXcxtUESoJ1cYZg6xrP3ArkHQU4vWmN_Tl9z313hQieKWN5X3-LEQ3E9JyvXar0zAmnYz13G07K87AVDxJ5Dwx8kYVXRvIu9bIFrjAvThRGV0XGLgu6cnJ1lESyy6WaxoPYFeNgDi_uhY3bIvshQSuR3vgGoY5PXiOprEltxLOsk8vJAgGv-VDi2H6pNd500CndtlbZfWn9Ir_qe_Xjskfpw";
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurant = yield new restaurant_service_1.default(ACCESS_TOKEN).getAllRestaurants();
        res.status(200).json(restaurant);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
}));
exports.default = router;
