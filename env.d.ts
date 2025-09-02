declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_PRODUCTION_URL: string
      OPENAI_KEY: string
      ORGANIZATION_ID: string

      NEXT_PUBLIC_SUPABASE_URL: string
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string
      SUPABASE_SERVICE_ROLE_KEY: string

      AWS_ACCESS_KEY_ID: string
      AWS_ACCOUNT_ID: string
      AWS_SECRET_ACCESS_KEY: string
      NEXT_PUBLIC_AWS_REGION: string
    }
  }
}

export {}
