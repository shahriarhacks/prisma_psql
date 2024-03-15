import { Request, Response } from "express";
import { PostService } from "./post.service";
import sndres from "../../../helpers/send";
import { Post } from "@prisma/client";
import { ISortOptions } from "../../../interface/isortOptions";
import sendResPage from "../../../shared/sendRes";

const insertPostToDB = async (req: Request, res: Response) => {
  try {
    const post = await PostService.insertPostToDB(req.body);
    sndres<Post>(res, {
      statusCode: 201,
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    return error;
  }
};

const findAllPost = async (req: Request, res: Response) => {
  try {
    const {
      sortBy = "",
      sortOrder = "",
      searchTerm = "",
      page = 1,
      limit = 10,
    }: ISortOptions = req.query;
    const result = await PostService.findAllPost({
      sortBy,
      sortOrder,
      searchTerm,
      page,
      limit,
    });
    sendResPage<Post[]>(res, {
      statusCode: 200,
      success: true,
      message: "Posts retrieve successfully",
      meta: result.meta,
      data: result.result,
    });
  } catch (error) {
    return error;
  }
};
export const PostController = {
  insertPostToDB,
  findAllPost,
};
