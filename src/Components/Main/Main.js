import "./Main.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import TweetBox from "../TweetBox/TweetBox";
import CardPost from "../CardPost/CardPost";

import { useEffect, useState } from "react";

import db from "../../firebase.config";

//TODO: ADD INFINITE LOADER
function Main() {
  const [feed, setFeed] = useState([]);

  const fetchFeed = async () => {
    db.collection("feed")
      .orderBy("created_at", "desc")
      .onSnapshot((snapshot) => {
        setFeed(snapshot.docs.map((feed) => feed.data()));
      });
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div className="Main">
      <div className="Main__Header">
        <h1>Home</h1>
        <StarBorderIcon />
      </div>

      <TweetBox />

      {feed.map((feed, i) => {
        return (
          <CardPost
            key={i}
            displayName={feed.display_name}
            username={feed.username}
            description={feed.description}
          />
        );
      })}
    </div>
  );
}

export default Main;
