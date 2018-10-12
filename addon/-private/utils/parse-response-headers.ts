import { Headers } from '../types';

export const CRLF = typeof FastBoot === 'undefined' ? '\u000d\u000a' : '\n';

export default function parseResponseHeaders(headersString: string): Headers {
  const headers = {};

  if (!headersString) {
    return headers;
  }

  return headersString.split(CRLF).reduce((hash: Headers, header) => {
    let [field, ...value] = header.split(':');

    field = field.trim();

    const valueString = value.join(':').trim();

    if (valueString) {
      hash[field] = valueString;
    }

    return hash;
  }, headers);
}
