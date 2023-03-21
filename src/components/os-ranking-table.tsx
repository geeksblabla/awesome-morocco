type User = {
  login: string;
  name: string;
  avatarUrl: string;
  location: string;
  company: string;
  twitterUsername: string;
  followers: number;
  privateContributions: number;
  publicContributions: number;
};
export const OsRankingTable = () => {
  return (
    <div className="sm:px-none mx-auto  w-full px-4 py-8">
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3">#</th>
                <th className="px-5 py-3">Full Name</th>
                <th className="px-5 py-3">User Name</th>
                <th className="px-5 py-3">Twitter Handler</th>
                <th className="px-5 py-3">Followers</th>
                <th className="px-5 py-3">Public contributions</th>
                <th className="px-5 py-3">Private contributions</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {data.map((user, index) => {
                return <TableRow key={index} index={index} user={user} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ user, index }: { user: User; index: number }) => {
  return (
    <tr>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{index}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-full w-full rounded-full"
              src={user.avatarUrl}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="whitespace-no-wrap">{user.name}</p>
          </div>
        </div>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{user.login}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{user.twitterUsername}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{user.followers}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{user.publicContributions}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap">{user.publicContributions}</p>
      </td>
    </tr>
  );
};

const data: User[] = [
  {
    login: "Anteste",
    name: "Iliass Alami Qammouri",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/47607954?s=72&u=d1b369f2dd92e748018f075bb4684cfb3c8197e9&v=4",
    location: "Morocco",
    company: "undefined value",
    twitterUsername: "AntesteOfficiel",
    followers: 1098,
    privateContributions: 0,
    publicContributions: 8,
  },
  {
    login: "yelouafi",
    name: "Yassine Elouafi",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/5453835?s=72&u=2c94e59e321a57a0202cff5e9605611ced33db4f&v=4",
    location: "Morocco",
    company: "undefined value",
    twitterUsername: "undefined value",
    followers: 960,
    privateContributions: 0,
    publicContributions: 11,
  },
  {
    login: "zakarialaoui10",
    name: "ZAKARIA ELALAOUI",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/63521765?s=72&u=462cb75b34437bba775f9847e1beae52d0d9102a&v=4",
    location: "Morocco",
    company: "undefined value",
    twitterUsername: "zakarialaoui10",
    followers: 890,
    privateContributions: 19,
    publicContributions: 944,
  },
  {
    login: "ZeroMemoryEx",
    name: "V2",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/60795188?s=72&u=9e9430dcb6d7a9e8472f97699748167ebfd4f18f&v=4",
    location: "Morocco",
    company: "undefined value",
    twitterUsername: "ZwV2Ex",
    followers: 829,
    privateContributions: 204,
    publicContributions: 207,
  },
  {
    login: "benweet",
    name: "Benoit Schweblin",
    avatarUrl: "https://avatars.githubusercontent.com/u/1005257?s=72&v=4",
    location: "Marrakech, Morocco",
    company: "undefined value",
    twitterUsername: "undefined value",
    followers: 717,
    privateContributions: 0,
    publicContributions: 1,
  },
  {
    login: "yjose",
    name: "Youssouf EL AZIZI",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/11137944?s=72&u=352c3de024a444ff4db85c5344ef0e8330a15cd4&v=4",
    location: "Casablanca, Morocco",
    company: "@obytes ",
    twitterUsername: "undefined value",
    followers: 632,
    privateContributions: 736,
    publicContributions: 310,
  },
  {
    login: "stackwalk64",
    name: "SpinLock",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/80726029?s=72&u=36e1458453c8fd9217a02c79fbd36a1c0e5a4acf&v=4",
    location: "Morocco",
    company: "undefined value",
    twitterUsername: "undefined value",
    followers: 556,
    privateContributions: 0,
    publicContributions: 2,
  },
  {
    login: "yezz123",
    name: "Yasser Tahiri",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/52716203?s=72&u=636b4f79645176df4527dd45c12d5dbb5a4193cf&v=4",
    location: "Morocco",
    company: "@yezz123",
    twitterUsername: "Thyasser1",
    followers: 497,
    privateContributions: 1561,
    publicContributions: 1932,
  },
  {
    login: "acharkizakaria",
    name: "Zakaria Acharki",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/6684599?s=72&u=7d0e64f0e654689c4c6d209ea1821ac8ea933235&v=4",
    location: "Tangier, Morocco",
    company: "undefined value",
    twitterUsername: "undefined value",
    followers: 464,
    privateContributions: 69,
    publicContributions: 0,
  },
  {
    login: "INNOVASE",
    name: "Abdelkabir Jabbar",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/76163150?s=72&u=c85c662470748e35d85ec32093cd53da318c5229&v=4",
    location: "Rabat",
    company: "insea",
    twitterUsername: "undefined value",
    followers: 401,
    privateContributions: 4,
    publicContributions: 74,
  },
  {
    login: "medyo",
    name: "Mehdi Sakout",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/2389584?s=72&u=9ff8c1719ddad81342b08972cafa519c74e07a4c&v=4",
    location: "Casablanca, Morocco",
    company: "undefined value",
    twitterUsername: "medyo80",
    followers: 390,
    privateContributions: 2710,
    publicContributions: 168,
  },
  {
    login: "pborreli",
    name: "Pascal Borreli",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/77759?s=72&u=7eb4a4e909692137a2b1e86ba128db40aabd4003&v=4",
    location: "Oujda, Morocco",
    company: "Les-Tilleuls.coop",
    twitterUsername: "pborreli",
    followers: 376,
    privateContributions: 299,
    publicContributions: 6,
  },
  {
    login: "seuros",
    name: "Abdelkader Boudih",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/2394703?s=72&u=db3bfddb34846d7b948b10aae2bc4b6398edad45&v=4",
    location: "Tangier, Morocco",
    company: "Open Source Contributor / Time Traveller",
    twitterUsername: "seuross",
    followers: 375,
    privateContributions: 4752,
    publicContributions: 182,
  },
  {
    login: "freemh",
    name: "Arbaoui Mehdi",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/2392987?s=72&u=fae4c5f6f6c7aa03c3bbf6483a9224f6ad1f67c2&v=4",
    location: "Morocco",
    company: "undefined value",
    twitterUsername: "undefined value",
    followers: 357,
    privateContributions: 8,
    publicContributions: 1,
  },
  {
    login: "hamzaalalach",
    name: "Hamza Alalach",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/13508346?s=72&u=77ea394778e2a790823b9f3b6785838139f24f01&v=4",
    location: "Rabat, Morocco",
    company: "undefined value",
    twitterUsername: "undefined value",
    followers: 312,
    privateContributions: 423,
    publicContributions: 40,
  },
  {
    login: "Mohammedcha",
    name: "Mohammed cha",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/40530012?s=72&u=98af635326e7a626440f07e43f7a08b0db3c65b2&v=4",
    location: "Morocco - Casa Lbayda <3",
    company: "Re-skinning Grp",
    twitterUsername: "undefined value",
    followers: 300,
    privateContributions: 0,
    publicContributions: 19,
  },
  {
    login: "gouzal",
    name: "Larbi Gouzal",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/15928054?s=72&u=dbdaeaba6ea605af00d85bd0758194624b3390e9&v=4",
    location: "Casablanca, Morocco",
    company: "undefined value",
    twitterUsername: "undefined value",
    followers: 285,
    privateContributions: 33,
    publicContributions: 62,
  },
  {
    login: "alma4rebi",
    name: "AlmaGrebi",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/9637475?s=72&u=c7775883be0113fd549d5ab0c4b2c5a16360995a&v=4",
    location: "Rabat , Morocco",
    company: "@alma4rebi",
    twitterUsername: "undefined value",
    followers: 277,
    privateContributions: 0,
    publicContributions: 1,
  },
  {
    login: "SilentGhostX",
    name: "Silent Ghost",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12610902?s=72&u=5669ee773ebc46c24bbe73b6d16f4bb75a80c51e&v=4",
    location: "Rabat, Morocco",
    company: "undefined value",
    twitterUsername: "undefined value",
    followers: 248,
    privateContributions: 0,
    publicContributions: 0,
  },
  {
    login: "MrMugiwara",
    name: "Soufiane Boussali",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/7062695?s=72&u=8d42d456cb127051739074b4041ceb1fc3df0a29&v=4",
    location: "Casablanca, Kingdom Of Morroco",
    company: "undefined value",
    twitterUsername: "undefined value",
    followers: 242,
    privateContributions: 0,
    publicContributions: 2,
  },
  {
    login: "mouadziani",
    name: "Mouad Ziani",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/29683939?s=72&u=bf97fc159fdcebdc3feedc3803d85e6a06a59437&v=4",
    location: "Morocco",
    company: "@millionscard",
    twitterUsername: "_mouad_ziani",
    followers: 232,
    privateContributions: 1146,
    publicContributions: 248,
  },
];
