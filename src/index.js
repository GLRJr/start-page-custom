//import the React and React dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';
import Glider from './assets/600px-Glider-white.svg.png';
import LinkBox from './Components/LinkBox';
import Search from './Components/Search';

// Create a react component

const App = () => {
  return (
    <div className={styles.homepageContainer}>
        <div className={styles.header}>
        </div>
        <div className={styles.centerLogo}>
        <img src={Glider} alt="Glider" />   
        </div>
        <div className={styles.whitespace}></div>
        <Search />
        <div classname={styles.linkConatainer}>
        <LinkBox />
        </div>
    </div>
  );
};

// Take the component and shoe iut on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
