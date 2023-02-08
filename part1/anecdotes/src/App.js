import { useState } from "react";

const Header = ({ header }) => <h1>{header}</h1>;
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
const Anecdote = ({ quote, votes }) => {
  return (
    <>
      {quote}
      <br />
      <p style={{ margin: 0 }}>
        has {votes} {votes === 1 ? "vote" : "votes"}
      </p>
    </>
  );
};
const App = () => {
  const anecdotes = [
    {
      anecdote: "If it hurts, do it more often.",
      votes: 0,
    },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },
    {
      anecdote: "Premature optimization is the root of all evil.",
      votes: 0,
    },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
    {
      anecdote: "The only way to go fast, is to go well.",
      votes: 0,
    },
  ];

  const [selected, setSelected] = useState(0);
  const [anecdote, setAnecdote] = useState(anecdotes);

  const handleClick = (anecdotes) => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };
  const handleVote = () => {
    setAnecdote(
      anecdote.map((quote) => {
        if (quote.anecdote === anecdote[selected].anecdote) {
          return { ...quote, votes: quote.votes + 1 };
        }
        return quote;
      })
    );
  };
  const quote = anecdote[selected].anecdote;
  const votes = anecdote[selected].votes;
  const copy = [...anecdote];
  const maxVotes = copy.sort((a, b) => {
    if (a.votes > b.votes) {
      return -1;
    }
    if (a.votes < b.votes) {
      return 1;
    }
    return 0;
  })[0];
  return (
    <div>
      <Header header={"Anecdote of the day"} />
      <Anecdote quote={quote} votes={votes} />

      <Button text={"vote"} onClick={handleVote} />
      <Button text={"next anecdote"} onClick={() => handleClick(anecdotes)} />

      <Header header={"Anecdote with the most votes"} />
      <Anecdote quote={maxVotes.anecdote} votes={maxVotes.votes} />
    </div>
  );
};

export default App;
