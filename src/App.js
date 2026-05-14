import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ProjectDisplay from './components/ProjectDisplay';
import AboutMeDisplay from './components/AboutMeDisplay';
import ContactForm from './components/ContactForm';

function App() {
  const mockProjects1 = [
    {
      title: 'HackTUES & TUES Fest 2022',
      images: ['/images/GamePie_CardDesign_Ideas.png'],
      description: 'HackTUES is a three day hackaton in Bulgaria, organized for students by students. It is an annual event which changes organizers every year. In 2022 I got to be a part of the organizing team as a designer. I alongside one other designer were responsible for the visual identity of the event, which included designing the logo, the social media posts and the merchandise. I was personally responsible for the first ever HackTUES comic, which later became part of the yearly tradition.',
      technologies: ['Krita', 'Adobe Illustrator'],
      git: null,
      itch: null,
      info: 'https://www.hack-tues.com/',
    },
    {
      title: 'Haemimont AD Internship',
      images: ['/images/Blender_FinalTower_Progress3_NewBase.png'],
      description: 'Haemimont is a software devlopment company based in Sofia, Bulgaria. I got to work there as a UI/UX designer for 2 weeks as part of a mandatory school internship. I later returned for a second internship in the same role, spanning one month. My tasks mostly centered around creating interactive prototypes in Figma.',
      technologies: ['Figma'],
      git: null,
      itch: null,
      info: 'http://www.haemimont.com/',
    },
    {
      title: 'Risk of Rain 2 Trivia Board Game',
      images: ['/images/Blender_FinalTower_Progress3_NewBase.png'],
      description: "An introductory task for the Fontys Game Design semester. The goal was to create a board game based on a video game of our choice combined with a random board game genre. I worked in a group of 6 people, and contributed to the design of the game mechanics, the visual design and the creation of the physical prototype. I also worked on balancing the game and creating the playable characters and cards' abilities.",
      technologies: ['Figma', 'Krita'],
      git: null,
      itch: null,
      info: null,
    },
    {
      title: 'Redneck Romantic',
      images: ['/images/GamePie_CardDesign_Ideas.png'],
      description: 'Redneck Romantic is a dating sim game I and a team of other passionate game designers created for the 20 second game jam. The goal of the jam was to create a game that lasts no longer than 20 seconds. I was responsible for the visual design of the game and as such am responsible for the creation of most of the game assets, inclding the player hand model and date table, along with all UI elements. My contribution was not limited to visual design only, as I also contributed to the design of the game mechanics.',
      technologies: ['Aseprite', 'Krita', 'Unity 6'],
      git: 'https://github.com/RickHFontys/redneck-romance',
      itch: 'https://fairvanguard.itch.io/redneck-romantic',
      info: null,
    },
    {
      title: 'Splice-Born',
      images: ['/images/GamePie_CardDesign_Ideas.png'],
      description: 'Splice-Born is a 2D roguelike hack and slash side scroller game I worked on as part of the Fontys Game Design semester as part of a duo. The game is inspired a lot by biopunk aesthetics and as a visual designer I tried to lean into that vibe alot when creating the main menu and the UI elements. I am also responsible for creating the playable character sprite alongside an attack animation which ended up not getting used. Other than that I worked on developing the playable character and the collectable items, and also on designing some of the rooms.',
      technologies: ['Aseprite', 'Unity 6', 'C#'],
      git: 'https://git.fhict.nl/I551612/semester3_duo_project',
      itch: 'https://m999kingmaik.itch.io/splice-born',
      info: null,
    },
    {
      title: 'Aether Flight',
      images: ['/images/GamePie_CardDesign_Ideas.png'],
      description: "Aether Flight was a game I worked on alongside 5 other people as part of the Fontys Game Design semester. It was a project in which we had to work for an actual client. The goal was to create a VR flight simulator game serving as sort of a tech demo for a YAW VR chair. The idea was to create a short, but scenic experience, but sadly we didn't manage to get the game to a finished state. On my end, outside of helping with creating the narative, I worked on creating 3D models for the game. That was also my introduction to Blender. I helped in designing and building a large portion of the level, and also worked on concept art. Other than that I was tasked with creating a sticker design and poster for the game.",
      technologies: ['Blender', 'Unity 6', 'Krita', 'Adobe Illustrator'],
      git: null,
      itch: null,
      info: null,
    },
    {
      title: 'ReFocus',
      images: ['/images/ReFocus-app-screens.png', '/images/ReFocus-brand-guide.png'],
      description: "ReFocus is an Android application intended to help people strugglng with procrastination. The app is based on the Pomodoro method and is designed by me as a project for the Fontys Mobile Development semester. Due to time constraints and my own struggles with procrastination I couldn't completely finish the project, but I am quite proud of the design I made for it and also the amount of research.",
      technologies: ['Figma', 'Android Studio', 'Kotlin', 'Jetpack Compose'],
      git: 'https://git.fhict.nl/I551612/semester4_personalproject1',
      itch: null,
      info: null,
    }
  ];

  const mockProfile = {
  image: '/images/ProfilePicture.jpg',
  text: `Hello! My name is Mina and I am an aspiring game and visual designer hailing from Bulgraia. I am currently a student at Fontys University of Applied Sciences, studying ICT. I have a strong passion for creative fields and would love to try my hand at anything and everything as long as it offers room for me to express myself. In my free time I enjoy playing games, drawing and listening to odd music.`,
  mail: { label: 'Contact me', href: '#contact-me' },
  instagram: 'https://www.instagram.com/minaslavova/',
  whatsapp: 'https://wa.me/qr/VWFRWDU2N4WJL1',
  linkedin: 'https://www.linkedin.com/in/mina-slavova-808063287/',
};

  return (
    <div className="App">
      <Navbar
        logo={'Mina Slavova'}
        buttons={[
          { label: 'About me', href: '#about-me' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact me', href: '#contact-me' },
        ]}
      />
      <div className="App-content">
        <div className="App-sections">
          <section id="about-me">
            <Card title="Who am I?">

              <AboutMeDisplay profile={mockProfile} />

            </Card>
          </section>

          <section id="projects">
            <Card title="Projects">

              <ProjectDisplay projects={mockProjects1} />

            </Card>
          </section>

          <section id="contact-me">
            <Card title="Contact Me">

              <ContactForm />

            </Card>
          </section>

        </div>
      </div>
    </div>
  );
}

export default App;
