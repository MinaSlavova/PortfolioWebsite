import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ProjectDisplay from './components/ProjectDisplay';
import AboutMeDisplay from './components/AboutMeDisplay';
import ContactForm from './components/ContactForm';

function App() {
  const mockProjects1 = [
    {
      title: 'Portfolio Website',
      image: '/images/GamePie_CardDesign_Ideas.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec urna enim. Nam at nunc vel sapien pellentesque fermentum at at nisi. Pellentesque non sem cursus, porttitor nulla iaculis, varius felis. Aliquam orci quam, ullamcorper at libero eget, ultrices placerat neque. Donec sit amet ligula tortor. Ut dictum sem et sem molestie, ut hendrerit nunc tempus. ',
      technologies: ['React', 'CSS', 'JavaScript'],
      git: 'https://github.com/example/portfolio',
      itch: null,
    },
    {
      title: 'Game Project',
      image: '/images/Blender_FinalTower_Progress3_NewBase.png',
      description: 'A 2D platformer game developed using Unity.',
      technologies: ['Unity', 'C#'],
      git: 'https://github.com/example/game',
      itch: 'https://example.itch.io/game',
    },
    {
      title: 'Game Project',
      image: '/images/Blender_FinalTower_Progress3_NewBase.png',
      description: 'A 2D platformer game developed using Unity.',
      technologies: ['Unity', 'C#'],
      git: 'https://github.com/example/game',
      itch: 'https://example.itch.io/game',
    },
    {
      title: 'Portfolio Website',
      image: '/images/GamePie_CardDesign_Ideas.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec urna enim. Nam at nunc vel sapien pellentesque fermentum at at nisi. Pellentesque non sem cursus, porttitor nulla iaculis, varius felis. Aliquam orci quam, ullamcorper at libero eget, ultrices placerat neque. Donec sit amet ligula tortor. Ut dictum sem et sem molestie, ut hendrerit nunc tempus. ',
      technologies: ['React', 'CSS', 'JavaScript'],
      git: 'https://github.com/example/portfolio',
      itch: null,
    },
  ];

  const mockProfile = {
  image: '/images/ProfilePicture.jpg',
  text: `Hi, I’m Mina, a software development student with a strong interest in game development, UI design, and creative digital experiences.
I enjoy building projects that combine functionality with visual appeal, whether that means developing games in Unity, designing interfaces in React, or experimenting with art and interactive media.
I’m especially interested in creating projects that feel polished, engaging, and personal.`,
  mail: 'mina@example.com',
  instagram: 'https://instagram.com/minaexample',
  whatsapp: 'https://wa.me/385000000000',
  linkedin: 'https://linkedin.com/in/minaexample',
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
