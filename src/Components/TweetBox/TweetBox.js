import "./TweetBox.css";
import Avatar from "@material-ui/core/Avatar";

function TweetBox() {
  return (
    <div className="TweetBox">
      <div className="TweetBox__Main">
        <div className="TweetBox__Avatar">
          <Avatar alt="Big Chungus" src="/static/images/avatar/1.jpg" />
        </div>
        <div className="TweetBox__Input">
          <textarea placeholder="What's happening?"></textarea>
        </div>
      </div>
      <div className="TweetBox__Footer">
        <button>Tweet</button>
      </div>
    </div>
  );
}

export default TweetBox;
