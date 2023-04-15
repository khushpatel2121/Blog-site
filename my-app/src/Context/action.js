export const LoginStart = (userCredentials)=>({
    type:"LOGIN_START",
});

export const LoginSuccess = (user)=>({
    tpye:"LOGIN_SUCCESS",
    payload:user,
});

export const LoginFaliure =()=>({
    type:"LOGIN_FALIURE",
})

export const Logout =()=>({
    type:"LOGOUT",
})


export const UpdateStart = (userCredentials)=>({
    type:"UPDATE_START",
});

export const UpdateSuccess = (user)=>({
    tpye:"UPDATE_SUCCESS",
    payload:user,
});

export const UpdateFaliure =()=>({
    type:"UPDATE_FALIURE",
})

