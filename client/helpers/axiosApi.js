import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://mern-services.herokuapp.com/' : 'http://localhost:5000',
    withCredentials: true
    // headers: {
    //     'content-type':'application/json'
    // },
});

export default {
    getData: (url, params) =>
    instance({
        'method':'GET',
        'url': url,
        'params': params
        // transformResponse: [function (data) {
        //     // Do whatever you want to transform the data
        //     console.log('Transforming data...')

        //     const json = JSON.parse(data)

        //     // list of nested object keys
        //     // const dates = Object.keys(json['nested object'])

        //     data = {
        //         dates
        //     }

        //     return data;
        // }],
    }),
    postData: (url, data) =>
    instance({
        'method': 'POST',
        'url': url,
        'data': data,
        'headers': { 'content-type':'application/json' // override instance defaults
        },
    })
}