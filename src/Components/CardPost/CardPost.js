import "./CardPost.css";
import {
  ChatBubbleOutlineOutlined,
  Repeat,
  FavoriteBorder,
  PublishOutlined,
} from "@material-ui/icons";

import Avatar from "@material-ui/core/Avatar";

function CardPost({ displayName, username, description, avatar }) {
  return (
    <div className="CardPost">
      <Avatar alt="Big Chungus" src={avatar} />
      <div className="CardPost__Main">
        <div className="CardPost__MainText">
          <span className="CardPost__DisplayName">{displayName} </span>
          <span className="CardPost__Username"> @{username}</span>
          <div className="CardPost__Description">
            <p>{description}</p>
          </div>
        </div>
        <div className="CardPost__Footer">
          <ChatBubbleOutlineOutlined fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default CardPost;
