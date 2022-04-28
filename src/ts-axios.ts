import {AxiosRequestConfig} from "./types/AxiosRequestConfig"
import xhr from "./xhr"
function axios(config:AxiosRequestConfig){
  xhr(config)
}
export default axios;
