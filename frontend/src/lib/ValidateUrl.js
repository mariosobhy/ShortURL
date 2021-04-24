import validator from 'validator';

export function validateUrl(url) {
  if (
    !validator.isURL(url, {
      protocols: ["http", "https"],
      require_protocol: true,
    })
  ) {
    return false;
  }
  return true;
}
