import { Request, Response } from "express";
import { CategoryService } from "./category.service";
import sndres from "../../../helpers/send";
import { Category } from "@prisma/client";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const category = await CategoryService.insertIntoDB(req.body);
    sndres<Category>(res, {
      statusCode: 201,
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    return error;
  }
};

export const CategoryController = {
  insertIntoDB,
};
