import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import { FormStrategy } from "remix-auth-form";

export const authenticator = new Authenticator<boolean>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get("email");
    const password = form.get("password");

    if (email === "test@test.co.jp" && password === "p@ssw0rd") {
      return true;
    } else {
      throw new Error("Failure");
    }
  }),
  "auth-test"
);
