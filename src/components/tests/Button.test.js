/* eslint-disable no-undef */
import Button from "../Button";
import { render ,fireEvent} from "@testing-library/react";

import React from "react";

describe("Button test cases", () => {
  test("If button is rendered successfully", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId('button-test-id')).toBeTruthy();

  })
  test('If handleClick is triggered correctly', () => { 
    const handleClick = jest.fn();
    const {getByTestId} = render(<Button handleClick={handleClick}/>);
    fireEvent.click(getByTestId("button-test-id"));
    expect(handleClick).not.toHaveBeenCalledTimes(2);
   })
   test('If snapshot is matching',()=>{
    const handleClick = jest.fn();
    const {baseElement} = render(<Button label="button" handleClick={handleClick} color="blue"/>);
    expect(baseElement).toMatchSnapshot();
   })
});

