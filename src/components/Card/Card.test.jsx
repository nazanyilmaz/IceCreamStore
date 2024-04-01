import { render, screen } from "@testing-library/react";
import Card from ".";
import userEvent from "@testing-library/user-event";

const item = {
  // prop olarak gondermek icin tanimladik
  name: "Chocolate",
  imagePath: "/images/chocolate.png",
};

test("Test of card photo, title and amount", () => {
  //Test edilen bilesenin aldigi prop varsa test yaparken benzerini gondermek gerek yoksa testi gecmez
  render(
    <Card
      item={item}
      amount={5}
      addToBasket={() => {}}
      clearFromBasket={() => {}}
    />
  );
  const amount = screen.getByTestId("amount"); // call amount span
  expect(amount.textContent).toBe("5"); // is amount=5
  screen.getByText("Chocolate"); // is chocolate on the screen
  const image = screen.getAllByAltText("icecream-image"); // call image
  expect(image).toHaveAttribute[("src", item.imagePath)]; //is src = "/images/chocolate.png"
});

test("is correct function and parameters work when click button", async () => {
  const user = userEvent.setup();
  // prop olarak gonderilen orjinial fonksiyonlar test etmek icin yerine mock tanimlamak gerekir
  const addMockFn = jest.fn();
  const clearMockFn = jest.fn();

  render(
    <Card
      item={item}
      amount={3}
      addToBasket={addMockFn}
      clearFromBasket={clearMockFn}
    />
  );

  //call buttons
  const addBtn = screen.getByRole("button", { name: /add/i });
  const clearBtn = screen.getByRole("button", { name: /reset/i });

  await user.click(addBtn); //click add button
  expect(addMockFn).toHaveBeenCalledWith(item); //is addToBasket correct work
  await user.click(clearBtn); //click reset button
  expect(clearMockFn).toHaveBeenCalledWith(item.name); //is clearToBasket correct work
});
