import React, { useState } from "react";
import data from "./data";

const Person = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          {people.map((person) => {
            return (
              <article className="person">
                <img src={person.image} alt="person" />
                <div>
                  <h4>{person.name} </h4>
                  <p>{person.age} years</p>
                </div>
              </article>
            );
          })}
          <button class="btn" onClick={() => setPeople([])}>
            Clear All
          </button>
        </section>
      </main>
    </>
  );
};

export default Person;
