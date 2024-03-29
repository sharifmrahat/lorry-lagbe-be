"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_router_1 = require("../modules/auth/auth.router");
const users_router_1 = require("../modules/users/users.router");
const categories_router_1 = require("../modules/categories/categories.router");
const lorries_router_1 = require("../modules/lorries/lorries.router");
const feedbacks_router_1 = require("../modules/feedbacks/feedbacks.router");
const reviews_router_1 = require("../modules/reviews/reviews.router");
const bookings_router_1 = require("../modules/bookings/bookings.router");
const articles_router_1 = require("../modules/articles/articles.router");
const router = express_1.default.Router();
const routes = [
    { path: "/auth", module: auth_router_1.AuthRouter },
    { path: "/users", module: users_router_1.UserRouter },
    { path: "/categories", module: categories_router_1.CategoryRouter },
    { path: "/lorries", module: lorries_router_1.LorryRouter },
    { path: "/bookings", module: bookings_router_1.BookingRouter },
    { path: "/reviews", module: reviews_router_1.ReviewRouter },
    { path: "/feedbacks", module: feedbacks_router_1.FeedbackRouter },
    { path: "/articles", module: articles_router_1.ArticleRouter },
];
routes.forEach((route) => {
    router.use(route.path, route.module);
});
exports.AppRouter = router;
