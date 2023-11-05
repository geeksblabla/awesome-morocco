export type GithubUser = {
  login: string;
  name: string;
  avatarUrl: string;
  company: string;
  location: string;
  twitterUsername: string;
  followers: number;
  privateContributions: number;
  publicContributions: number;
};

export const getTopUser = async () => {
  const data = await fetch(
    "https://raw.githubusercontent.com/gayanvoice/top-github-users/main/cache/morocco.json",
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const users: GithubUser[] = await data.json();

  return users;
};
