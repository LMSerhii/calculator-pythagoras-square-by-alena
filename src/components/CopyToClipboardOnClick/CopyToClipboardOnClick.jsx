import { useState } from 'react';
import s from './CopyToClipboardOnClick.module.css';

const CopyToClipboardOnClick = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={s.wrapper} onClick={handleCopy}>
      <p className={s.text}>{text}</p>
      {copied ? 'Copied!' : 'Click to Copy'}
    </div>
  );
};

export default CopyToClipboardOnClick;
