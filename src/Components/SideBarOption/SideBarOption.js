import "./SideBarOption.css";
function SideBarOption({ text, Icon }) {
  return (
    <div className="sideBarOption">
      <div className="sideBarOption__icon">
      <Icon/>
      </div>
      <h1>{text}</h1>
    </div>
  );
}

export default SideBarOption;
