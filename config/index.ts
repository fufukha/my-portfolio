const isDev = process.env.NODE_ENV !== 'production'
export const token = isDev
  ? process.env.NEXT_PUBLIC_DEV_GITHUB_AUTH_TOKEN
  : process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN

export const viewer = isDev
  ? process.env.NEXT_PUBLIC_DEV_GITHUB_VIEWER
  : process.env.NEXT_PUBLIC_GITHUB_VIEWER
