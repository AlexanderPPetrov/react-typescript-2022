import { render, screen } from "@testing-library/react";
import FirstComponent from "../../../components/FirstComponent";

describe("Renders FirstComponent.tsx", () => {
  it("Checks whether FirstComponent.tsx renders properly", () => {
    render(
      <FirstComponent title={"Hello world"} turnedOn={false} counter={12} />
    );
    const firstComponent = screen.getByTestId("first-component");
    expect(firstComponent).toBeInTheDocument();
    const firstComponentTitle = screen.getByTestId("first-component-title");
    expect(firstComponentTitle.textContent).toMatch(/Hello world/);
    const firstComponentCounter = screen.getByTestId("first-component-counter");
    expect(firstComponentCounter.textContent).toMatch(/12/);
  });
  it("Checks turnedOn conditional rendering", () => {
    render(<FirstComponent title={"Hello world"} turnedOn={true} />);
    const firstComponentTurnedOn = screen.getByTestId(
      "first-component-turned-on"
    );
    expect(firstComponentTurnedOn).toBeInTheDocument();
    render(<FirstComponent title={"Hello world"} turnedOn={false} />);
    const firstComponentTurnedOff = screen.getByTestId(
      "first-component-turned-off"
    );
    expect(firstComponentTurnedOff).toBeInTheDocument();
  });
});
