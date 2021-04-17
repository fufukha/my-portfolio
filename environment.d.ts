namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GITHUB_AUTH_TOKEN: string;
    NEXT_PUBLIC_DEV_GITHUB_AUTH_TOKEN: string;
    NEXT_PUBLIC_GITHUB_USER: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    PWD: string;
  }
}
