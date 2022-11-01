/// <reference types="vite/client" />

// 只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_BASE_ROUTE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
