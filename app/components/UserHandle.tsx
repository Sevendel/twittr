import { auth } from "@/auth";

const Handle = async () => {
  const session = await auth();
  return (
    <>
      <p className="font-bold">{session?.user?.name}</p>
    </>
  );
};

export default Handle;
