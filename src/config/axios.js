import axios from "axios";

//Core
export const CoreInstance = axios.create({
    //prueba
    baseURL: "https://localhost:7188/api/",
    // baseURL: "http://192.168.70.194:9090/api/",
    // baseURL: "http://192.168.10.18:9090/api/",
    //prod
    // baseURL: "https://192.168.2.195:443/api/",
    
});

//Documentary
export const DocumentInstance = axios.create({
    //prueba
    baseURL: "https://localhost:7012/api/",
    // baseURL: "http://192.168.70.194:9191/api/",
    // baseURL: "http://192.168.10.18:9191/api/",
    //prod
    // baseURL: "https://192.168.2.195:444/api/",
});

//Dev
export const CoreServer = 'https://localhost:7188/api/';

//Production
// export const CoreServer = 'https://192.168.2.195:443/api/';
// export const CoreServer = 'http://192.168.70.194:9090/api/';
// export const CoreServer = 'http://192.168.10.18:9090/api/';

//Dev
export const DocumentServer = 'https://localhost:7012/api/';

//Production
// export const DocumentServer = 'https://192.168.2.195:444/api/';
// export const DocumentServer = 'http://192.168.70.194:9191/api/';
// export const DocumentServer = 'http://192.168.10.18:9191/api/';



//Dev
export const SecurityServer  = 'http://localhost:4545/api/';

//Production
// export const SecurityServer  = 'http://192.168.2.195:9192/api/';
// export const SecurityServer = 'http://192.168.70.201:9192/api/'
// export const SecurityServer = 'https://192.168.2.195:446/api/'