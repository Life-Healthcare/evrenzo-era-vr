export function asset(url: string): string {
  return url.replace(/^\//, process.env.PUBLIC_PATH);
}
