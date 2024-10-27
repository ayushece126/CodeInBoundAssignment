"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const CreateUser_dto_1 = require("../../dtos/CreateUser.dto");
const CreateUserPost_dto_1 = require("../../dtos/CreateUserPost.dto");
const CreateUserProfile_dto_1 = require("../../dtos/CreateUserProfile.dto");
const UpdateUser_dto_1 = require("../../dtos/UpdateUser.dto");
const users_service_1 = require("../../services/users/users.service");
const auth_guard_1 = require("../../../auth/auth.guard");
const SkipAuth_1 = require("../../../SkipAuth");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers() {
        return this.userService.findUsers();
    }
    createUser(createUserDto) {
        return this.userService.createUser(createUserDto);
    }
    async updateUserById(req, updateUserDto) {
        const userId = req.user.id;
        await this.userService.updateUser(userId, updateUserDto);
    }
    async deleteUserById(req) {
        const userId = req.user.id;
        await this.userService.deleteUser(userId);
    }
    createUserProfile(req, createUserProfileDto) {
        const userId = req.user.id;
        return this.userService.createUserProfile(userId, createUserProfileDto);
    }
    createUserPost(req, createUserPostDto) {
        const userId = req.user.id;
        return this.userService.createUserPost(userId, createUserPostDto);
    }
};
__decorate([
    (0, SkipAuth_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUser_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateUser_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserById", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserById", null);
__decorate([
    (0, common_1.Post)('profile'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateUserProfile_dto_1.CreateUserProfileDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUserProfile", null);
__decorate([
    (0, common_1.Post)('posts'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateUserPost_dto_1.CreateUserPostDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUserPost", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map