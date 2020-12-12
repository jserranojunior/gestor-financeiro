"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log(process.env.DATABASE + " aqui");
var connection = {
    client: "mysql",
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        charset: "utf8",
    },
    migrations: {
        directory: "./migrations",
        tableName: "migrations",
    },
    timezone: 'UTC'
};
exports.default = connection;
//# sourceMappingURL=knexfile.js.map