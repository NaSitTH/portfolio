import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IMassageBox } from "@/interface/massageBox";
import { formatDateTime } from "@/utils/formatDate";

type Props = {
  massageBoxes: IMassageBox[];
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  pageSize: number;
  revalidateKey?: string;
  onPageChange: (page: number) => void;
};

const MsgBoxTable = ({
  massageBoxes,
  currentPage,
  totalPages,
  totalRecords,
  pageSize,
  onPageChange,
}: Props) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-4 flex flex-col">
      <table className="min-w-full bg-white text-neutral">
        {/* Table header */}
        <thead className="bg-slate-50 md:text-sm">
          <tr className="">
            <th className="w-10 border border-slate-200 p-2">No</th>
            <th className="w-40 border border-slate-200 p-2 text-left lg:w-20">
              Date
            </th>
            <th className="w-44 border border-slate-200 p-2 text-left lg:w-24">
              Name
            </th>
            <th className="w-44 border border-slate-200 p-2 text-left lg:w-24">
              Email
            </th>
            <th className="border border-slate-200 p-2 text-left">Massage</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="text-sm">
          {massageBoxes.map((item, index) => (
            <tr key={item.id}>
              <td className="border border-slate-200 p-2 text-center">
                {(currentPage - 1) * pageSize + index + 1}
              </td>
              <td className="border border-slate-200 p-2">
                {formatDateTime(item.createdAt)}
              </td>
              <td className="border border-slate-200 p-2">{item.name}</td>
              <td className="border border-slate-200 p-2 hover:text-info">
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </td>
              <td className="border border-slate-200 p-2">{item.massage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-center">
        <button
          className="btn btn-sm mr-2 rounded-full disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <BiChevronLeft className="h-5 w-5" />
        </button>

        <button
          className="btn btn-sm ml-2 rounded-full disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <BiChevronRight className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-4 h-5 text-center text-sm">
        Page {currentPage} / {totalPages}
      </p>
      <p className="mt-1 h-5 text-center text-sm">
        Total massage {totalRecords}
      </p>
    </div>
  );
};
export default MsgBoxTable;
