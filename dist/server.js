"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//  {
//  id: 1,
// name: 'NodeJS',
//  created_at: '2022-05-25 00:00:00',
//  updated_at: '2022-05-25 00:00:00',
//},
//{
//  id: 2,
//  name: 'MySQL',
//  created_at: '2022-05-25 00:00:00',
//  updated_at: '2022-05-25 00:00:00',
//},
const categories = [];
app.get('/', (request, response) => {
    return response.json({ status: 'success', version: '1.0.0' }).status(200);
});
//GET ALL CATEGORIES
app.get('/categories', (request, response) => {
    return response.json(categories).status(200);
});
app.post('/categories', (request, response) => {
    const data = request.body;
    console.log(data);
    categories.push(data);
    return response.json().status(200);
});
app.listen(3000, () => {
    console.log('Server is running');
});
//# sourceMappingURL=server.js.map