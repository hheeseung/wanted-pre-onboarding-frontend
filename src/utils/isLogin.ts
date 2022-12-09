export function isLogin() {
  return !!localStorage.getItem("login-token");
}
