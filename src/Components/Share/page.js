import classes from "./page.module.css";
import ImagePicker from "../Meals/MealsData/Image-picker";
import { Form } from "react-router-dom";
import { useNavigate, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ShareMealPage() {
  const navigate = useNavigate();
  const actionData = useActionData();
  const [errorMsg, setErrorMsg] = useState(undefined);

  useEffect(() => {
    if (actionData === "success") {
      console.log("Success detected. Navigating...");
      navigate('/Meals');
    } else {
      setErrorMsg(actionData);
      const timer = setTimeout(() => setErrorMsg(undefined), 3000);
      return () => clearTimeout(timer); // Clean up the timeout
    }
  }, [actionData, navigate]);

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <Form className={classes.form} method="post">
          {errorMsg && <div className={classes.ErrorMsg}>{errorMsg}</div>}
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions" name="instructions" rows="10" required></textarea>
          </p>
          <ImagePicker label="your image" name="image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </Form>
      </main>
    </>
  );
}

export async function mealActionData({ request }) {
  const formData = await request.formData();

  const newEntry = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    creator_email: formData.get("email"),
    creator: formData.get("name"),
    instructions: formData.get("instructions"),
    imageFile: formData.get("image"),
    slug: formData.get("title"),
    imageName: formData.get("title") || null, // 
  };

  const validateEntry = ({ title, summary, creator_email, creator, instructions, imageFile }) => {
    const errors = {};
  
    if (!title) errors.title = "Title is required.";
    if (!summary) errors.summary = "Summary is required.";
    if (!creator_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(creator_email)) 
      errors.creator_email = "Valid email is required.";
    if (!creator) errors.creator = "Creator name is required.";
    if (!instructions) errors.instructions = "Instructions are required.";
    if (!imageFile) errors.imageFile = "Image must be a valid file.";
  
    return errors;
  };

  const validationErrors = validateEntry(newEntry);
  return Object.keys(validationErrors).length ? Object.values(validationErrors)[0] : "success";
}
