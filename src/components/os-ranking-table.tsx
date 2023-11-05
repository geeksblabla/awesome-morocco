import { getTopUser, type GithubUser } from "~/utils/get-top-user";

export const OsRankingTable = async () => {
  const users = await getTopUser();
  return (
    <div className="sm:px-none mx-auto  px-4 py-8">
      <div className="overflow-y-hidden rounded-lg ">
        <div className="overflow-x-auto">
          <div className="w-full text-left text-neutral-100">
            {users?.map((user, index) => {
              return <TableRow key={index} index={index} user={user} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ user, index }: { user: GithubUser; index: number }) => {
  return (
    <div className=" border-secondary-500/30 flex flex-row items-center border-b">
      <div className="px-5 py-5 text-sm">
        <p className=" text-neutral-75 text-2xl font-bold">#{index + 1}</p>
      </div>
      <div className="flex-grow   px-5 py-5 text-sm">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-full w-full rounded-full"
              src={user.avatarUrl}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-neutral-25 text-2xl font-bold">{user.name}</p>
            <p className="">@{user.login}</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-5 text-center text-sm">
        <p className="text-neutral-25 text-2xl font-bold">{user.followers}</p>
        <p className="">Followers</p>
      </div>
      <div className="px-5 py-5 text-center text-sm">
        <p className="text-neutral-25 text-2xl font-bold">
          {user.publicContributions}
        </p>
        <p className="">Public contribution</p>
      </div>
      <div className="px-5 py-5 text-center text-sm">
        <p className="text-neutral-25 text-2xl font-bold">
          {user.privateContributions}
        </p>
        <p className="">Private contribution</p>
      </div>
    </div>
  );
};
