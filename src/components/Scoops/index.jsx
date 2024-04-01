import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  //add fonk.
  const addToBasket = (item) => {
    setBasket([...basket, item]);
  };
  //reset fonk.
  const clearFromBasket = (name) => {
    setBasket(basket.filter((i) => i.name !== name));
  };
  useEffect(() => {
    axios.get("http://localhost:3000/scoops").then((res) => setData(res.data));
  }, []);
  //console.log(data);
  //console.log(basket);

  return (
    <div className="container my-3">
      <h1>Ice-Creams</h1>
      <h3>
        Each: <span className="text-success">$2</span>
      </h3>
      <h2>
        Total: <span className="text-success">$</span>
        <span data-testid={"total"} className="text-success">
          {basket.length * 2}
        </span>
      </h2>

      <div className="row gap-5 justify-content-between mt-4">
        {data?.map((i) => (
          <Card
            amount={basket.filter((item) => item.name === i.name).length}
            item={i}
            key={i.name}
            addToBasket={addToBasket}
            clearFromBasket={clearFromBasket}
          />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
