import { useState } from 'react';
import s from './CopyToClipboardOnClick.module.css';
import { useMediaQuery } from 'usehooks-ts';

const CopyToClipboardOnClick = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const to_mq768 = useMediaQuery('(max-width: 767.98px)');
  const mq768 = useMediaQuery('(min-width: 768px)');
  const mq1440 = useMediaQuery('(min-width: 1440px)');

  const handleCopy = e => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const text_to_768 = `${text.slice(0, 25)}...`;
  const text_768 = `${text.slice(0, 50)}...`;
  const text_1440 = `${text.slice(0, 58)}...`;

  return (
    <div className={s.wrapper}>
      <button className={s.text} onClick={handleCopy}>
        {to_mq768 && text_to_768}
        {mq768 && text_768}
        {mq1440 && text_1440}
      </button>
      <span>{copied ? 'Copied!' : 'Click to Copy'}</span>
    </div>
  );
};

export default CopyToClipboardOnClick;
