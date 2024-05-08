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
      const element1 = await screen.findByText("テスト画面一覧");
      const element2 = await screen.findByText("actionテスト");
      const element3 = await screen.findByText("loaderテスト");
      const element4 = await screen.findByText("outletテスト");
      const element5 = await screen.findByText("remix-authテスト");

      expect(element1).toBeVisible();
      expect(element1).toBeInTheDocument();
      expect(element2).toBeVisible();
      expect(element2).toBeInTheDocument();
      expect(element3).toBeVisible();
      expect(element3).toBeInTheDocument();
      expect(element4).toBeVisible();
      expect(element4).toBeInTheDocument();
      expect(element5).toBeVisible();
      expect(element5).toBeInTheDocument();
    });
  });
});
