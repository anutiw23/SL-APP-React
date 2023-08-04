const __env__ = process.env.REACT_APP_ENV

const apiUrlConfig = {
    dev: {
        host: process.env.REACT_APP_API_URL
    }
}

export default apiUrlConfig[__env__];
