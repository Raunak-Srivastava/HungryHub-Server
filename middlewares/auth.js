import ErrorHandler from "../utils/errorHandler.js";



export const isAuthenticated = (req , res , next) => {
    const token=req.cookies["connect.sid"];
    if(!token){
        return next(new ErrorHandler("Not Logged In" , 401));
    }
    else{
        next();
    }
}

export const authorizeAdmin = (req , res , next) => {
    if(req.user.role !== "admin"){
        return next(new ErrorHandler("Only Admin Allowed" , 405));
    }
    next();
}