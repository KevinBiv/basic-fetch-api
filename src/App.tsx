import * as React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

interface Tweet {
  profilePic: string,
  name: string,
  tweet: string,
  date: string
}

function App() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

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
      {tweets.map((tweet: Tweet) => {
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
