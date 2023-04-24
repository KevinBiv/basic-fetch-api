import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const response = await fetch(
        "https://sample-api-ten.vercel.app/api/tweets"
      );
      const data = await response.json();
      setTweets(data);
      console.log(data);
    };

    fetchTweets();
  }, []);

  let count = 0;

  return (
    <div className="app">
      {tweets.map((tweet) => {
        const date = new Date(tweet.date);
        const formattedDate = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDate()}`;
        return (
          <Card
            key={count++}
            image={tweet.profilePic}
            name={tweet.name}
            tweet={tweet.tweet}
            date={formattedDate}
          />
        );
      })}
    </div>
  );
}

export default App;
