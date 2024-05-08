import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>テスト画面一覧</h1>
      <ul>
        <li>
          <Link to={"/test_action"}>actionテスト</Link>
        </li>
        <li>
          <Link to={"/test_loader"}>loaderテスト</Link>
        </li>
        <li>
          <Link to={"/test_outlet"}>outletテスト</Link>
        </li>
        <li>
          <Link to={"/test_remix_auth"}>remix-authテスト</Link>
        </li>
      </ul>
    </div>
  );
}
