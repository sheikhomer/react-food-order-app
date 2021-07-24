import React, { useEffect, useState } from "react";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const MealsContext = React.createContext({
  meals: [],
});

export const MealContextProvider = (props) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("meals")) {
      console.log("setting meals in storage");
      localStorage.setItem("meals", JSON.stringify(DUMMY_MEALS));
    }
    console.log("loading meals from storage");
    setMeals(JSON.parse(localStorage.getItem("meals")));
    return () => {
      console.log("clearing meals from storage");
      localStorage.removeItem("meals");
    };
  }, []);
  
  return (
    <MealsContext.Provider
      value={{
        meals: meals,
      }}
    >
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
