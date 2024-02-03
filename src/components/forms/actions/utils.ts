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

export async function validateBlog(id: string) {
  await getXataClient().db.blogs.update(id, { draft: false });
  revalidatePath("/dashboard/waiting-for-review");
}

export async function removeBlog(id: string) {
  await getXataClient().db.blogs.delete(id);
  revalidatePath("/dashboard/waiting-for-review");
}

export async function validatePodcast(id: string) {
  await getXataClient().db.podcasts.update(id, { draft: false });
  revalidatePath("/dashboard/waiting-for-review");
}

export async function removePodcast(id: string) {
  await getXataClient().db.podcasts.delete(id);
  revalidatePath("/dashboard/waiting-for-review");
}
