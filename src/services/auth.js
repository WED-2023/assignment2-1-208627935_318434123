// src/services/auth.js

import api from "../main.js";
import { API_DOMAIN } from "../store.js";
const authPath = "auth";

export async function register(data) {
  const response = await fetch(`${API_DOMAIN}/${authPath}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
  });
  if (!response.ok) {
    if (response.status === 409) {
      throw new Error("Failed to register, username already exists");
    }
    throw new Error("Failed to register, insufficient data");
  }
  return response;
}

export async function login(data) {
  const response = await fetch(`${API_DOMAIN}/${authPath}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
  });
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Failed to login, username or password are incorrect");
    }
    throw new Error("Failed to login, insufficient data");
  }
  // TODO STILL NOT SURE authToken is being set correctly
  //Testing Purposes
  const responseTest = await fetch(`${API_DOMAIN}/recipes/random`,{
    method: "GET",
    credentials: "include",
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error("Error fetching random recipes:", error);
  });
}
export function mockLogin(credentials, success = true) {
  // Check if already logged in
  if (!success) {
    throw {
      status: 409,
      response: {
        data: { message: "A user is already logged in", success: false },
      },
    };
  }

  // If all checks pass, return a success message
  return {
    status: 200,
    response: { data: { message: "login succeeded", success: true } },
  };
}

export function mockRegister(userDetails, success = true) {
  if (!success) {
    throw {
      status: 409,
      response: { data: { message: "Username taken", success: false } },
    };
  }

  return {
    status: 200,
    response: { data: { message: "user created", success: true } },
  };
}

export function mockLogout() {
  return {
    status: 200,
    response: { data: { message: "logout succeeded", success: true } },
  };
}
