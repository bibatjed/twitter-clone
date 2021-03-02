import "./SideBarOption.css";
function SideBarOption({ text, Icon }) {
  return (
    <div className="sideBarOption">
      <Icon/>
      <h1>{text}</h1>
    </div>
  );
}

export default SideBarOption;
