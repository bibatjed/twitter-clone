import "./Main.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TweetBox from "../TweetBox/TweetBox";
import CardPost from "../CardPost/CardPost";

function Main() {
  return (
    <div className="Main">
      <div className="Main__Header">
        <h1>Home</h1>
        <StarBorderIcon />
      </div>

      <TweetBox />

      <CardPost
        description="Hello Testing"
        username="jedeeezy"
        displayName="Jed"
      />

      <CardPost
        description="Noob Dev BTW"
        username="jedeeezy"
        displayName="Jed"
      />

      <CardPost
        description="Working REACT JS"
        username="jedeeezy"
        displayName="Jed"
      />
    </div>
  );
}

export default Main;
