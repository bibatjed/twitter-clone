import "./SideBarOption.css";

function SideBarOption({ text, Icon }) {
  return (
    <div className="SideBarOption">
      <div className="SideBarOption__Icon">
        <Icon />
      </div>
      <h1>{text}</h1>
    </div>
  );
}

export default SideBarOption;
