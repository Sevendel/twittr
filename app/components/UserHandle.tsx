/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { auth } from "@/auth";

const Handle = async () => {
  const session = await auth();
  return (
    <div className="flex items-center gap-2">
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <p className="font-bold">{session?.user?.name}'s Schedule</p>
    </div>
  );
};

export default Handle;
