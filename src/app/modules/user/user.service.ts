import { Profile, User } from "@prisma/client";
import prisma from "../../../prisma";

const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });
    return result;
  }

  const result = await prisma.profile.create({
    data,
  });
  return result;
};

const getUsers = async () => {
  const result = await prisma.user.findMany({
    include: {
      profile: true,
    },
  });
  return result;
};
export const UserService = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsers,
};
