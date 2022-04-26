export const customFetch = async (url: string, init?: RequestInit) => {
  const res = url.startsWith('/')
    ? await fetch(
        `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_BASE_URL}${url}`,
        init
      )
    : await fetch(url, init);
  return res.json();
};
