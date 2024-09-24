/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: { get: (arg0: string) => any; }) {
    const action = formData.get('action');
    await signIn(action, { redirectTo: "/dashboard" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}