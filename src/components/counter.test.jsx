import React from "react";
import ReactDOM from "react-dom/client";
import "@testing-library/jest-dom";
import { fireEvent, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Counter from "./counter";

// describe("Render without crashing", () => {
//     test("Testing Component doesn't crash", () => {
//     const container = document.createElement("div");
//     const root = ReactDOM.createRoot(container);
//     act(() => {
//       root.render(<Counter  />);
//     });
//   });

//   test("Shows a numeric value", () => {
//     const props = {
//       onIncrement: jest.fn(),
//       onDecrement: jest.fn(),
//       onDelete: jest.fn(),
//       counter: { id: 1, value: 5 },
//     };
//     const { getByText } = render(<Counter {...props} />);
//     expect(getByText('5')).toBeInTheDocument();
// });
// });

describe("testing101", () => {
    let props;
  beforeEach(() => {
    props = {
          onIncrement: jest.fn(),
          onDecrement: jest.fn(),
          onDelete: jest.fn(),
          counter: { id: 1, value: 0 },
        };
      });

    test("Trigger onIncrement", () => {
      const { container } = render(<Counter {...props}></Counter>);
      const plusElement = container.getElementsByClassName("fa-plus-circle");
      expect(plusElement).toHaveLength(1);
      const incrementButton = plusElement[0];
      fireEvent.click(incrementButton);
      expect(props.onIncrement).toHaveBeenCalledTimes(1);
    });

  // test("Trigger onDecerement", async () => {
  //     const decrementFunc = function (){
  //       this.counter.value--;
  //     }
  //   const props = {
  //   //   onIncrement: jest.fn( ),
  //     onDecrement: jest.fn(decrementFunc),
  //     // onDelete: jest.fn(),
  //     counter: { id: "aaa", value: 1 }
  //   };
  //   const propsValueDown = {
  //   //   onIncrement: jest.fn(),
  //   onDecrement: jest.fn(),
  //     // onDelete: jest.fn(),
  //     counter: { id: "aaa", value: 0 }
  //   };
  //     const { getByRole } = render(<Counter {...props}/>);
  //     const minusButton = getByRole("button", {name: "Minus Button"});
  //     await userEvent.click(minusButton);
  //     expect(props.onDecrement).toHaveBeenCalledTimes(1);
  //   // expect(props).toMatchObject(propsValueDown);
  //   expect(props.counter).toEqual(propsValueDown.counter);
  //   const houseForSale = {
  //     bath: true,
  //     bedrooms: 4,
  //     kitchen: {
  //       amenities: ["oven", "stove", "washer"],
  //       area: 20,
  //       wallColor: "white",
  //     },
  //   };
  //   const desiredHouse = {
  //     bath: true,
  //     kitchen: {
  //       amenities: ["oven", "stove", "washer"],
  //       wallColor: expect.stringMatching(/white|yellow/),
  //     },
  //   };
  //   expect(houseForSale).toMatchObject(desiredHouse);
  //   expect(JSON.stringify(props)).toBe(JSON.stringify(propsValueDown));
  // });

  // await userEvent.click(incrementButton);
    test(`increment button`, () => {
      const { container, unmount } = render(<Counter {...props} />);
      const incrementButton = screen.getByRole("button", { name: "increment" });
      expect(incrementButton).toBeDisabled();
    });
    test(`decrement button`, () => {
      // const container = document.createElement('div');
      // const root = ReactDOM.createRoot(container);
      // act(() => {
      // root.render(<Counter {...props}/>)
      // const unmount = root.unmount(container);
      // expect(unmount).toBe(true);
      // }
      // )
      const { getbyRole } = render(<Counter {...props} />);
      const events = userEvent.setup();
      const decrementButton = screen.getByRole("button", { name: "decrement" });
      expect(decrementButton).toBeDisabled();
    });
    test("classes", () => {
      const { getByRole } = render(<Counter {...props} />);
      const decrementButton = getByRole("button", { name: "decrement" });
      expect(decrementButton).toHaveClass("btn btn-info");
    });
  // rerender(<Counter {...props}></Counter>);
  // // screen.debug();
  // const number = getByTestId("number-display");
  // expect(number).toHaveTextContent(1);
});
// test('trigger some awesome feature when clicking the button', async () => {
//     const user = userEvent.setup()
//     const props = {
//               onIncrement: jest.fn(function () {
//                 this.counter.value++
//               }),
//               onDecrement: jest.fn(),
//               onDelete: jest.fn(),
//               counter: {  value: 0 },
//             };
//     render(<Counter {...props}/>)
//     fireEvent.click(screen.getByRole('button', {name: "increment"}));
//     // await user.click(screen.getByRole('button', {name: "increment"}))
//     screen.debug();
//     expect(props.onIncrement).toBeCalledTimes(1)
//     // ...assertions...
//   })
