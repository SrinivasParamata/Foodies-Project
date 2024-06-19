
import styles from "../Meals-Styles/MealsPrev.module.css";
import { CreateContext } from "./MealContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MealsPrev() {
  const { Meals } = useContext(CreateContext);
  const path = useLocation().pathname;
  const match = path.replace("/Meals/", "");
  const [mealData, setMealData] = useState(null);
  console.log(Meals,"MP");

  useEffect(() => {
    if (match && Meals) {
      const meal = Meals.find((item) => item.slug === match);
      if (meal) {
        setMealData(meal);
      }
    }
  }, [match, Meals]);

  if (!mealData) {
    return <div>Loading...</div>; // Add loading indicator while data is being fetched
  }

  const { title, image, summary, creator_email: email, creator: name, instructions } = mealData;
  const Instructions = instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <img src={image} fill alt={title} />
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${email}`}>{name}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p className={styles.instructions} dangerouslySetInnerHTML={{ __html: Instructions }}></p>
      </main>
    </>
  );
}
