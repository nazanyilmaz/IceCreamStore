import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toppings from ".";

test(" is add or remove effect the total", async () => {
  const user = userEvent.setup();
  render(<Toppings />);
  const total = screen.getByTestId("total"); // call add span
  const toppings = await screen.findAllByRole("checkbox"); //call all sauces checkbox
  expect(total.textContent).toBe("0"); //is total =0
  toppings.forEach((i) => expect(i).not.toBeChecked()); //is all chekbox notchecked
  await user.click(toppings[0]); // click any sauces
  expect(total.textContent).toBe("1"); //is total =1
  await user.click(toppings[4]); // again click more any sauces
  expect(total.textContent).toBe("2"); // is total =2
  await user.click(toppings[4]); // againclick clecked ones
  expect(total.textContent).toBe("1"); // istotal =1
  await user.click(toppings[0]); // remove add lastone
  expect(total.textContent).toBe("0"); //is total=0
});
