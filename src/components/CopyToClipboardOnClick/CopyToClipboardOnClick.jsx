import { useState } from 'react';

const CopyToClipboardOnClick = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleCopy}>
      <p>{text}</p>
      {copied ? 'Copied!' : 'Click to Copy'}
    </div>
  );
};

export default CopyToClipboardOnClick;
