import Image from 'next/image';
const CoreBusiness = () => {
  return (
<section className="relative bg-[url(/asset/images/profile/core-business-bg.png)] lg:h-[2000px] flex lg:flex-row bg-cover bg-center bg-no-repeat bg-black">

  <div className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
  <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-screen lg:py-8 lg:px-8">
    <div className="container mx-auto">
      <h1 className="text-white">Jan Japan is your premier destination for superior used Japanese cars, tires and electronics. Since our inception in 1999, we have proudly operated from the bustling city of Kobe, Japan, serving as a cornerstone in the export industry of top-quality Japanese goods.</h1>
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6 lg:pt-8">
          <div className="p-4">
            <Image className="h-auto max-w-full" src="/asset/images/profile/core-business.png" alt=".." width={375} height={245} />
          </div>
          <div className="lg:col-span-2 my-auto items-center">
            <h5 className="text-primary text-3xl">Our Core Business</h5>
            <p className="text-white text-justify">At Jan Japan, our unwavering commitment to excellence has established us as leaders in sourcing and exporting the finest vehicles and products from Japan to numerous countries worldwide. With a focus on delivering unmatched service and premium goods, we take immense pride in our extensive network and reputation built on reliability and trust.</p>
          </div>
          <div className="lg:col-span-2 my-auto items-center">
            <h5 className="text-primary text-3xl">Global Network</h5>
            <p className="text-white text-justify">Our presence spans across various countries, offering our global clientele access to an unparalleled selection of used Japanese vehicles, tires, and cutting-edge electronics.</p>
          </div>
          <div className="p-4">
            <Image className="h-auto max-w-full" src="/asset/images/profile/global-network.png" alt=".." width={375} height={245}  />
          </div>
          <div className="p-4">
            <Image className="h-auto max-w-full" src="/asset/images/profile/domestic-network.png" alt=".." width={375} height={245}  />
          </div>
          <div className="lg:col-span-2 my-auto items-center">
            <h5 className="text-primary text-3xl">Domestic Network</h5>
            <p className="text-white">Our roots within Japan are deep, boasting multiple yards strategically positioned across the nation. These yards serve as hubs for our meticulously inspected, high-quality inventory.</p>
          </div>
          <div className="lg:col-span-2 my-auto items-center">
            <h5 className="text-primary text-3xl">Procurement & Customer Service Team</h5>
            <p className="text-white text-justify">Our procurement team meticulously selects top-tier vehicles, ensuring each meets our stringent quality standards before reaching our inventory. Simultaneously, our customer service champions provide personalized support, guiding our clients through seamless transactions and building lasting relationships.</p>
          </div>
          <div className="p-4">
            <Image className="h-auto max-w-full" src="/asset/images/profile/procurement.png" alt=".." width={375} height={245}  />
          </div>
          <div className="p-4">
            <Image className="h-auto max-w-full" src="/asset/images/profile/our-mission.png" alt=".." width={375} height={245}  />
          </div>
          <div className="lg:col-span-2 my-auto items-center">
            <h5 className="text-primary text-3xl">Our Mission</h5>
            <p className="text-white text-justify">Jan Japan aims to provide a distinguished experience to every customer beyond their expectations in a very friendly, professional and efficient manner, creating a true customer value. "Meeting expectations is our business, exceeding them is our mission"</p>
          </div>
          <div className="lg:col-span-2 my-auto items-center">
            <h5 className="text-primary text-3xl">Cultivating Excellence: Our Commitment to Employee Empowerment at Jan Japan</h5>
            <p className="text-white text-justify">At Jan Japan, our employees are the heartbeat of our success. We believe in fostering a workplace culture built on respect, growth, and collaboration. We prioritize our team's well-being, providing a supportive environment that encourages innovation and personal development. Through ongoing training and opportunities for advancement, we empower our employees to excel in their roles and expand their skill sets. Beyond professional growth, we value work-life balance, understanding that a harmonious life outside work enhances productivity and creativity. Jan Japan is committed to creating a workplace that nurtures both professional aspirations and personal fulfillment. Our dedication to our employees mirrors our commitment to our clients – by investing in our team's success, we ensure a motivated workforce dedicated to delivering unparalleled service and expertise.</p>
          </div>
          <div className="p-4">
            <Image className="h-auto max-w-full" src="/asset/images/profile/cultivating.png" alt=".." width={375} height={245}  />
          </div>
          
        </div>
    </div>
  </div>
  
</section>
  );
};
export default CoreBusiness;
