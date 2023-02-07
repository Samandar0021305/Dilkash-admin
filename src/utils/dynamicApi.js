import {camelize} from './FunctionName.js';
import request from './axios';
function CRUD (param) {
          // this.param = param
       return {
         [camelize(`get${param}`)]: async  (payload) =>   {
            try {
                const {data:{data}} = await request({
                    url: '/'+param,
                    method: "GET",
                    params: payload ?? undefined
                });
                return data;
            } catch (err) {
                return err
            }
        },
          [camelize(`getbyid${param}`)]: async  (payload) =>  {
        try {
            const response = await request({
                url:`${param}/${payload.id}`,
                method: "GET",
            });
            return response;
        } catch (err) {
            return err
        }
        },
         [camelize(`post${param}`)]: async (payload) => {
        try {
            const response = await request({
                url:'/' +param+'/'+'create',
                method: "POST",
                data: {
                    ...payload
                }
            })
            return response;
        } catch (error) {
            return error;
        }
        },
         [camelize(`put${param}`)]: async ( payload) =>  {
        const {id,data } = payload;
        const response = await request({
            url: "+"/+param+'/update/' + id,
            method: "PUT",
            data: {
                ...data
            }
        })
        return response;
        
        },
       [camelize(`delete${param}`)]: async (payload) =>  {
        try {
            const respones = await request({
                url: '/'+param +'/delete/' + payload,
                method: "DELETE"
            })
            return respones
        } catch (error) {
            return error
        }
        
        }
    }
    
    }
export default (param) => new CRUD(param)