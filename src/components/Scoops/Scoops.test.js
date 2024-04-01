import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

/*
 ! Seçiciler > 3 ana parçadan oluşur

 ? Method [All] BySeçici
 * method > get | find | query
 * get > başlangıçta dom'da olan elementleri almak için kullanlır | elementi bulamazsa test failler
 * query > get ile benzer çalışır | element bulunamazsa null döndürür ve test devam eder 
 * find > elementin ne zaman ekrana basılacağı belli değilse kullanılır (api isteklerinde)
 
 * not: find methodu promise döndürür
 * bu yüzden async await ile kullanılmalı
 
 * eğer methoda all eklersek seçicinin koşuluna uyan bütün elementleri alır
 * all kullanırsak her zaman dizi şeklinde cevap alırız
*/

test("A card is printed for each data coming from API", async () => {
  //userEvent setup
  const user = userEvent.setup();
  //Apiden gelen veriler icin ekrana kart bas
  //1) render scrren print
  render(<Scoops />);
  //2) Call render Items
  const images = await screen.findAllByAltText("icecream-image"); //resmin alt etiketine gore aldik
  //3 Algorithm of called items
  //3-a) is images.lenght>=1 cagirilan resimlerin sayisi 1 den buyuk veya esitmi
  expect(images.length).toBeGreaterThanOrEqual(1);
});
test("Add and Reset of types works", async () => {
  //userevent kurulumu
  const user = userEvent.setup();
  //ekleme ve reset calisiyormu
  render(<Scoops />); //1 screen print

  //2)Call to Add and Reset button
  const addButtons = await screen.findAllByRole("button", { name: /add/i });
  const delButtons = await screen.findAllByRole("button", { name: /reset/i });
  //2)call total price element
  const total = screen.getByTestId("total");

  //3-a)is total price =0
  expect(total.textContent).toBe("0");
  //3-b)click any add button
  //fireEvent.click(addButtons[0]);
  await user.click(addButtons[0]);
  //3-c)is total price =2
  expect(total.textContent).toBe("2");
  //3-d)double click any add button
  //fireEvent.doubleClick(addButtons[2]);
  await user.dblClick(addButtons[2]);
  //3-e)is total price = 6
  expect(total.textContent).toBe("6");
  //3-f)click reset for first item
  await user.click(delButtons[0]);
  //3-g)is total price =4
  expect(total.textContent).toBe("4");
  //3-h)click reset button for last item
  await user.click(delButtons[2]);
  //3-i)is price =0
  expect(total.textContent).toBe("0");
});
