import React from "react";
import "../App.css"; // Import CSS file

const stories = [
  {
    name: "Ashiish V. Patil",
    description: "Former CEO of MTV India, advocating for neurodiversity in media.",
    image: "https://i.pinimg.com/736x/9c/e4/b3/9ce4b3e12cecdb3510e0c366072c6193.jpg", // Replace with actual image
    link: "https://www.nagarro.com/en/blog/empowering-neurodiverse-voices-through-technology",
  },
  {
    name: "Aditi Gangrade",
    description: "Film director & writer, co-founder of Much Much Spectrum.",
    image: "https://th.bing.com/th/id/OIP.tMJBISHNN7QCHvGEr-4SSQHaGL?rs=1&pid=ImgDetMain.jpg", // Replace with actual image
    link: "https://carolynkiel.com/podcast/neurodivergent-stories-from-india-with-aditi-gangrade/",
  },
  {
    name: "Thomson Reuters Program",
    description: "Internship program for neurodiverse individuals in various fields.",
    image: "https://th.bing.com/th/id/OIP.AzpD0CVLMNm5Qs4HhLVB4gHaE7?rs=1&pid=ImgDetMain.jpg", // Replace with actual image
    link: "https://www.thomsonreuters.com/en-us/posts/our-purpose/inclusion-and-action-the-success-story-of-our-autism-spectrum-internship-program-in-india/",
  },
  {
    name: "SAP Labs India Initiative",
    description: "Autism at Work initiative supporting neurodiverse employees.",
    image: "https://m.economictimes.com/photo/112231937.cms", // Replace with actual image
    link: "https://m.economictimes.com/opinion/et-commentary/companies-worldwide-are-benefiting-from-embracing-neurodiversity-indian-offices-must-follow/articleshow/112231937.cms",
  },
  {
    name: "Bikram Bhattarai",
    description: "Former CEO of MTV India, advocating for neurodiversity in media.",
    image: "https://www.kuits.com/wp-content/uploads/2024/05/neurodiversity-scaled.jpg", // Replace with actual image
    link: "https://www.nagarro.com/en/blog/empowering-neurodiverse-voices-through-technology",
  },
  {
    name: "Susheel Jangira",
    description: "Film director & writer, co-founder of Much Much Spectrum.",
    image: "https://www.thechemicalengineer.com/media/20339/neurodiversity-shutterstock_2252854783.png?width=960.jpg", // Replace with actual image
    link: "https://carolynkiel.com/podcast/neurodivergent-stories-from-india-with-aditi-gangrade/",
  },
  {
    name: "Rahul Singh",
    description: "Internship program for neurodiverse individuals in various fields.",
    image: "https://img.freepik.com/premium-photo/embracing-neurodiversity-autism-awareness_1036998-32595.jpg", // Replace with actual image
    link: "https://www.thomsonreuters.com/en-us/posts/our-purpose/inclusion-and-action-the-success-story-of-our-autism-spectrum-internship-program-in-india/",
  },
 
  {
    name: "Rajesh Rai",
    description: "Artist from Sikkim who draws with his feet, overcoming challenges.",
    image: "https://th.bing.com/th/id/OIP.x8ezGXi-a0-u62lKBHKXXgHaE7?w=626&h=417&rs=1&pid=ImgDetMain,jpg", // Replace with actual image
    link: "https://www.theguardian.com/global-development/2025/mar/03/i-focus-on-the-person-not-the-disability-the-photographer-on-a-mission-to-make-india-inclusive",
  },
];

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <h2>Success Stories</h2>
      <div className="stories-container">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <img src={story.image} alt={story.name} />
            <h3>{story.name}</h3>
            <p>{story.description}</p>
            <a href={story.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
