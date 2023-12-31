"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("../controller/UserController");
var validateId_1 = require("../middleware/validateId");
var logger_1 = require("../middleware/logger");
var userRouter = (0, express_1.Router)();
userRouter.use(logger_1.logger);
userRouter.get("/users", UserController_1.UserController.all);
userRouter.get("/users/:id", validateId_1.validateId, UserController_1.UserController.findOne);
userRouter.post("/users", UserController_1.UserController.create);
userRouter.put("/users/:id", UserController_1.UserController.update);
userRouter.delete("/users/:id", UserController_1.UserController.delete);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map