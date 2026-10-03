function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Espresso",
      price: "₹120",
      description: "Rich and bold classic espresso.",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: "₹160",
      description: "Smooth espresso with creamy foam.",
    },
    {
      id: 3,
      name: "Cold Coffee",
      price: "₹180",
      description: "Refreshing chilled coffee.",
    },
    {
      id: 4,
      name: "Avocado Toast",
      price: "₹220",
      description: "Fresh avocado on toasted sourdough.",
    },
    {
      id: 5,
      name: "Club Sandwich",
      price: "₹240",
      description: "Classic layered café sandwich.",
    },
    {
      id: 6,
      name: "Chocolate Cake",
      price: "₹150",
      description: "Rich chocolate cake.",
    },
  ];
  return (
    <>
      <section id="menu">
        <div className="menuContainer flex flex-col justify-between items-center py-4 md:py-24">
          <div className="subTitle parisienne-regular text-4xl py-3">
            Brew Bean Menu - Signature Infusions
          </div>
          <div className="uppercase headLine zcool-xiaowei-regular text-3xl py-3  px-4 xl:px-0">
            A <span className="active-text">curated collection</span> of fine
            sips and slow mornings.
            <br /> Honest ingredients,{" "}
            <span className="active-text">expertly crafted.</span>
          </div>
          <div className="menuItems flex flex-wrap justify-center items-center pt-10 w-full">
            {menuItems.map((menu) => (
              <div
                key={menu.id}
                className="menuItem text-left mb-5 mr-5 flex flex-col justify-center px-5"
              >
                <div className="menuName text-xl">
                  {menu.name} <div className="float-right">{menu.price}</div>
                </div>
                <div className="menuDescription active-text pt-2 text-md">
                  {menu.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Menu;
