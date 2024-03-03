import { describe, expect, test } from "vitest";
import { createRemixStub } from "@remix-run/testing";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestLoader, { loader } from "~/routes/test_loader";

describe("test_loader.tsxのテスト", () => {
  test("『hogehoge』が表示される", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: TestLoader,
        loader,
      },
    ]);

    render(<RemixStub />);

    await waitFor(async () => {
      const element = await screen.findByText("Text is hogehoge");
      expect(element).toBeVisible();
      expect(element).toBeInTheDocument();
    });
  });
});
