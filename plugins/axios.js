import { Message ,Loading} from 'element-ui';
export default function ({ store, redirect, app: { $axios } }) {
  // Request拦截器
  $axios.onRequest((config) => {
    // console.log('config:',config);
  })
  $axios.onResponse((response)=>{
    // console.log('response:',response);
    return response.data;
  })
  $axios.onError((error) => {
    // const code = parseInt(error.response && error.response.status)
    // console.log('error-code:',code);
  });
}
