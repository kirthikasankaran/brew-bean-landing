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
              served up with a side of stunning views from the terrace. We
              partner with trusted growers to select top-grade beans that bring
              rich, balanced, and memorable flavor notes to every cup. From our
              signature espresso drinks and smooth cold brews to our selection
              of fresh local bites, we focus on quality, freshness, and
              sustainable choices. We design our doors to be open, friendly, and
              unpretentious—a spot where locals, students, remote workers, and
              casual coffee drinkers all feel right at home.
              <br />
              <br />
              <span className="zcool-xiaowei-regular text-xl">
                {" "}
                Our Core Values:
              </span>
              <br />{" "}
              <ul>
                <li>
                  <span className="active-text">Quality First:</span> We never
                  compromise on our beans, brewing methods, or ingredients.
                </li>
                <li>
                  <span className="active-text">Sustainability:</span> We use
                  100% compostable cups and partner with eco-friendly
                  growers.{" "}
                </li>
                <li>
                  <span className="active-text">Community:</span> Our shop is a
                  welcoming home for remote workers, friends, and book lovers
                  alike.
                </li>
              </ul>
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
