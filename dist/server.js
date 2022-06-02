"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
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
    const category = {
        id: (categories.length + 1),
        name: data.name,
        created_at: new Date(),
        updated_at: new Date(),
    };
    categories.push(category);
    return response.json().status(200);
});
app.get('/categories/:id', (request, response) => {
    const { id } = request.params;
    const category = categories.find((item) => item.id == id);
    return response.json(category).status(200);
});
app.listen(3000, () => {
    console.log('Server is running');
});
//# sourceMappingURL=server.js.map