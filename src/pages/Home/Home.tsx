import { useState } from "react";

import Button from "@/components/Button";

import styles from "./Home.module.scss";

function Home() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className={styles.Container}>
      <h1>Welcome to FCC Seoul</h1>
      <p>count: {count}</p>
      <Button onClick={handleClick} className={styles.Button}>
        Click Me
      </Button>
    </div>
  );
}

export default Home;
