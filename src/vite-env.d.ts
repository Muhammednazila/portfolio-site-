/// <reference types="vite/client" />

// @fontsource packages ship CSS with no type declarations; declare the
// side-effect import so TypeScript (with verbatimModuleSyntax) accepts it.
declare module "@fontsource-variable/inter";

// Typed environment variables. Vite exposes VITE_*-prefixed vars to the client
// at build time; declaring them here gives us autocomplete + type-checking.
interface ImportMetaEnv {
  /**
   * Web3Forms access key — bound server-side to the destination email address.
   * Public-safe by design, but kept in env so it's configurable per environment
   * and stays out of source control. See .env.example for setup.
   */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
