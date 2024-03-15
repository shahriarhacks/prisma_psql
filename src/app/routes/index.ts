import express, { Router } from "express";
const router = express.Router();
import userRoute from "../modules/user/user.route";
import categoryRoute from "../modules/category/category.route";
import postRoute from "../modules/post/post.route";

type IModuleRouter = { path: string; route: Router };

const moduleRoutes: IModuleRouter[] = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/category",
    route: categoryRoute,
  },
  {
    path: "/post",
    route: postRoute,
  },
];

moduleRoutes.forEach((moduleRoute: IModuleRouter) => {
  router.use(moduleRoute.path, moduleRoute.route);
});

export default router;
