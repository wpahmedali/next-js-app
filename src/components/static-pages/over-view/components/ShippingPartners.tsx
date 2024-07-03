import Image from 'next/image';
const ShippingPartners = () => {
  return (
    <section className="bg-[#3B3B3B]">
      <h3 className="bg-primary text-[#000000] font-bold text-xl py-2 pl-5">Shipping Partners</h3>
      <Image className="m-auto h-auto max-w-full py-8 sm:p-4" src="/asset/images/profile/shipping-partners.png" alt=".." width={1920} height={409} />
    </section>
  );
};
export default ShippingPartners;
