const RightInventory = () => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          How many vehicles do you have in inventory and how often are they
          updated?
        </h3>
        <p className="text-black text-sm">
          We maintain a constant inventory of over 10,000 vehicles with new
          purchases every day.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          Can you ship auto parts inside the vehicle I am buying?
        </h3>
        <p className="text-black text-sm">
          No, we cannot. We are not allowed to put anything inside the vehicle
          unless it is shipped by container.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          Can I ask you to change the vehicle’s odometer reading (mileage)?
        </h3>
        <p className="text-black text-sm">
          Regarding of any reasons, we certainly cannot change the odometer
          reading of any vehicles because it is illegal.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          What does “Under Offer” mean?
        </h3>
        <p className="text-black text-sm">
          A vehicle is “Under Offer” when a customer has made a formal offer to
          purchase the vehicle, but we have not yet confirmed the customer's
          payment. If the offer is accepted and we confirm the customer's
          payment, it becomes SOLD and is no longer available to other
          customers. If the offer is rejected or expires, the vehicle remains in
          inventory and becomes available for other customers to make an offer.
        </p>
      </div>
      <div className="mb-4">
        <h3 className="flex items-center mb-4 text-base font-medium dark:text-white shadow-lg bg-black hover:bg-[#fccf3a] hover:text-black cursor-pointer text-white py-2 px-3">
          Can I arrange a visit to see your vehicles in person?
        </h3>
        <p className="text-black text-sm">
          Unfortunately, this is not possible. For the security reasons, we do
          not allow anyone into our storage yard. However, you are very welcome
          to visit our office. Please schedule an appointment in advance if you
          plan to come to visit our office.
        </p>
      </div>
    </div>
  );
};
export default RightInventory;
