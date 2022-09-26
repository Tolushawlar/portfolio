import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/bamiz.png";
import emotion from "../../Assets/Projects/easelearn.png";
import motion from "../../Assets/Projects/royal.png";
import mot from "../../Assets/Projects/book.png";
import editor from "../../Assets/Projects/intellmanage.png";
import chatify from "../../Assets/Projects/artistvote.png";
import suicide from "../../Assets/Projects/resort.png";
import bitsOfCode from "../../Assets/Projects/metright.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ArtistVote"
              description="A simple Web application created with the python django web framework that utilizes data science library, a web app to replace a traditional show of
               hands voting process with a cutting-edge digital solution. Live-casting provides real-time results, transparency and information to all voters and viewers."
              ghLink="https://github.com/Tolushawlar/artistvote"
              //demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MetRight"
              description="A Student Management System with the python django web framework , These systems work to coordinate scheduling and communications between faculty regarding students.
               This system exists to simplify information tracking for both staff and the students by the school administrator."
              ghLink="https://github.com/Tolushawlar/metright"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MiniManage"
              description="This is a minimalistic budget management system created using the python django rest framework very easy to use, the user can enter an amount and description in order to compute the total amount of expenses.
               The system will auto calculate the inputted amount and display the overall expense after"
              ghLink="https://github.com/Tolushawlar/intellmanage"
              demoLink="https://intellmanage.herokuapp.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Bamzi"
              description="An ecommerce application built during an intership program, worked with the team that implemented the design using the react frontend libray and also the backend services was built
              using the php laravel framework, worked on high order components as well as how to consume API data and send data also to a database."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://bamzi.ivyarc.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hotel Resort"
              description="A simple single page react application built to learn the basics of react and components, implemented data display and data fetching using the react context in building
              the hotel resort website to display hotel rooms and also filter the data."
              ghLink="https://github.com/Tolushawlar/resort"
              demoLink="https://bearesort.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mot}
              isBlog={false}
              title="SpreeFree"
              description="This is a React bookstore application in which, user can view available books and its related information and also I can add
              them to my spreeList for later reading. Built this application to develop my ability to use multireact components and also how to consume API's in react. Used the ecommerce.js API to host book information"
              ghLink="https://github.com/Tolushawlar/spreefree"
              demoLink="https://spreefree.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motion}
              isBlog={false}
              title="Royal Mobile"
              description="A landing page built for an NFT game using HTML CSS and Javascript, created various pages using different styling techniques and also included interactivity in the page
              by designing it using javascript functions,"
              ghLink="https://github.com/Tolushawlar/royal-mobile"
              demoLink="https://royale-mobile.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="EaseLearn"
              description="This is a figma design implemented website that was built as part of the project during an internship programme, its an educational website, where students
              can come to take tutorials and also as well answer questions to test their understanding of the topic studied."
              ghLink="https://github.com/Tolushawlar/easeLearn"
              demoLink="https://easelearn.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
