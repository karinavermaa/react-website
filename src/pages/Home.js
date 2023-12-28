import TypeText from "../Components/TypeText";
import GitHubButton from '../Components/GitHubButton';
import LinkedInButton from '../Components/LinkedInButton';
import "../styles/Home.css";


function Home() {
  const githubProfileUrl = 'https://github.com/your-username';
  const emailAddress = 'your-email@example.com';
  const linkedInProfileUrl = 'https://www.linkedin.com/in/your-linkedin-profile';

    
    return (
      <div className="home">
        <div className="about">
            <h2>Hi, My Name is</h2>
            <h3>
                 <TypeText text="Karina Verma" delay={150} infinite />
            </h3>
            <div style={{width: 583, height: 0, border: '2px #163020 solid'}}></div>

            <div className="prompt">
          <p>and I am an Undergraduate Computing Student.</p>

        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}


export default Home;