import css from './AppFooter.module.css';

const AppFooter = () => {
  return (
    <footer className={css.footer}>
      <small className={css.text}>
        &copy; {new Date().getFullYear()} Developed by
        <a
          href="https://github.com/AndiiSiryi"
          target="_blank"
          rel="noopener noreferrer"
          title="Github profile"
          aria-label="Link to Github profile"
          className={css.link}
        >
          <span className={css.name}>Andrii Siryi</span>
        </a>
      </small>
    </footer>
  );
};

export default AppFooter;
