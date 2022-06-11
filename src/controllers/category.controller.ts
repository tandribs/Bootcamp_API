import { Request, Response } from "express";
import { CreateCategoryDto } from "../dtos/category/create-category.dto";
import { CreatedCategoryDto } from "../dtos/category/created-category.dto";
import { CategoryService } from "../services/category.service";
import { HttpStatus } from "../utils/enums/http-status.enum";

interface ICategory {
  id?: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

interface CreateCategoryBody extends Request {
  body: CreateCategoryDto;
}

let categories: Array<ICategory> = [];

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  async getAll(request: Request, response: Response) {
    const categories = await this.categoryService.getAll();
    return response.status(HttpStatus.OK).json(categories);
  }

  async create(
    { body: { name } }: CreateCategoryBody,
    response: Response
  ): Promise<Response<CreatedCategoryDto>> {
    const createdCategory = await this.categoryService.create({ name });
    return response.status(HttpStatus.CREATED).json(createdCategory);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const category = categories.find(
      (category: ICategory) => category.id == id
    );

    return response.status(HttpStatus.OK).json(category);
  }

  async update(request: Request, response: Response) {
    const data = request.body;
    const { id } = request.params;

    categories = categories.map((category: ICategory) => {
      if (category.id == id) {
        category = { ...category, name: data.name, updated_at: new Date() };
      }
      return category;
    });

    return response.status(HttpStatus.NO_CONTENT).json();
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    categories.forEach((category: ICategory, index: number) => {
      if (category.id == id) categories.splice(index, 1);
    });

    return response.status(HttpStatus.NO_CONTENT).json();
  }
}