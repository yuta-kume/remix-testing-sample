import { Link } from "@remix-run/react";

export default function Failure() {
  return (
    <div>
      <div>認証失敗</div>
      <div>
        <Link to={"/test_remix_auth"}>test_remix_authへ</Link>
      </div>
    </div>
  );
}
