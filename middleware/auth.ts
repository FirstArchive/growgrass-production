export default defineNuxtRouteMiddleware((to, from) => {
  // const token = localStorage.getItem("token");
  // JSON.stringify(user.value?.email);
  const jwt = useCookie("strapi_jwt");
  // console.log(jwt._rawValue);
  if (!jwt._rawValue) {
    return navigateTo("/");
  }
});
