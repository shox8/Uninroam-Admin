export const baseUrl = (route) => {
  if (window.origin.substring(0, 5) === "http:") {
    return `http://localhost:8080${route}`;
  } else {
    return `https://uninroam-server.vercel.app${route}`;
  }
};

export const headers = {
  headers: { token: localStorage.getItem("token") },
};
