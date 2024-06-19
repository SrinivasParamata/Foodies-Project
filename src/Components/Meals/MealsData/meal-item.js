import { NavLink } from "react-router-dom";

import classes from '../Meals-Styles/meal-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {

  return (
    <>
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <img src={image}  alt={title} 
         
        sizes="(max-width: 600px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw" />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <NavLink to={`/Meals/${slug}`}>View Details</NavLink>
        </div>
      </div>
    </article>
    </>
  );
}
