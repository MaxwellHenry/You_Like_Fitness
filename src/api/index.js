export const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'https://whispering-brook-69520.herokuapp.com/api';

export async function getActivities() {
  try {
    const response = await fetch(`${BASE_URL}/activities`);

    const data = response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getRoutines() {
  try {
    const response = await fetch(`${BASE_URL}/routines`);

    const data = response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const res = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    localStorage.setItem("data", JSON.stringify(data));
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const res = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    if (data) {
      localStorage.setItem("data", JSON.stringify(data));
    } else {
      return alert('Username or Password is invalid')
    }


  } catch (error) {
    throw error;
  }
}

export function logoutUser() {
  localStorage.removeItem("data");
}

export async function getRoutinesByUsername(username) {
  try {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";

    const res = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
