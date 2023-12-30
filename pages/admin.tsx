import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";
import { useUser } from "@auth0/nextjs-auth0/client";
import { massageBoxRoute, useMassageBox } from "@/hooks/useMassageBox";
import Loading from "@/components/loading";
import MsgBoxTable from "@/components/msgBoxTable";
import { HeaderAdmin } from "@/components/layout";

const Admin = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const router = useRouter();
  const { user, isLoading } = useUser();
  const { fetch } = useMassageBox();

  const key = `${massageBoxRoute}?pageSize=${pageSize}&pageNumber=${pageNumber}`;

  const { data } = useSWR(key, () => fetch({ pageNumber, pageSize }));

  if (isLoading) return <Loading />;

  if (!user) {
    router.push("/api/auth/login");
    return null;
  }

  console.log(data);

  const handlePageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPageSize = parseInt(e.target.value, 10);
    setPageSize(selectedPageSize);
  };

  const handlePageChange = (page: number): void => {
    setPageNumber(page);
  };

  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderAdmin username={user.nickname ?? ""} />
      <main className="min-h-[calc(100vh-5rem)] bg-slate-100 p-8 md:p-4">
        <div className="h-full rounded-md bg-white p-8 shadow-md md:p-4">
          <div className="flex items-center justify-between text-neutral">
            <h1 className="text-xl font-semibold leading-8">Inbox Massage</h1>
            <div className="flex items-center justify-end space-x-2">
              <span className="text-sm">Display</span>
              <select
                className="select select-bordered w-full max-w-[5rem]"
                value={pageSize}
                onChange={handlePageSizeChange}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>

          {data && (
            <MsgBoxTable
              massageBoxes={data.massageBoxes}
              currentPage={pageNumber}
              totalPages={data.totalPages}
              totalRecords={data.totalRecords}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default Admin;
