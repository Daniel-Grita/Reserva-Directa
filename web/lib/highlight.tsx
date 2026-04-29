import { Fragment, type ReactNode } from 'react';

export function withHighlight(text: string, phrase: string): ReactNode {
  if (!phrase) return text;
  const i = text.indexOf(phrase);
  if (i === -1) return text;
  return (
    <Fragment>
      {text.slice(0, i)}
      <span className="text-highlight">{phrase}</span>
      {text.slice(i + phrase.length)}
    </Fragment>
  );
}

export function withNoBreak(text: string, phrase: string): ReactNode {
  if (!phrase) return text;
  const i = text.indexOf(phrase);
  if (i === -1) return text;
  return (
    <Fragment>
      {text.slice(0, i)}
      <span className="whitespace-nowrap">{phrase}</span>
      {text.slice(i + phrase.length)}
    </Fragment>
  );
}

export function keepLastTwoTogether(text: string): ReactNode {
  const words = text.trim().split(/\s+/);
  if (words.length < 3) return text;
  const head = words.slice(0, -2).join(' ');
  const tail = words.slice(-2).join(' ');
  return (
    <Fragment>
      {head} <span className="whitespace-nowrap">{tail}</span>
    </Fragment>
  );
}
