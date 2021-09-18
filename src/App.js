import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </header>
        ;
      </div>
      <DataLoading></DataLoading>
    </div>
  );
}

// loading data component

function DataLoading() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMeals(data.categories));
  }, []);
  return (
    <div className="loadData">
      <h1>Welcome to Meal DB </h1>
      <div className="allData">
        {meals.map((meal) => (
          <Meal
            name={meal.strCategory}
            image={meal.strCategoryThumb}
            detail={meal.strCategoryDescription}
          ></Meal>
        ))}
      </div>
    </div>
  );
}

// create single component

function Meal(props) {
  const { name, image, detail } = props;
  return (
    <div className="singleMeal">
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{detail.slice(0, 200)}</p>
      <div className="btn">
        <button>Detail</button>
      </div>
    </div>
  );
}
export default App;

{
  /*  */
}
