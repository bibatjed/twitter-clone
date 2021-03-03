import {
  Twitter,
  Search,
  Home,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";

import "./Sidebar.css";

import SidebarOption from "../SideBarOption/SideBarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <Twitter />

        <SidebarOption Icon={Home} text={"Home"} />
        <SidebarOption Icon={Search} text={"Explore"} />
        <SidebarOption Icon={NotificationsNone} text={"Notifications"} />
        <SidebarOption Icon={MailOutline} text={"Messages"} />
        <SidebarOption Icon={BookmarkBorder} text={"Bookmarks"} />
        <SidebarOption Icon={ListAlt} text={"Lists"} />
        <SidebarOption Icon={PermIdentity} text={"Profile"} />
        <SidebarOption Icon={MoreHoriz} text={"More"} />
      </div>
    </div>
  );
}

export default Sidebar;
