import { describe, expect, test } from "vitest";
import { createRemixStub } from "@remix-run/testing";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextLoader from "~/routes/test_loader";
import { json } from "@remix-run/node";

describe("test_loader.tsxのテスト", () => {
  const testText = "fugafuga";

  test("初期表示テスト", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: TextLoader,
        loader() {
          return json({ message: testText });
        },
      },
    ]);

    render(<RemixStub />);

    await waitFor(async () => {
      const element = await screen.findByText(`Text is ${testText}`);
      expect(element).toBeVisible();
      expect(element).toBeInTheDocument();
    });
  });
});
