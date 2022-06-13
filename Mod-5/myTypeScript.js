function checkUser(isUser) {
    if (isUser) {
        return "User Exist";
    }
    return "User Not Exist";
}
console.log(checkUser(true));
