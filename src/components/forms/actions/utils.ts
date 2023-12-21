"use server";
import { revalidatePath } from "next/cache";
import { getXataClient } from "~/xata";

export async function validateRepo(id: string) {
  await getXataClient().db.os_repositories.update(id, { draft: false });
  revalidatePath("/dashboard/waiting-for-review");
}

export async function removeRepo(id: string) {
  await getXataClient().db.os_repositories.delete(id);
  revalidatePath("/dashboard/waiting-for-review");
}
