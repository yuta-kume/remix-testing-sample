import { ActionFunctionArgs, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export default function TestAction() {
  const actionData = useActionData<typeof action>();

  return (
    <Form method={"POST"}>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" placeholder="email" />
      </div>
      <div>
        {actionData?.message != null && (
          <p id="message">{actionData?.message}</p>
        )}
      </div>
      <div>
        <button type={"submit"}>Submit</button>
      </div>
    </Form>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = String(formData.get("email"));

  if (!email.includes("hoge.co.jp"))
    return json({ message: "メールアドレスが不正です!" });

  return json({ message: "actionに成功しました!" });
};
