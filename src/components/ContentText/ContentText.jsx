import s from './ContentText.module.css';

const ContentText = () => {
  return (
    <div className={s.textWrapper}>
      <p className={s.text}>
        {
          'I help you find balance and inner strength, guiding you on the path of personal growth through support and cooperation'
        }
      </p>
      <p className={s.text}>
        {
          'Sign up for a consultation to determine the best path to your self-development and well-being together'
        }
      </p>
    </div>
  );
};

export default ContentText;
