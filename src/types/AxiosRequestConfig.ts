export type Method = 
"get" | "post" | "delete" | "head" | "options" | "put" | "patch"
export interface AxiosRequestConfig {
  url:string,
  method?:string,
  data?:any,
  params?:any
  async?:boolean
}