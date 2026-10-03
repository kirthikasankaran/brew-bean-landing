import aboutImg from "../assets/about.jpg";
function About() {
  return (
    <>
      <section id="about">
        <div className="xl:flex block justify-between py-4 md:py-24 px-5">
          <div className="aboutText text-left xl:w-[50%] w-[100%]">
            <div className="subTitle parisienne-regular text-4xl py-3">
              About Us
            </div>

            <div className="uppercase headLine zcool-xiaowei-regular text-3xl py-3">
              We believe coffee
              <br /> brings <span className="active-text">people together</span>
            </div>
            <div className="poppins-regular text-base py-5">
              Brew Bean is the perfect blend of entertainment and cuisine, with
              live performances, a diverse menu, and sports screenings, all
              served up with a side of stunning views from the terrace. Lorem
              ipsum dolor sit amet porta tincidunt, Duis vehicula est. tempus
              cursus, consequat varius lorem rutrum. Ut convallis , id
              consectetur orci faucibus eu. Proin aliquet maximus elit ut
              volutpat. Mauris eget nisl nisl, pharetra ut risus vel, blandit
              sodales libero. Quisque ultricies, erat id semper fringilla, purus
              ante dictum metus, ac scelerisque justo metus et eros.
              <br />
              <br />
              Quisque ultricies, erat id semper fringilla, purus ante dictum
              metus. Lorem ipsum dolor sit amet porta tincidunt, Duis vehicula
              est. tempus cursus, consequat varius lorem rutrum. Ut convallis ,
              id consectetur orci faucibus eu. Proin aliquet maximus elit ut
              volutpat. Mauris eget nisl nisl, pharetra ut risus vel, blandit
              sodales libero. Quisque ultricies, erat id semper fringilla, purus
              ante dictum metus, ac scelerisque justo metus et eros.
            </div>
            <div className="py-3">
              <button className="primary-button mr-2">
                <a href="#contact">View More</a>
              </button>
            </div>
          </div>
          <div className="aboutImg xl:w-[50%] w-[100%] flex xl:block justify-center align-center">
            <img
              src={aboutImg}
              className="rounded-lg xl:w-[100%] w-auto h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
