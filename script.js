const QUOTES = [
{ quote: "Be yourself everyone else is already taken.",
  author: "Oscar Wilde" },
{ quote: "Regret is fo suckas, fo suckas, fo suckas. Regret is fo suckas, b*tch",
  author: "Ludacris" },
{ quote: "It takes courage to grow up and turn out to be who you really are.",
  author: "E.E. Cummings" },
{ quote: "A day without sunshine is like, you know, night.",
  author: "Steve Martin" },
{ quote: "I think anything is possible if you have the mindset and the will and desire to do it and put the time in.",
  author: "Roger Clemens" },
{ quote: "We accept the love we think we deserve.",
  author: "Stephen Chbosky" },
{ quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  author: "Albert Einstein" },
{ quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  author: "Bernard M. Baruch" },
{ quote: "You only live once, but if you do it right, once is enough..",
  author: "Mae West" }];


const GetRandomQuote = () => {
  const [quote, setQuote] = React.useState(QUOTES[0].quote);
  const [author, setAuthor] = React.useState(QUOTES[0].author);
  const [currentIdx, setCurrentIdx] = React.useState("");

  const nextQuote = () => {
    const randomIdx = Math.floor(Math.random() * QUOTES.length);
    setCurrentIdx(randomIdx);
    if (currentIdx !== randomIdx) {
      setQuote(QUOTES[randomIdx].quote);
      setAuthor(QUOTES[randomIdx].author);
    };
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "container text-center", id: "quote-box" }, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("h1", { id: "text" }, "\"", quote, "\"")), /*#__PURE__*/


    React.createElement("h2", { id: "author" }, "- ", author, "."), /*#__PURE__*/
    React.createElement("div", { className: "row btn btn-group btn-group-justified" }, /*#__PURE__*/
    React.createElement("div", { className: "col-xs-6" }, /*#__PURE__*/
    React.createElement("a", { href: "https://twitter.com/intent/tweet", target: "_blank", id: "tweet-quote" }, /*#__PURE__*/
    React.createElement("button", { id: "icon", className: "btn" }, "TWEET THIS QUOTE\u2002", /*#__PURE__*/
    React.createElement("i", { className: "fa fa-twitter" })))), /*#__PURE__*/




    React.createElement("div", { className: "col-xs-6" }, /*#__PURE__*/
    React.createElement("button", { id: "new-quote", className: "btn", onClick: nextQuote }, "NEW QUOTE"))), /*#__PURE__*/




    React.createElement("footer", { id: "footer", class: "text-center" }, "\xA9 2021 Van B-C.")));


};

ReactDOM.render( /*#__PURE__*/React.createElement(GetRandomQuote, null), document.getElementById("App"));