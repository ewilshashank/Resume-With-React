export default function Video({ title, interest, verified }) {
  let nameJSX;
  if (verified) {
    // nameJSX = <div>I complete My Resume ✅</div>;
  } else {
    nameJSX = <div>I complete My Resume</div>;
  }

  return (
    <div>
      <Interest title={title} interest={interest} verified={true}></Interest>
      <Skills></Skills>
      {nameJSX}
    </div>
  );
}

function Interest({ title, interest, verified }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <ul>{interest}</ul>
        {/* <div>I complete My Resume {verified ? '✅': ''}</div> */}
        <div>I complete My Resume {verified && "✅"}</div>{" "}
        {/* only boolean work */}
      </div>
    </>
  );
}

function Skills() {
  let obj = {
    name: "skills",
    haveSkills: ["Master in Web Development", "Master In Web Design"],
    title: "Education",
    studyIn: [
      "Amity InterNational School",
      "Dream Zone Institue Of Technology",
      "Chandigarh University"
    ]
  };

  return (
    <>
      <div>
        <h2>{obj.name}</h2>
        <ul>
          {obj.haveSkills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <Education
        title={obj.title}
        studyIn={obj.studyIn.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      />
    </>
  );
}

function Education({ title, studyIn }) {
  let obj = {
    experience: "Self Experianece",
    projects: "40+ Self Made"
  };

  return (
    <>
      <div>
        <h2>{title}</h2>
        <ul>{studyIn}</ul>
      </div>
      <Experience selfExp={obj.experience} madeProjects={obj.projects} />
    </>
  );
}

function Experience(props) {
  return (
    <>
      <div>
        <h1>Experience</h1>
        <ul>
          <li>{props.selfExp}</li>
          <li>{props.madeProjects}</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

function Footer(props) {
  const handlePDF = () => {
    window.print();
  };

  return (
    <footer
      style={{ backgroundColor: "grey", padding: "20px 10px", color: "white" }}
    >
      <button onClick={handlePDF}></button>
      <p>
        <i>
          <b style={{ float: "right" }}>Shashank singh</b>
        </i>
      </p>
    </footer>
  );
}
