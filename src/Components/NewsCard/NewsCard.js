import React from "react";
import "./NewsCard.css";

function NewsCard() {
  return (
    <div className="newsCard">
      <p>LinkedIn News</p>
      <div>
        <span className="newsCard__bullet"></span>
        <a
          href="https://www.linkedin.com/feed/news/how-salaries-are-changing-5301914/"
          target="_blank"
          rel="noopener noreferrer"
        >
          How salaries are changing
        </a>
      </div>
      <div>
        <span className="newsCard__bullet"></span>
        <a
          href="https://www.linkedin.com/feed/news/tiktok-influencers-turn-actors-4950308/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok influencers turn actors
        </a>
      </div>
      <div>
        <span className="newsCard__bullet"></span>
        <a
          href="https://www.linkedin.com/feed/news/ruin-your-day-in-one-easy-step-4212897/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ruin your day in one easy step
        </a>
      </div>
      <div>
        <span className="newsCard__bullet"></span>
        <a
          href="https://www.linkedin.com/feed/news/the-key-to-smart-hiring-4932116/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The key to smart hiring
        </a>
      </div>
      <div>
        <span className="newsCard__bullet"></span>
        <a
          href="https://www.linkedin.com/feed/news/russian-vaccine-gets-indian-partner-4217825/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Russian vaccine gets Indian partner
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
