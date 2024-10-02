// src/services/auth.js

import api from "../main.js";
const cur_path = "auth";

export async function register(data){
  return api.post(`${cur_path}/register`, {
    username: data.username,
    password: data.password,
  });
}
  export function mockLogin(credentials, success = true) {
    // Check if already logged in
    if (!success) {
      throw { status: 409, response: { data: { message: "A user is already logged in", success: false } } };
    }

    // If all checks pass, return a success message
    return { status: 200, response: { data: { message: "login succeeded", success: true}} };
  }
  

  export function mockRegister(userDetails, success = true) {

    if (!success) {
      throw { status: 409, response: { data: { message: "Username taken", success: false } } };
    }
  
    return { status: 200, response: { data: { message: "user created", success: true}} };
  }
  


  export function mockLogout() {
    return { status: 200, response: { data: { message: "logout succeeded", success: true}} };

  }
  

