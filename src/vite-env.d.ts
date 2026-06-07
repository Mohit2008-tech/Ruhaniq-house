/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_ANON_KEY: string;
    readonly VITE_WA_NUMBER: string;
    readonly VITE_IG_URL: string;
    readonly VITE_GOOGLE_SHEET_URL: string;
    readonly VITE_WEB3FORMS_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
