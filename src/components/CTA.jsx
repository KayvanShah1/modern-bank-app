import React from "react";
import styles from "../style";

const CTA = () => {
  return (
    <section
      id="cta"
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} bg-black-gradient-2 box-shadow rounded-[20px]`}
    >
      <div>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Everything you need to accept card payments and grow your business anywhere in the world.
        </p>
      </div>
    </section>
  );
};

export default CTA;
