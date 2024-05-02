export const buildQuery = (query: Record<string, unknown>): string => {
  const parsedQuery = Object.entries(query).reduce((acc, [key, value]) => {
    return acc = acc + `${key}=${JSON.stringify(value)}`
  }, '')
  return `?${parsedQuery}`
}