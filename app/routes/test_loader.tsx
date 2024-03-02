import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({ message: "hogehoge" });
};

export default function TextLoader() {
  const { message } = useLoaderData<typeof loader>();

  return (
    <>
      <p>Text is {message}</p>
    </>
  );
}
