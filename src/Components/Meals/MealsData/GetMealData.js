import { useContext, useEffect, useRef, useState } from "react";
import { CreateContext } from "./MealContext";
import MealItem from "./meal-item";
import classes from '../Meals-Styles/meal-item.module.css'

function GetMealData(props) {

const {Loaderdata}=props;
const { Meals, MealsUpdate } = useContext(CreateContext);

useEffect(() => {
  // Update meals state when Loaderdata changes
  MealsUpdate(Loaderdata);
}, [Loaderdata, MealsUpdate]); 


  return (
    <>
      {!Meals && <h2 className={classes.loading}>Loading.......</h2>}
      {Meals && Meals.map((item) => (
                <MealItem
                  key={item.slug}
                  title={item.title}
                  slug={item.slug}
                  image={item.image}
                  summary={item.summary}
                  creator={item.creator}
                />
              ))}
  //   </>
  );
}

export default GetMealData;
