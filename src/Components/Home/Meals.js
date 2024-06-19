import classes from "../Meals/Meals-Styles/meals-grid.module.css";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import GetMealData from "../Meals/MealsData/GetMealData";
import { useEffect } from "react";



export default function MealsPage() {
  const mealData = useLoaderData();
  const path = useLocation().pathname;
  const show = path === "/Meals" ? true : false;

  useEffect(()=>{
    if (path === "/Meals" ){
      document.title="Meals";
    }
  })




  return (
    <>
      {show && (
        <>
          <header>
            <h1 className={classes.header}>
              Delicious meals, created{" "}
              <span className={classes.highlight}>by you</span>
              <p className={classes.head}>
                Choose your favorite recipe and cook it yourself. It is easy and
                fun!
              </p>
              <p className={classes.cta}>
                <NavLink to="/Meals/share">Share your favorite recipe</NavLink>
              </p>
            </h1>
          </header>
          <main className={classes.main}>
            <div className={classes.meals}>
              <GetMealData Loaderdata={mealData} />
            </div>
          </main>
        </>
      )}
      <Outlet />
    </>
  );
}

export async function mealLoaderData() {
  let MealsDataa;
  try {
    const resp = await fetch(
      "https://meals-13d8f-default-rtdb.firebaseio.com/MealsData.json",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!resp.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await resp.json();
    MealsDataa = Object.values(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return MealsDataa;
}
