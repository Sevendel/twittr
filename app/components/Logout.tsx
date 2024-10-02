import { doLogout } from "@/app/actions";

const Logout = () => {
  return (
    <form action={doLogout}>
      <button
        className="mt-5 border border-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded text-base hover:text-lg"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};
export default Logout;
