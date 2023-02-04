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
exports.AppUpdate = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const telegraf_1 = require("telegraf");
const app_information_1 = require("./app.information");
const telegram_interface_1 = require("./telegram.interface");
const arr = ['name', 'email', 'height', 'gender'];
let count = 0;
let userdata = new telegram_interface_1.UserData();
let AppUpdate = class AppUpdate {
    async start(ctx) {
        await ctx.reply('Hello');
        await ctx.reply('Please enter your name');
    }
    async on(message, ctx) {
        userdata[arr[count++]] = message;
        if (arr[count] === undefined) {
            const user = {
                name: userdata.name,
                email: userdata.email,
                height: +userdata.height,
                gender: userdata.gender
            };
            if (Number.isNaN(user.height)) {
                count = 2;
            }
            if (!(user.gender === 'male' || user.gender === 'female')) {
                count = 2;
            }
            if (!arr[count]) {
                await ctx.reply(`Your ideal weight is ${Math.floor((0, app_information_1.idealBodyWeight)(user.gender, user.height))}`);
                return;
            }
        }
        await ctx.reply(`Please enter your ${arr[count]}`);
    }
};
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "start", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    __param(0, (0, nestjs_telegraf_1.Message)('text')),
    __param(1, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, telegraf_1.Context]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "on", null);
AppUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)()
], AppUpdate);
exports.AppUpdate = AppUpdate;
//# sourceMappingURL=app.update.js.map