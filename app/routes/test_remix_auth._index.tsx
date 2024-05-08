import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const isAuthenticate = await authenticator.isAuthenticated(request, {
    failureRedirect: "/test_remix_auth/failure",
  });
  return json({ isAuthenticate });
};

export default function TestRemixAuthIndex() {
  const { isAuthenticate } = useLoaderData<typeof loader>();
  return (
    <>
      <Form method={"POST"}>
        <input type="email" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />

        <button type="submit">Submit</button>
      </Form>
      {isAuthenticate ? (
        <button type={"button"}>logout</button>
      ) : (
        <button type={"button"}>login</button>
      )}
    </>
  );
}
