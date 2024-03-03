import { describe, expect, test } from "vitest";
import { createRemixStub } from "@remix-run/testing";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TestAction, { action } from "~/routes/test_action";

describe("test_action.tsxのテスト", () => {
  test("labelが『email』の入力フォームとボタン名が『Submit』のボタンが初期表示される", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: TestAction,
        action,
      },
    ]);

    render(<RemixStub />);

    await waitFor(async () => {
      const emailElement = screen.getByRole("textbox", { name: "email" });
      const buttonElement = screen.getByRole("button", { name: "Submit" });
      expect(emailElement).toBeVisible();
      expect(emailElement).toBeInTheDocument();
      expect(buttonElement).toBeVisible();
      expect(buttonElement).toBeInTheDocument();
    });
  });

  test("フォームの送信に失敗すると『メールアドレスが不正です!』が表示される", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: TestAction,
        action,
      },
    ]);

    render(<RemixStub />);

    // 要素を取得。
    const emailElement = screen.getByRole("textbox", { name: "email" });

    // 適切ではないemailに変更。
    fireEvent.change(emailElement, { target: { value: "hoge@fuga.co.jp" } });

    // Submitボタンをクリック。
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(async () => {
      const messageElement = await screen.findByText(
        "メールアドレスが不正です!"
      );
      expect(messageElement).toBeVisible();
      expect(messageElement).toBeInTheDocument();
    });
  });

  test("フォームの送信に成功するとルート画面が表示される", async () => {
    const RemixStub = createRemixStub([
      {
        path: "/",
        Component: TestAction,
        action,
      },
    ]);

    render(<RemixStub />);

    // 要素を取得。
    const emailElement = screen.getByRole("textbox", { name: "email" });

    // 適切なemailに変更。
    fireEvent.change(emailElement, { target: { value: "hoge@hoge.co.jp" } });

    // Submitボタンをクリック。
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(async () => {
      const messageElement = await screen.findByText("actionに成功しました!");
      expect(messageElement).toBeVisible();
      expect(messageElement).toBeInTheDocument();
    });
  });
});
