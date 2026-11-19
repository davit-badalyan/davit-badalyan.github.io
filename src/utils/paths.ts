/**
 * Prefix an internal path with the site's base path (`base` in astro.config).
 *
 * Use this for every internal link, image, video and asset reference.
 * Never write hrefs/srcs starting with "/" directly.
 *
 *   withBase('/')                  -> '/'
 *   withBase('media/a/cover.jpg')  -> '/media/a/cover.jpg'
 *   withBase('/favicon.ico')       -> '/favicon.ico'
 *
 * (With a subpath base such as '/docs', the same calls give '/docs/', '/docs/media/…'.)
 *
 * External URLs (`https:`, `mailto:`, `//host`, ...) and fragments (`#id`)
 * are returned unchanged.
 */
export function withBase(path: string = ''): string {
  if (/^([a-z][a-z\d+\-.]*:|\/\/|#)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const cleanPath = path.replace(/^\/+/, '');

  return `${base}/${cleanPath}`;
}
