import React, { useState } from "react";
import styles from "./styles.module.css";

const Search = () => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const search = "https://duckduckgo.com/?t=ffab&q=";
    const url = search + input + "&ia=web";
    window.open(url, "_self");
  };

  return (
    <form
      className={styles.searchbar}
      id="form"
      onSubmit={submitHandler}
    >
      <div className="middle">
        <input
          onChange={(e) => setInput(e.target.value)}
          className={styles.inputBar}
          placeholder="Search The Web"
        />
      </div>

      <button type="submit">submit</button>
    </form>
  );
};
export default Search;
