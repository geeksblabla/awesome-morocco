import { getTopUser, type GithubUser } from "~/utils/get-top-user";
import { numberToShortString } from "~/utils/utils";

const NON_MOROCCAN = ["benweet"];

export const OsRankingTable = async () => {
  const users = await getTopUser();
  return (
    <div className="sm:px-none mx-auto max-w-[100%] px-4 py-8">
      <div className="overflow-y-hidden rounded-lg ">
        <div className="overflow-x-auto">
          <div className="w-full text-left text-neutral-100">
            {users
              ?.filter((user) => !NON_MOROCCAN.includes(user.login))
              .slice(0, 300)
              .map((user, index) => {
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
    <a className="" target="_blank" href={`https://github.com/${user.login}`}>
      <div className=" flex flex-row items-center border-b border-secondary-500/30">
        <div className="px-5 py-5 text-sm">
          <p className=" text-2xl font-bold text-neutral-75">#{index + 1}</p>
        </div>
        <div className="min-w-[180px] flex-grow px-5 py-5 text-sm">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-full w-full rounded-full"
                src={user.avatarUrl}
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-xl font-bold text-neutral-25 sm:text-2xl">
                {user.name}
              </p>
              <a className="" href={`https://github.com/${user.login}`}>
                @{user.login}
              </a>
            </div>
          </div>
        </div>
        <div className="px-5 py-5 text-center text-sm">
          <p className="text-xl font-bold text-neutral-25 sm:text-2xl">
            {numberToShortString(user.stars)}
          </p>
          <p className="">Stars</p>
        </div>

        <div className="px-5 py-5 text-center text-sm">
          <p className="text-2xl font-bold text-neutral-25">
            {numberToShortString(user.followers)}
          </p>
          <p className="">Followers</p>
        </div>
        <div className="px-5 py-5 text-center text-sm">
          <p className="text-2xl font-bold text-neutral-25">
            {numberToShortString(
              user.publicContributions + user.privateContributions,
            )}
          </p>
          <p className=""> contributions</p>
        </div>
      </div>
    </a>
  );
};
