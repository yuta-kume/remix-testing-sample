import { describe, expect, test } from "vitest";
import { createRemixStub } from "@remix-run/testing";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestRemixAuthIndex from "~/routes/test_remix_auth._index";
import { json } from "@remix-run/node";

describe("test_remix_auth.tsxのテスト", () => {
  test("初期表示(isAuthenticateがtrue)", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: TestRemixAuthIndex,
        loader() {
          return json({ isAuthenticate: true });
        },
      },
    ]);

    render(<RemixStub />);

    await waitFor(async () => {
      const emailElement = screen.getByPlaceholderText("email");
      const passwordElement = screen.getByPlaceholderText("password");
      const buttonElement = screen.getByRole("button", { name: "Submit" });
      const logoutElement = screen.getByRole("button", { name: "logout" });
      expect(emailElement).toBeVisible();
      expect(emailElement).toBeInTheDocument();
      expect(passwordElement).toBeVisible();
      expect(passwordElement).toBeInTheDocument();
      expect(buttonElement).toBeVisible();
      expect(buttonElement).toBeInTheDocument();
      expect(logoutElement).toBeVisible();
      expect(logoutElement).toBeInTheDocument();
    });
  });

  test("初期表示(isAuthenticateがfalse)", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: TestRemixAuthIndex,
        loader() {
          return json({ isAuthenticate: false });
        },
      },
    ]);

    render(<RemixStub />);

    await waitFor(async () => {
      const emailElement = screen.getByPlaceholderText("email");
      const passwordElement = screen.getByPlaceholderText("password");
      const buttonElement = screen.getByRole("button", { name: "Submit" });
      const logoutElement = screen.getByRole("button", { name: "login" });
      expect(emailElement).toBeVisible();
      expect(emailElement).toBeInTheDocument();
      expect(passwordElement).toBeVisible();
      expect(passwordElement).toBeInTheDocument();
      expect(buttonElement).toBeVisible();
      expect(buttonElement).toBeInTheDocument();
      expect(logoutElement).toBeVisible();
      expect(logoutElement).toBeInTheDocument();
    });
  });
});
