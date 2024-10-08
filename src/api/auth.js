import baseInstance from "../axiosInstance/join";

export const register = async (userData) => {
  const response = await baseInstance.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await baseInstance.post("/login", userData);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await baseInstance.get("/user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};
