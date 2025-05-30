/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import anim from "../Animations/Touch";
import ProjectDisp from "../Widgets/ProjectDisp";
import soccer from "../Images/soccer.png";
import cabposter from "../Images/Smart Cab Point.png"
import cafe from "../Images/cafe.png"
import Card from "./Card";


function Projects() {
  useEffect(() => {
    anim();
  }, [anim]);
  return (
    <div className="productContainer" id="ProjectSection">
      <div className="titleContainer">
        <span className="tabNames hidden">
          <span>02.</span>Some things I've Built
        </span>
        <div className="titleHrLine"></div>
      </div>
      <ProjectDisp
        Imagealine="right"
        Projectname="Soccer-master"
        ProjectDisp="Soccer-master is a web application that allows users to view the latest football news, fixtures, and results. Users can also view the latest football news, fixtures, and results."
        tech={['ReactJS','NodeJS','MongoDb']}
        github= "https://github.com/Mohit3032/soccer-master"
        Projectlink="https://soccer-master-1n289oapc-monuhundlani-gmailcoms-projects.vercel.app"
        poster= {soccer}
      />
      <ProjectDisp 
      Imagealine="right"
      Projectname="Smart Cab Point"
      ProjectDisp="Smart Cab Point application for taxi-booking.Users can fill out the booking form, book a cab, and add the
      trip to their cart on this online platform for booking taxis."
      tech={['ReactJS','NodeJS','MongoDb','MERN stack']}
      github= "https://github.com/Mohit3032/smart_cab"
      Projectlink="https://smart-cab-monuhundlani-gmailcoms-projects.vercel.app" 
      poster={cabposter}
      />
       <ProjectDisp
        Imagealine="right"
        Projectname="Smile Cafe Point"
        ProjectDisp="Smile Cafe Point is a web application that allows users to view the latest food items, order food, and add the items to their cart. "
        tech={["React js", "Express js", "Mongodb", "Node js"]}
        github= "https://github.com/Mohit3032/dp_1"
        Projectlink="https://cafeteria-hkg1dqqcq-monuhundlani-gmailcoms-projects.vercel.app" 
        poster={cafe}
      />
        <ProjectDisp
        Imagealine="right"
        Projectname="Smile Cafe Point"
        ProjectDisp="Smile Cafe Point is a web application that allows users to view the latest food items, order food, and add the items to their cart. "
        tech={["React js", "Express js", "Mongodb", "Node js"]}
        github= "https://github.com/Mohit3032/dp_1"
        Projectlink="https://cafeteria-hkg1dqqcq-monuhundlani-gmailcoms-projects.vercel.app" 
        poster={cafe}
      />


      <div className="OtherprojectContainer">
      <h1>Other Noteworthy Projects</h1>


      <div className="cardContainer">
        <Card
          name="Learner Exam"
          disp="Learning Exam is a web application that allows users to take exams and view their results. "
          tech={['ReactJs','Javascript']}
          github="https://github.com/Mohit3032/exam"
          Plink="https://exam-one-dun.vercel.app"
        />

        <Card
        name="Valentine "
        disp="Valentine is a web application that allows users to propose to their loved ones. "
        tech={["ReactJs", "JSX", "CSS"]}
        github="https://github.com/Mohit3032/valentine"
        Plink = "https://mohit3032.github.io/valentine/"
      />

      
      <Card
      name="Amazon UI"
      disp="Similar to amazon India's user interface and user experience design. It was created with HTML, CSS and Javascript login and signUp form Validation."
      tech={["HTML", "JavaScript", "CSS"]}
      github=""
      Plink = "https://amazon-subnavfeatures.netlify.app/"
    />


    <Card
    name="Artful-Corner"
    disp="Artful-Corner is responsive static website for Interier Design company using ReactJs"
    tech={["ReactJs", "JSX", "CSS"]}
    github="https://github.com/Mohit3032/web"
    Plink = "https://artful-corner-interiar-design-studio.netlify.app/"
  />

       <Card
          name="Todo list"
          disp="ToDo list Website Using React JS and Local Storage For Storage And CRUD operations"
          tech={["ReactJS","JavaScript", "Bootstrap"]}
          github="https://github.com/Mohit3032/Todo"
          Plink="https://chp-todolist.netlify.app/"
        />

         <Card
          name="Calculator"
          disp="Calculator is web application Which can do simple calculation addition, subtraction, muiltiplication and division."
          tech={["HTML", "JavaScript", "CSS"]}
          github="https://github.com/Mohit3032/calc"
          Plink="https://calc-liart-two.vercel.app"
        />

      </div>
      </div>
    </div>
  );
}

export default Projects;
