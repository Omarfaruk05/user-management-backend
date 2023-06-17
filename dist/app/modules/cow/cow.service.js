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
exports.CowService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const user_model_1 = require("../user/user.model");
const cow_model_1 = require("./cow.model");
const createCowService = (cowData) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield user_model_1.User.findById(cowData.seller);
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "Please give me seller id as seller.");
    }
    const result = yield cow_model_1.Cow.create(cowData);
    return result;
});
exports.CowService = {
    createCowService,
};
