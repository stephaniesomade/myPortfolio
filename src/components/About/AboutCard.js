import React from "react";
import Card from "react-bootstrap/Card";
import { MdCardTravel } from 'react-icons/md';
import { MdSportsGymnastics } from 'react-icons/md';
import { GiSewingString } from 'react-icons/gi';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! My name is <span className="purple"> Stephanie Somade </span>
            from <span className="purple"> the UK</span>
            <br /> I have recently completed my Level 4 Software Developer Apprenticeship.
            <br />
            I am currently employed as a software developer at
            News UK.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              < GiSewingString /> Crocheting
            </li>
            <li className="about-activity">
              < MdSportsGymnastics/> Exercising
            </li>
            <li className="about-activity">
              <MdCardTravel /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Stephanie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
