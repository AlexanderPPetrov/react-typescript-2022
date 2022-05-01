import React from "react";

interface Props {
  title: string;
  turnedOn: boolean;
  counter?: number;
}

const FunctionalComponent: React.FC<Props> = ({ title, turnedOn, counter }) => {
  return (
    <div data-testid="first-component" className="test-component">
      <div data-testid="first-component-title">{title}</div>
      {turnedOn && <div data-testid="first-component-turned-on"></div>}
      {!turnedOn && <div data-testid="first-component-turned-off"></div>}
      <div data-testid="first-component-counter">{counter}</div>
    </div>
  );
};

export default FunctionalComponent;
