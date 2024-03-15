import { Request, Response } from "express";
import { UserService } from "./user.service";
import sndres from "../../../helpers/send";
import { Profile, User } from "@prisma/client";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const user = await UserService.insertIntoDB(req.body);
    sndres<User>(res, {
      statusCode: 201,
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return error;
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);
    sndres<Profile>(res, {
      statusCode: 201,
      success: true,
      message: "Profile updated complete",
      data: result,
    });
  } catch (error) {
    return error;
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getUsers();
    sndres<User[]>(res, {
      statusCode: 200,
      success: true,
      message: "Users retrieve successfully",
      data: users,
    });
  } catch (error) {
    return error;
  }
};

export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsers,
};
