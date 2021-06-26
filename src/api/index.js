export const BASE_URL = "https://whispering-brook-69520.herokuapp.com/api";

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

export async function registerUser(usernameValue, passwordValue) {
  const url = `${BASE_URL}/users/register`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          username: usernameValue,
          password, passwordValue
      }),
    });
    const {
      data: { token },
    } = await response.json();

    localStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  const url = `${BASE_URL}/users/login`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { 
          "Content-Type": "application/json" 
        },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const { data: { token } } = await res.json();

    localStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    throw error;
  }
}
