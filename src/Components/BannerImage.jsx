import styles from "./Background.module.css";

import BannerImage from "../../assets/img/background.png";

const BannerImage = () => {
  return (
    <article
      className={styles.article}
      style={{ BannerImage: `url(${background})` }}
    >
      <h1 className={styles.header}>React Is Awesome</h1>
    </article>
  );
};

export default BannerImage;
