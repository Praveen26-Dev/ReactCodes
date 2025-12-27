import { createUser, fetchUsers } from "../service/authService";

export const registerController = async (formData, login) => {
  const response = await createUser(formData);
  login(response.data);
};

export const loginController = async (email, password, login) => {
  const { data: users } = await fetchUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password");
  }

  login(user);
};
