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
  stars: number;
};

export const getTopUser = async () => {
  const data = await fetch(
    "https://raw.githubusercontent.com/geeksblabla/lmqadem/main/cache/morocco-shiny.json",
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const users: { users: GithubUser[] } = await data.json();
  const sortedUsers = users.users
    .filter((u) => u.stars !== undefined)
    .sort((a, b) => {
      return b.stars - a.stars;
    });
  return sortedUsers;
};
