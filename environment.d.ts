namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GITHUB_AUTH_TOKEN: string;
    NEXT_PUBLIC_DEV_GITHUB_AUTH_TOKEN: string;
    NEXT_PUBLIC_GITHUB_VIEWER: string;
    NEXT_PUBLIC_DEV_GITHUB_VIEWER: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    PWD: string;
  }
}
