import { describe, expect, test } from "vitest";
import { createRemixStub } from "@remix-run/testing";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "~/routes/_index";

describe("_index.tsxのテスト", () => {
  test("初期表示テスト", async () => {
    const RemixStub = createRemixStub([{ path: "/", Component: Index }]);

    render(<RemixStub />);

    await waitFor(async () => {
      expect(await screen.findByText("Welcome to Remix")).toBeVisible();
      expect(
        await screen.findByText("15m Quickstart Blog Tutorial")
      ).toBeVisible();
      expect(
        await screen.findByText("Deep Dive Jokes App Tutorial")
      ).toBeVisible();
      expect(await screen.findByText("Remix Docs")).toBeVisible();
    });
  });
});
