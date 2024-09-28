import FacebookForm from "../components/FacebookForm";

export default function facebookPost() {
  return (
    <>
      <h1 className="text-xl md:text-2xl">Welcome, User</h1>
      <div className="flex justify-center">
        <FacebookForm />
      </div>
    </>
  );
}
