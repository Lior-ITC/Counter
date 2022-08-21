import React from "react";
import ReactDOM from "react-dom/client";
import "@testing-library/jest-dom";
import { fireEvent, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Counters from "./counters";

jest.mock("./counter.jsx", () => {
  return () => <div>Mocked comp</div>;
});

describe("Testing Counters", () => {
  let props;
  beforeEach(() => {
    props = {
      counters: [{
          value: 0,id: 1
      },{
        value: 0,id: 2
      },
      {
        value: 0,id: 3
      }
    ],
      onIncrement: jest.fn(),
      onDecrement: jest.fn(),
      onDelete: jest.fn(),
    };
  });
  test("Render test", () => {
    const container = document.createElement("div");
    act(() => ReactDOM.createRoot(container).render(<Counters {...props}/>));
  });
});
