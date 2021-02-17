export const makerApiUrl = (path: string): string => {
  return `process.env.API_URL${path}`
}
