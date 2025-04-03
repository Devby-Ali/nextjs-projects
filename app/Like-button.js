'use client';
 
import { useState } from 'react';
 
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
 
  function btnHandler () {
    setLikes(likes + 1);
  }
 
  return <button onClick={btnHandler}>Like: ({likes})💙</button>;
}