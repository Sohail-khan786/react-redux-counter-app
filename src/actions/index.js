export const increment = () => {
    return {
        type : "INCREMENT"
    }
}


export const decrement = () => {
    return {
        type : "DECREMENT"
    }
}

export const toggleLoginStatus =  ( currentStatus ) => {
    
    if(currentStatus){
        return {
            type : 'SIGN_OUT'
        }
    }
    else{

        return {
            type : 'SIGN_IN'
        }
    }
}