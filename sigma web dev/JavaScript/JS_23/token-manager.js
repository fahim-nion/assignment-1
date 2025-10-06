function setAuthToken(token, expirationTime) {
    if (localStorage.getItem("token") == null){
        localStorage.setItem("token",token)
        let expireAt = Date.now() + expirationTime * 1000; // store exact time of expiration
        localStorage.setItem("expire", expireAt);
    }

}


let token = "userAuthToken123";
let expirationTime = 3600;  // example expiration time in seconds (e.g., 1 hour)

setAuthToken(token, expirationTime);
