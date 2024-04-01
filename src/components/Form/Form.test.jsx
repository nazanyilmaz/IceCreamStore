import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Button activation based on approval of the conditions", () => {
  //1) test edilecek bilesen render edilir
  render(<Form />);

  //2) test edilecek elemani cagir selectors methotlarini kullan bilmiyorsan
  //https://testing-library.com/docs/ecosystem-testing-library-selector/ bak
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  //3)cagirilan elemandan beklenen algoritmayi sirala
  //https://github.com/testing-library/jest-dom bak
  //3-a) checkbox tiklenmemis oldugunu kontrol et
  expect(checkbox).not.toBeChecked();
  //3-b) button disable mi
  expect(button).toBeDisabled();
  //3-c) checkbox tikla "olaylari tetiklemeyi zilemek icin fireEvent kullanilir"
  fireEvent.click(checkbox);
  //3-d) button aktif mi
  expect(button).toBeEnabled();
  //3-e) checkbox tikla
  fireEvent.click(checkbox);
  //3-f) buttonun inaktif oldugunu kontrol et
  expect(button).toBeDisabled();
  //testimiz hazir npm run test yazalim terminale
});

test("Alert based on the hover status of the confirmation button", () => {
  //1)formu renderla
  render(<Form />);

  //2)gerekli elemanlari al selectorslerden bak
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const alert = screen.getByText(/your order on the way/i); //i=insensetive metnin bir kisminida yazsak olur

  //3) alinan lemanin yapmasi gereken algoritmari yazalim  matcherslardan bak
  //3-a) chechbox tikla(button aktiflestir)
  fireEvent.click(checkbox);
  //3-b) alert ekranda olmadigini kontrol et
  expect(alert).not.toBeVisible();
  //3-c) Mouse'u butona getir
  fireEvent.mouseEnter(button);
  //3-d) alert ekrana geldimi
  expect(alert).toBeVisible();
  //3-e) Mouse'u buttondan cek
  fireEvent.mouseLeave(button);
  //3-f) Alert ekrandan gittimi
  expect(alert).not.toBeVisible();

  //test hazir w bas
});
