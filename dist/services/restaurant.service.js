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
const axios_1 = __importDefault(require("axios"));
class RestaurantService {
    constructor(accessToken) {
        this.baseUrl = 'https://api-sandbox.developers.deliveroo.com';
        this.accessToken = accessToken;
    }
    getAllRestaurants() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield axios_1.default.get(`${this.baseUrl}/site/v1/brands`, {
                    headers: {
                        Authorization: `Bearer ${this.accessToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                return response.data.brands;
            }
            catch (err) {
                console.error('Error fetching restaurant:', ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data) || err.message);
                throw new Error('Unable to fetch restaurants.');
            }
        });
    }
}
exports.default = RestaurantService;
