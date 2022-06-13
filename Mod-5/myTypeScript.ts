function checkUser(isUser:boolean) {
  if (isUser) {
    return "User Exist";
  }
  return "User Not Exist";
}

console.log(checkUser(true));
