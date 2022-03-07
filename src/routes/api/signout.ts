import { serialize } from "cookie";


export function post() {
  return {
    status: 200,
    headers: {
      "Set-Cookie": serialize("auth", null, {
        path: "/",
        maxAge: -1,
        httpOnly: true
      })
    },
    body: {
      message: "Signed out.",
    }
  };
}
