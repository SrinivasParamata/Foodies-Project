import classes from "./page.module.css";
import ImagePicker from "../Meals/MealsData/Image-picker";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useActionData } from "react-router-dom";
import { useEffect } from "react";

export default function ShareMealPage() {
  const navigate = useNavigate();
  const actionData = useActionData();

  useEffect(() => {
    if (actionData === "success") {
      console.log("Success detected. Navigating...");
      navigate('/Meals');
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
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
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
    imageName: formData.get("image") ? formData.get("image").name : null,
  };

  try {
    const response = await fetch(
      "https://meals-13d8f-default-rtdb.firebaseio.com/MealsData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      }
    );

    if (response.ok) {
      return "success";
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    // Handle error scenarios as needed
  }
}
