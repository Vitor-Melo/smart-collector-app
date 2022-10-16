import axios from "axios";

export interface Login {
  email: string;
  password: string;
}

export async function loginUser(login: Login): Promise<any> {
  return await axios.get("/sanctum/csrf-cookie").then(async () => {
    return await axios.post("/login", login).then(async () => {
      return await axios.get("/me");
    });
  });
}

export async function logOutUser(): Promise<any> {
  return await axios.get("/logout");
}

export async function registerUser(register: any): Promise<any> {
  return await axios.post("/register", register);
}
