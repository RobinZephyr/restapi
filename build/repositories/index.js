"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
var data_source_1 = require("../data-source");
var User_1 = require("../entity/User");
var userService_1 = require("../service/userService");
exports.userRepository = new userService_1.UserService(data_source_1.AppDataSource.getRepository(User_1.User));
//# sourceMappingURL=index.js.map