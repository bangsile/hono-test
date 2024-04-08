import prisma from "../libs/prisma-libs";

export const getUsers = async (c) => {
  const users = await prisma.user.findMany();
  if (!users) {
    return c.json({ error: "Users not found" }, 404);
  }
  return c.json(users);
};

export const getUserById = async (c) => {
  const { id } = c.req.param();
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  return c.json(user);
};

export const createUser = async (c) => {
  const { name, username, password } = await c.req.json();
  const users = await prisma.user.create({
    data: {
      username,
      name,
      password,
    },
  });

  return c.json(users);
};

export const editUser = async (c) => {
  const { id } = c.req.param();
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }

  const { name, username, password } = await c.req.json();
  const users = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      username,
      name,
      password,
    },
  });

  return c.json(users);
};

export const deleteUser = async (c) => {
  const { id } = c.req.param();
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });
  if (!user) {
    return c.json({ error: "User not found" }, 404);
  }
  const users = await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  return c.json({ msg: "User deleted successfully" });
};
