import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);

  // it work when item clicked
  const handleChange = (isChecked, item) => {
    isChecked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/toppings")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="conatiner m-1 p-2 ">
      <h3>
        Each: <span className="text-success">$1</span>
      </h3>
      <h2>
        Total: <span className="text-success">$</span>
        <span data-testid={"total"} className="text-success">
          {basket.length * 1}
        </span>
      </h2>
      <div className="row gap-3 p-3">
        {data.map((item) => (
          <label
            htmlFor={item.name}
            className="col top-card"
            style={{ width: "150px" }}
          >
            <div className="d-flex flex-column align-items-center gap-1">
              <img height={100} src={item?.imagePath} />
              <p className="text-nowrap text-center">{item?.name}</p>
            </div>
            <input
              onChange={(e) => handleChange(e.target.checked, item)}
              className="d-none"
              id={item.name}
              type="checkbox"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
