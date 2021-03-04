import "./TweetBox.css";
import { useState, useCallback } from "react";
import Avatar from "@material-ui/core/Avatar";
import db from "../../firebase.config";

function TweetBox() {
  const [text, setText] = useState();

  const onChangeHandler = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    db.collection("feed").add({
      //TODO: CHANGE THIS TO CURRENT USER LOGGED IN IF AUTH IS ALREADY IMPLEMENTED
      username: "jedeezy",
      display_name: "Jed",
      description: text,
      //find a way in firebase if they support auto timestap
      //timestap shouldn't be passed by frontend.
      //or just create an api xD
      created_at: new Date()
    });

    setText("");
  });

  return (
    <div className="TweetBox">
      <div className="TweetBox__Main">
        <div className="TweetBox__Avatar">
          <Avatar alt="Big Chungus" src="/static/images/avatar/1.jpg" />
        </div>
        <div className="TweetBox__Input">
          <textarea
            onChange={onChangeHandler}
            value={text}
            placeholder="What's happening?"
          ></textarea>
        </div>
      </div>
      <div className="TweetBox__Footer">
        <button onClick={onSubmit}>Tweet</button>
      </div>
    </div>
  );
}

export default TweetBox;
