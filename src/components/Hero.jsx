function Hero() {
  return (
    <>
      <section id="home">
        <div className="heroContainer py-4 md:py-36 flex flex-col items-center">
          <div className="subTitle parisienne-regular text-4xl py-3">
            Welcome to Brew Bean
          </div>
          <div className="uppercase headLine zcool-xiaowei-regular text-5xl py-3">
            Your Daily Cup of Good <span className="active-text">Coffee</span>
          </div>
          <div className="poppins-regular text-base py-6 w-full md:w-[70%] xl:w-[700px] px-4 xl:px-0">
            Freshly brewed coffee, delicious food, and a cozy place to slow down
            and enjoy the moment. It's an unforgettable experience through
            global flavours, served with modern flair amidst rustic decor
          </div>
          <div className="py-3">
            <button className="primary-button mr-2">
              <a href="#menu">View Our Menu</a>
            </button>
            <button className="primary-button mr-2">
              <a href="#about">Visit Us</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
