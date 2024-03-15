import { Category } from "@prisma/client";
import prisma from "../../../prisma";

const insertIntoDB = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};

export const CategoryService = {
  insertIntoDB,
};
