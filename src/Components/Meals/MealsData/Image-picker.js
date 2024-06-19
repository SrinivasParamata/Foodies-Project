
import { useRef, useState } from "react";
import styles from "../Meals-Styles/image-picker.module.css";

function ImagePicker({ label, name }) {
  const [PickedImage, setPickedImage] = useState();
  const ImageInput = useRef();

  function HandleClick() {
    ImageInput.current.click();
  }

  function handlePickedImage(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const filereader = new FileReader();
    filereader.onload = () => {
      setPickedImage(filereader.result);
    };

    filereader.readAsDataURL(file);
  }

  return (
    <>
      <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.controls}>
          <div className={styles.preview}>
            {!PickedImage && <p>image not picked yet</p>}
            {PickedImage && (
              <img src={PickedImage} alt="The Image selected by User"  />
            )}
          </div>
          <input
            ref={ImageInput}
            required
            className={styles.input}
            type="file"
            id={name}
            onChange={handlePickedImage}
            accept="image/png ,image/jpeg"
            name={name}
          />
          <button className={styles.button} type="button" onClick={HandleClick}>
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}

export default ImagePicker;
