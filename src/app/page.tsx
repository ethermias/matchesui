
const arr = [
  "Do the best you can. No one can do more than that. - John Wooden",
  "Study hard what interests you the most in the most undisciplinedirreverent and original manner possible. - Richard P. Feynman",
  "The only thing standing between you and outrageous success is continuousprogress.",
  "Whatever we believe about ourselves and our ability comes true for us. -Susan L. Taylor",
  "Always bear in mind that your own resolution to success is more important than any other one thing. -Abraham Lincoln",
  "A winner is a dreamer who never gives up.",
];

export default function Home() {
  const ind = Math.floor(Math.random() * arr.length);
  return <div>
    <p>
     {arr[ind]}
    </p>
  </div>;
}
