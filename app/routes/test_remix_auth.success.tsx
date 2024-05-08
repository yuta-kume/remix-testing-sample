import { Link } from "@remix-run/react";

export default function Success() {
  return (
    <div>
      <div>認証成功</div>
      <div>
        <Link to={"/test_remix_auth"}>test_remix_authへ</Link>
      </div>
    </div>
  );
}
