import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "./index";
import userEvent from "@testing-library/user-event";

let user;
let addButton;
let removeButtom;
let counter;

beforeEach(() => {
    user = userEvent.setup();
    render(<Counter />);
    addButton = screen.getByTestId("add");
    removeButtom = screen.getByTestId("remove");
    counter = screen.getByTestId("counter");
});

describe("<Counter />", () => {
    it("should exist", () => {});

    it("should render a title", () => {
        const title = screen.getByTestId("title");

        expect(title).toHaveRole("heading");
        expect(title).toHaveTextContent("Awesome Counter");
    });

    it("should render an add button", () => {
        expect(addButton).toHaveRole("button");
        expect(addButton).toHaveTextContent("Add");
    });

    it("should render a counter", () => {
        expect(counter).toHaveTextContent("0");
    });

    it("should render a remove button", () => {
        expect(removeButtom).toHaveRole("button")
        expect(removeButtom).toHaveTextContent("Remove");
    });

    it("should increase the counter when the add button is clicked", async () => {
        // Simulate a click event
        await user.click(addButton);
        // The value of counter should increment
        expect(counter).toHaveTextContent("1");
    });

    it("should decrease the counter when the remove button is clicked", async () => {
        await user.click(addButton);
        await user.click(removeButtom);

        expect(counter).toHaveTextContent("0");

        await user.click(removeButtom);
        // The value of counter should not decrement below 0
        expect(counter).toHaveTextContent("0");
    });
});