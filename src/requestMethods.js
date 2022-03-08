import axios from "axios";

const BASE_URL = "http://localhost:5500/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTkyNTE1NGU3Nzc0YjZiZWEwYTY1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjcwMjM2MywiZXhwIjoxNjQ2OTYxNTYzfQ.Ves5pILqUACgGgtu4h9m6HRQVCprvCgCIhDNUZ9uUes";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
