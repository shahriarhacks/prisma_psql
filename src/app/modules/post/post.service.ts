import { Post } from "@prisma/client";
import prisma from "../../../prisma";
import { ISortOptions } from "../../../interface/isortOptions";

const insertPostToDB = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

const findAllPost = async (options: ISortOptions) => {
  const { sortBy, sortOrder, searchTerm, limit, page } = options;

  const take = Number(limit);
  const skip = take * Number(page) - take;

  return await prisma.$transaction(async (trx) => {
    const result = await trx.post.findMany({
      skip,
      take,
      include: {
        category: true,
        author: true,
      },
      orderBy:
        sortBy && sortOrder
          ? { [sortBy]: sortOrder }
          : {
              createdAt: "desc",
            },
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    const total = await trx.post.count();
    const data = await trx.post.count({ skip, take });
    return {
      result,
      meta: {
        skip,
        limit: take,
        page: Number(page),
        total,
        data,
      },
    };
  });
};

export const PostService = {
  insertPostToDB,
  findAllPost,
};
