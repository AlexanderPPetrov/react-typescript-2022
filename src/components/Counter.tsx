import React, { useState } from "react";
import { InputGroup, Button, FormControl, Alert } from "react-bootstrap";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div data-testid="counter" className="mt-5">
      <InputGroup className="mb-3">
        <Button
          id="count-decrement"
          variant="outline-secondary"
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
        <FormControl
          id="count-value"
          readOnly
          value={count}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />

        <Button
          id="count-increment"
          variant="outline-secondary"
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </InputGroup>
      {count > 3 && (
        <Alert id="counter-success" variant="success">
          Success message
        </Alert>
      )}
    </div>
  );
};

export default Counter;
