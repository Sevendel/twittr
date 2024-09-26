/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { signIn, signOut } from "@/auth";

export async function doTwitterLogin(formData: { get: (arg0: string) => any; }) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: "/tweet" });
}

export async function doFacebookLogin(formData: { get: (arg0: string) => any; }) {
  const action = formData.get('action');
  await signIn(action, { redirectTo: "/post" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
