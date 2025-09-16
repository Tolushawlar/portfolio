import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view modern-card h-100">
      <div className="position-relative overflow-hidden">
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt={props.title}
          className="project-image"
        />
      </div>
      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="h5 fw-bold mb-3 text-white">
          {props.title}
        </Card.Title>
        <Card.Text className="text-white mb-4 flex-grow-1" style={{ lineHeight: "1.7" }}>
          {props.description}
        </Card.Text>
        
        {/* Skills badges */}
        {props.skills && (
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-2">
              {props.skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  className="skill-badge"
                  style={{ 
                    background: "rgba(102, 126, 234, 0.8)",
                    color: "white",
                    border: "1px solid rgba(102, 126, 234, 0.2)",
                    fontSize: "0.75rem",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "6px",
                    fontWeight: "500"
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="d-flex gap-3 justify-content-center mt-auto">
          {props.ghLink && (
            <Button 
              variant="primary" 
              href={props.ghLink} 
              target="_blank"
              className="flex-fill"
              style={{ minWidth: "160px" }}
            >
              <BsGithub className="me-2" />
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          
          {!props.isBlog && props.demoLink && (
            <Button
              variant="success"
              href={props.demoLink}
              target="_blank"
              className="flex-fill"
              style={{ minWidth: "160px" }}
            >
              <CgWebsite className="me-2" />
              View Project
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
