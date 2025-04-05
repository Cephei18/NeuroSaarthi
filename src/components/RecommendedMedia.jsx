import React from "react";
import "./RecommendedMedia.css";

const movies = [
  {
    title: "A Brilliant Young Mind (X+Y)",
    poster: "https://th.bing.com/th/id/OSK.ojtum33JS0Wb-sybc96L5WTGQpLKjzE_u5a9K71FS2A?w=312&h=200&c=7&rs=1&o=6&dpr=1.3&pid=SANGAM",
    tags: ["Autism", "Math Genius"],
    description: "A socially awkward math prodigy learns to connect while preparing for the International Math Olympiad.",
    trailer: "https://youtu.be/QfFjzOjsSMo?si=m6Zi9h5QhZK6bwzr"
  },
  {
    title: "Taare Zameen Par",
    poster: "https://www.robinage.com/wp-content/uploads/2023/03/tare-zameen-pr-1024x683.jpg",
    tags: ["Dyslexia", "India"],
    description: "An art teacher helps a dyslexic boy discover his hidden potential in an unsupportive school system.",
    trailer: "https://www.youtube.com/watch?v=tn_2Ie_jtX8"
  },
  {
    title: "The Good Doctor",
    poster: "https://th.bing.com/th/id/OIP.yJlKrABsUxzJHV2KQRsCigHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    tags: ["Autism", "Savant Syndrome"],
    description: "A young surgeon with autism and savant syndrome challenges perceptions in a prestigious hospital.",
    trailer: "https://youtu.be/lnY9FWUTY84?si=-NAbAzJYPIffc1qP"
  },
  {
    title: "Atypical",
    poster: "https://th.bing.com/th/id/OIP.KPQwdrx2rigkMpXwBST-xQHaEJ?w=332&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    tags: ["Autism", "Coming-of-Age"],
    description: "A teenager on the autism spectrum searches for independence and love.",
    trailer: "https://www.youtube.com/watch?v=ieHh4U-QYwU"
  },
  {
    title: "Everything's Gonna Be Okay",
    poster: "https://cdn.justjaredjr.com/wp-content/uploads/2020/01/okay-tca/everythings-gonna-be-okay-pilot-to-re-air-on-fx-07.jpg",
    tags: ["Autism", "Family Drama"],
    description: "After their father's death, Nicholas becomes guardian to his two half-sisters, one of whom is autistic.",
    trailer: "https://www.youtube.com/watch?v=Y9KoW5nI5g4"
  },
  
  {
    title: "Mozart and the Whale",
    poster: "https://th.bing.com/th/id/OIP.ep8rf3pfwjXmQFecT08lqwHaEK?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    tags: ["Autism", "Romance"],
    description: "A romantic drama about two people with Asperger's syndrome who fall in love.",
    trailer: "https://www.youtube.com/watch?v=KZyNFSZg1zU"
  },
  {
    title: "Temple Grandin",
    poster: "https://th.bing.com/th/id/OIP.E1BMq5kWi2-og6z2w-l-kwHaEK?rs=1&pid=ImgDetMain",
    tags: ["Autism", "Biographical"],
    description: "The story of Temple Grandin, an autistic woman who revolutionized practices for the humane handling of livestock.",
    trailer: "https://www.youtube.com/watch?v=cpkN0JdXRpM"
  },
  {
    title: "Love on the Spectrum",
    poster: "https://th.bing.com/th/id/OIP.HNjz0SIJWNLkGApQeEGgXQHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    tags: ["Autism", "Reality TV"],
    description: "A documentary series following young adults on the autism spectrum as they explore the world of dating.",
    trailer: "https://www.youtube.com/watch?v=6YgeOqBX7dQ"
  }
];

const RecommendedMedia = () => {
  return (
    <div className="recommended-media-section">
      <h2 className="movie-title">🎬 Neuro-Inclusive Stories That Inspire</h2>
      <p className="movie-subtitle">Explore movies & shows that celebrate neurodiverse brilliance.</p>
      <div className="media-grid">
        {movies.map((movie, index) => (
          <div key={index} className="media-card">
            <img src={movie.poster} alt={movie.title} className="poster" />
            <h3>{movie.title}</h3>
            <p className="description">{movie.description}</p>
            <div className="tags">
              {movie.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <a href={movie.trailer} target="_blank" rel="noopener noreferrer" className="trailer-button">
              ▶ Watch Trailer
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedMedia;
