export function withBase(base, path = '') {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
