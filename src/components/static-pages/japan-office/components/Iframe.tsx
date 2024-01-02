const IFrame = () => {
  return (
    <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-12 xl:col-span-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1691038099584!6m8!1m7!1sAjfU70Yn42n2SU1eEoXruA!2m2!1d34.69108363848479!2d135.2087302830221!3f265.10244224086216!4f-6.583514370352276!5f0.4000000000000002"
          style={{ width: '100%', height: '450px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};
export default IFrame;
