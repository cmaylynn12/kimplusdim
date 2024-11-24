import { useState } from "react";
import AccommodationItem from "../accommodationItem/accommodationItem";
import Layout from "../layout/layout";

import "./accommodation.css";

const Accommodation: React.FC = () => {
  return (
    <Layout activeSection="accommodation" title="Accommodation">
      <div className="page-container">
        <div className="area-container">
          <div className="region">Downtown Athens</div>
          <div className="accommodation-container">
            <AccommodationItem
              area="Plaka"
              header="“The Neighborhood of the Gods”"
              description="Nestled at the foot of the Acropolis, Plaka is Athens’ oldest neighborhood. Its cobblestone streets, neoclassical buildings, and charming tavernas make it a picturesque base for exploring ancient ruins and museums."
            />
            <AccommodationItem
              area="Monastiraki"
              header="“Vibrant Markets and Stunning Rooftops”"
              description="Known for its bustling flea market and rooftop bars with unparalleled views of the Acropolis, Monastiraki is a lively hub of culture and history. Perfect for those who love nightlife and shopping."
            />
            <AccommodationItem
              area="Kolonaki"
              header="“Kolonaki – Upscale, Elegant and Chic“"
              description="A chic and sophisticated neighborhood with designer boutiques, art galleries, and trendy cafes. Kolonaki is ideal for those seeking a luxurious and refined experience in the heart of Athens."
            />
            <AccommodationItem
              area="Psiri"
              header="“The Bohemian Heart of Athens”"
              description="This artsy neighborhood is a hotspot for street art, quirky shops, and trendy restaurants. Psiri’s vibrant nightlife and creative vibe make it a favorite for younger travelers and the adventurous."
            />
          </div>
        </div>
        <div className="area-container">
          <div className="region">✨Athenian Riviera✨</div>
          <div className="accommodation-container">
            <AccommodationItem
              area="Vouliagmeni"
              header="“The Riviera’s Crown Jewel”"
              description="A chic seaside suburb with pristine beaches, upscale dining, and natural hot springs. Vouliagmeni offers a luxurious yet relaxed atmosphere and is only 10 minutes from the wedding venue."
            />
            <AccommodationItem
              area="Varkiza"
              header="“Laid-Back Beach Vibes”"
              description="A quieter coastal area with family-friendly beaches, casual seafood tavernas, and a welcoming vibe. Varkiza is perfect for guests seeking a peaceful retreat by the sea."
            />
            <AccommodationItem
              area="Glyfada"
              header="“The Cosmopolitan Riviera”"
              description="Known for its vibrant nightlife, high-end shopping, and modern cafes, Glyfada is the Riviera’s bustling urban center. It’s a great choice for those who want a mix of city and beach life."
            />
            <AccommodationItem
              area="Anavyssos"
              header="“Rustic Charm Meets Coastal Beauty”"
              description="A scenic area farther along the coast, Anavyssos is known for its relaxed pace, stunning sunsets, and crystal-clear waters. Ideal for guests wanting a more off-the-beaten-path coastal experience near the venue."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Accommodation;
