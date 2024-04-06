import { describe, expect, test } from "vitest";
import { createRemixStub } from "@remix-run/testing";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestOutlet from "~/routes/test_outlet";
import TestOutletIndex from "~/routes/test_outlet._index";

describe("test_useOutletContext.tsxのテスト", () => {
  test("useOutletContextで渡された値が表示される", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: TestOutlet,
        children: [
          {
            path: "/",
            Component: TestOutletIndex,
          },
        ],
      },
    ]);

    render(<RemixStub />);

    await waitFor(async () => {
      const element = await screen.findByText("Context is hogehoge.");
      expect(element).toBeVisible();
      expect(element).toBeInTheDocument();
    });
  });
});
