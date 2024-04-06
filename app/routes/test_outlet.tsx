import { Outlet } from "@remix-run/react";

export default function TestOutlet() {
  return (
    <>
      <Outlet context={{ text: "Context is hogehoge." }} />
    </>
  );
}
