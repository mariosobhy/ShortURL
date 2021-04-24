export const BASE_URL = () => {
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:80";
    } else {
      return "http://localhost:80";
    }
};