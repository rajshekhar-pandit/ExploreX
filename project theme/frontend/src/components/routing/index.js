const backendDomin = (process.env.REACT_APP_BACKEND_URL || "http://localhost:3333").replace(/\/$/, "")


const routingApi = {
    signUp: {
        url: `${backendDomin}/user/signUp`,
        method: "post"
    },
    editUserDetail: {
        url: `${backendDomin}/user/editUserDetail/`,
        method: "put"
    },
    login: {
        url: `${backendDomin}/user/login`,
        method: "post"
    },
    adminLogin: {
        url: `${backendDomin}/user/adminLogin`,
        method: "post"
    },
    getAllUsers: {
        url: `${backendDomin}/user/getAllUser`,
        method: "get"
    },
    countForDashboard: {
        url: `${backendDomin}/user/countForDashboard`,
        method: "get"
    },
    getSingleUser: {
        url: `${backendDomin}/user/getSingleUser/`,
        method: "get"
    },
    deleteSingleUser: {
        url: `${backendDomin}/user/deleteSingleUser/`,
        method: "delete"
    },
    adminLogin: {
        url: `${backendDomin}/user/adminLogin`,
        method: "post"
    },
    allUserDataToAdmin: {
        url: `${backendDomin}/user/allUserDataToAdmin/`,
        method: "get"
    },
    contactUs: {
        url: `${backendDomin}/contactUs/createContactUs`,
        method: "post"
    },
    singleGetContactUs: {
        url: `${backendDomin}/contactUs/singleGetContactUs/`,
        method: "get"
    },
    deleteSingleContactUs: {
        url: `${backendDomin}/contactUs/deleteSingleContactUs/`,
        method: "delete"
    },
    getAllContactUs: {
        url: `${backendDomin}/contactUs/getAllContactUs`,
        method: "get"
    },
    productCreate: {
        url: `${backendDomin}/productCreate`,
        method: "post"
    },
    getAllProducts: {
        url: `${backendDomin}/productGet`,
        method: "get"
    },
    singleProduct: {
        url: `${backendDomin}/productGetSingle/`,
        method: "get"
    },
    productUpdateGetSingle: {
        url: `${backendDomin}/productUpdateGetSingle/`,
        method: "put"
    },
    productDeleteSingle: {
        url: `${backendDomin}/productDeleteSingle/`,
        method: "delete"
    },
    addToCart: {
        url: `${backendDomin}/addToCart/`,
        method: "post"
    },
    getAllCart: {
        url: `${backendDomin}/getAllCart/`,
        method: "get"
    },
    deleteCart: {
        url: `${backendDomin}/deleteCart`,
        method: "delete"
    },
    deleteSingleCartItem: {
        url: `${backendDomin}/deleteSingleCartItem/`,
        method: "delete"
    },
    updateCart: {
        url: `${backendDomin}/updateCart/`,
        method: "put"
    },
    orderCreate: {
        url: `${backendDomin}/orderCreate`,
        method: "post"
    },
    orderGetAll: {
        url: `${backendDomin}/orderGetAll`,
        method: "get"
    },
    orderGetAllForAdmin: {
        url: `${backendDomin}/orderGetAllForAdmin`,
        method: "get"
    },
    singleOrderGet: {
        url: `${backendDomin}/singleOrderGet/`,
        method: "get"
    },
    singleOrderGetForAdmin: {
        url: `${backendDomin}/singleOrderGetForAdmin/`,
        method: "get"
    },
    orderDelete: {
        url: `${backendDomin}/orderDelete/`,
        method: "delete"
    },
}


export default routingApi;
