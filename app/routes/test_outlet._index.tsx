import { useOutletContext } from "@remix-run/react";

export default function TestOutletIndex() {
  const { text } = useOutletContext<{ text: string }>();
  return (
    <>
      <div>{text}</div>
    </>
  );
}
