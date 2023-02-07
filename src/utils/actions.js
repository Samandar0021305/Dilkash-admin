import {camelize} from './FunctionName.js'
import dynamicApi from './dynamicApi.js'
        export const actions = (param) => {
          // console.log(dynamicApi(param)[`get${param}`]);
          return {
            get: dynamicApi(param)[`get${param}`],
            getById: dynamicApi(param)[`getbyid${param}`],
            post: dynamicApi(param)[`post${param}`],
            put: dynamicApi(param)[`put${param}`],
            remove: dynamicApi(param)[`delete${param}`],
          }
        }