export default function Logout({ setAuth }: any) {
  localStorage.removeItem("token");
  setAuth(false);
}
