import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import boslight from "../../Assets/newProjects/Boslight/Screenshot 2025-07-12 at 23.14.33.png";
import tapewears from "../../Assets/newProjects/tape/Screenshot 2025-07-12 at 23.34.08.png";
import decibello from "../../Assets/newProjects/Decibello/Screenshot 2025-07-13 at 00.05.32.png";
import swotify from "../../Assets/newProjects/beTeachable/Screenshot 2025-07-13 at 00.23.12.png";
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
          Featured <strong className="gradient-text">Projects</strong>
        </h1>
        <p className="section-subtitle">
          Discover my latest work in full-stack development, featuring modern web applications with cutting-edge technologies and innovative solutions.
        </p>
        <Row className="g-4 justify-content-center">
          <Col lg={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={boslight}
              isBlog={false}
              title="Boslight - KYC Platform"
              description="A comprehensive KYC platform that streamlines identity verification for lending institutions. Features secure document upload, multi-step verification process, real-time status tracking, and automated compliance checks. The platform significantly reduces manual processing time while ensuring regulatory compliance and enhanced security."
              demoLink="https://www.boslightmulti-serviceslimited.com/"
              skills={["React", "Tailwind CSS", "Clerk", "Supabase", "Vercel"]}
            />
          </Col>

          <Col lg={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={tapewears}
              isBlog={false}
              title="Tape Wears - E-commerce Platform"
              description="A modern e-commerce platform celebrating cultural heritage through fashion. Features include product catalog management, shopping cart functionality, secure payment processing, order tracking, and a comprehensive admin dashboard for inventory and sales management. Built with scalable architecture to handle growing business needs."
              demoLink="https://tape-lemon.vercel.app/"
              skills={["React", "Node.js", "Supabase", "Express.js", "Vercel"]}
            />
          </Col>

          <Col lg={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={decibello}
              isBlog={false}
              title="Decibello - Agency Management"
              description="An all-in-one agency management solution designed for marketing teams. Includes client management, project tracking, team collaboration tools, content management system, and automated scheduling. The platform centralizes operations, improves team productivity, and enhances client communication through integrated workflows."
              demoLink="https://decibello-frontend.vercel.app/"
              skills={["React", "Node.js", "Express.js", "Supabase", "Vercel"]}
            />
          </Col>

          <Col lg={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={swotify}
              isBlog={false}
              title="Be Teachable - SWOT Analysis Tool"
              description="A sophisticated SWOT analysis tool integrated with GoHighLevel CRM. Enables businesses to conduct comprehensive strategic assessments with interactive visualizations, automated report generation, and seamless workflow integration. Helps agencies deliver professional strategic consulting services to their clients."
              demoLink="https://swotify.beteachable.com/"
              skills={["React", "GoHighLevel API", "PDF Generation", "Strategic Analysis"]}
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MiniManage"
              description="This is a minimalistic budget management system created using the python django rest framework very easy to use, the user can enter an amount and description in order to compute the total amount of expenses.
               The system will auto calculate the inputted amount and display the overall expense after"
              ghLink="https://github.com/Tolushawlar/intellmanage"
              demoLink="https://intellmanage.herokuapp.com/"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hotel Resort"
              description="A simple single page react application built to learn the basics of react and components, implemented data display and data fetching using the react context in building
              the hotel resort website to display hotel rooms and also filter the data."
              ghLink="https://github.com/Tolushawlar/resort"
              demoLink="https://bearesort.netlify.app/" 
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MetRight"
              description="A Student Management System with the python django web framework , These systems work to coordinate scheduling and communications between faculty regarding students.
               This system exists to simplify information tracking for both staff and the students by the school administrator. (In Development)"
              ghLink="https://github.com/Tolushawlar/metright"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ArtistVote"
              description="A simple Web application created with the python django web framework that utilizes data science library, a web app to replace a traditional show of
               hands voting process with a cutting-edge digital solution. Live-casting provides real-time results, transparency and information to all voters and viewers. (In Development)"
              ghLink="https://github.com/Tolushawlar/artistvote"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
