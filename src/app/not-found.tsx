
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col pt-[240px] pb-[140px]">
      <h1 className="text-[110px] font-medium pb-10">404 Not Found</h1>
      <p className="pb-20">Your visited page not found. You may go home page.</p>
      <Link href={'/'} className="!bg-main !text-white px-11 py-4 rounded">Back to home page</Link>
    </div>
  );
}
