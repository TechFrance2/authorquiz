import React from "react";
import Quiz from './Quiz.js';
import "./AuthorQuiz.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
}
function Book({ title }) {
  return (
    <div className="answer">
      <h1>{title}</h1>
    </div>
  );
}

function Turn({ author, books }) {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map((title) => (
          <Book title={title} key={title} />

        ))}
      </div>
    </div>
  );
}

function Continue() {
  return <div />;
}

function Footer() {
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          Placeholder -
          <a href="quiz_data.JSON">
          </a>{"internal file to mock fecth requsts"}
          This can be the continuation of the quiz.
        </p>
      </div>
    </div>
  );
}

function AuthorQuiz({ turnData }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Quiz>

      </Quiz>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
