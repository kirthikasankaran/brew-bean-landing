function Contact() {
  return (
    <>
      <section id="contact">
        <div className="contactContainer block md:flex py-4 md:py-24">
          <div className="w-full md:w-[50%] pb-5 md:pb-0">
            <div className="subTitle parisienne-regular text-4xl py-3">
              Contact Us
            </div>
            <div className="poppins-regular text-base pt-5">
              <div className="py-1"> 123 Main Street, Coimbatore</div>
              <div className="py-1">+91 98765 43210</div>
              <div className="py-1">hello@brewandbean.com</div>
            </div>
          </div>
          <div className="w-full md:w-[50%] pb-5 md:pb-0">
            <div className="subTitle parisienne-regular text-4xl py-3">
              Opening Hours
            </div>
            <div className="poppins-regular text-base pt-5">
              <div className="py-1">
                <span className="active-text">Mon – Fri:</span> 8:00 AM – 9:00
                PM
              </div>
              <div className="py-1">
                <span className="active-text">Sat – Sun:</span> 9:00 AM – 10:00
                PM
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
