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
class DeliverooService {
    constructor() {
        this.clientId = 'm8ofide9ckmrotvqes36c9tgd';
        this.clientSecret = '1fl9v6nqb5vo8pv0e2l8538vh7mmos57okq8stq2hms27a4a5edg';
    }
    getAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const response = yield axios_1.default.post('https://auth-sandbox.developers.deliveroo.com/oauth2/token', {
                    client_id: this.clientId,
                    client_secret: this.clientSecret, // Notez ici la correction de "cliendSecret" à "clientSecret"
                    grant_type: 'client_credentials',
                }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                    },
                });
                const accessToken = response.data.access_token;
                console.log('Token d\'accès obtenu:', accessToken);
                return accessToken;
            }
            catch (error) {
                console.error('Erreur lors de la récupération du token:', ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
                throw new Error('Impossible d\'obtenir le token d\'accès');
            }
        });
    }
}
exports.default = DeliverooService;
