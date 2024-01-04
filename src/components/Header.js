import Robot from "../assets/robot.png";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Robot} alt="Taskmate Robot" />
        <span>Taskmate2</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="dark activeTheme"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  );
};
