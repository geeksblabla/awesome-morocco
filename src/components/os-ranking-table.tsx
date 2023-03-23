import { api, type RouterOutputs } from "~/utils/api";

type User = RouterOutputs["github"]["top_users"][number];

export const OsRankingTable = () => {
  const { data: users, isLoading } = api.github.top_users.useQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
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
              {users?.map((user, index) => {
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
        <p className="whitespace-no-wrap">{user.privateContributions}</p>
      </td>
    </tr>
  );
};
