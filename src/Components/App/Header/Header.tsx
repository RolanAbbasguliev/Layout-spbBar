import Logo from "../../../assets/Img/Logo.png";

const Header = () => {
  return (
    <header className="pt-[30px]">
      <div
        className="
          wrapper w-[1300px] h-[51px]
          flex justify-between items-center
          text-white
          mx-auto my-0`
        "
      >
        <img src={Logo} width="157" height="40" alt="Logo" className="logo" />
        <nav className="menu">
          <ul
            className="
            menu_bar flex
            gap-[30px]
          "
          >
            <li className="menu_item">Главная</li>
            <li className="menu_item">Меню</li>
            <li className="menu_item">Афиша</li>
            <li className="menu_item">Сотрудничевство</li>
            <li className="menu_item">Галерея</li>
            <li className="menu_item">Новости</li>
          </ul>
        </nav>
        <button
          className="
          booking_btn flex justify-end
          "
        >
          Бронирование
        </button>
      </div>
    </header>
  );
};

export default Header;
