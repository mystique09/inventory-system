
export async function get() {
  let data = {
    "username": "testuser",
    "email": "testemail@email.com",
    "role": "Admin"
  };

  return {
    headers: {
      "set-cookie": [`user=${data.username}; Path=/*; Max-Age=${Date.now() * 60 * 60 * 24 * 7};`]
    },
    body: {
      data
    }
  }
}
