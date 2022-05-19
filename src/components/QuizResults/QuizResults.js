import React from "react"
import "./QuizResults.css"

const QuizResults = () => {
  return ( 
    <section className="quiz-results-container">
      <section className="user-quiz-results">
        <div className="user-demo">
          <h2>What's important to you:</h2>
        </div>
        <p>You are % in support of legalizing abortion federally.</p>
        <p>You are % in support of better funding for public schools.</p>
        <p>You are % in support of having less firearm purchase restrictions.</p>
        <p>You are % in support of the federal government mitigating climate change.</p>
        <p>You are % in support of the federal government raising minimum wage.</p>
        <p>You are % in support of the federal government building a wall along the southern border.</p>
        <p>You are % in support of transgender inclusion in sports.</p>
        <p>You are % in support of the federal government legalizing marijuana.</p>
        <p>You are % in support of funding the police.</p>
        <p>You are % in support of campaign spending limits.</p>
      </section>
      <section className="state-wide-comparison">
        <h2>Your beliefs match 40% with your state reps</h2>
      </section>
    </section>
   );
}
 
export default QuizResults;