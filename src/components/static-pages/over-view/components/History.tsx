import Image from 'next/image';
const History = () => {
  return (
    <section className="bg-[#3B3B3B]">
      <h3 className="bg-primary text-[#000000] font-bold text-xl py-2 pl-5">History</h3>
      <Image className="m-auto h-auto max-w-full py-8 sm:p-4" src="/asset/images/profile/history.png" alt=".." width={1189} height={1175}/>
    </section>
  );
};
export default History;
