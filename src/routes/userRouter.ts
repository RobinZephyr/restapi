import {Router} from 'express';
import { UserController } from '../controller/UserController';
import { validateId } from '../middleware/validateId';
import { logger } from '../middleware/logger';

const userRouter = Router();


userRouter.use(logger); 

userRouter.get("/users", UserController.all);

userRouter.get("/users/:id",validateId, UserController.findOne);

userRouter.post("/users", UserController.create);

userRouter.put("/users/:id", UserController.update);

userRouter.delete("/users/:id", UserController.delete);
export default userRouter;