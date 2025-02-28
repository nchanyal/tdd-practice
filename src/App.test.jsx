import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
    it("should render 'hello'", () => {
        const {asFragment, getByText} = render(<App />);
        screen.debug();
        expect(screen.getByText("hello!")).toBeInTheDocument();
    });
});