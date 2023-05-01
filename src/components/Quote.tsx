import { useState, useEffect } from 'react';
import { Quote } from '../models'

interface QuoteProps {
  quote: Quote
}

export function IQuote({ quote }: QuoteProps) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isLiked = localStorage.getItem(`liked-${quote._id}`) === 'true';
    setLiked(isLiked);
  }, []);

  const handleLike = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    localStorage.setItem(`liked-${quote._id}`, liked.toString());
  }, [liked]);

  const unlikeImgSrc = 'https://www.freepnglogos.com/uploads/like-png/like-icon-line-iconset-iconsmind-35.png';
  const likeImgSrc = 'https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png';


  return (
    <div
      className="border py-2 px-4 rounded flex flex-col mb-2"
    >
      <p>{quote.content}</p>
      <p className="text-right font-bold">{quote.author}</p>
      <button onClick={handleLike}>
        <img className="w-6" src={liked ? likeImgSrc : unlikeImgSrc} alt="like button" />
      </button>
    </div>
  )
}
