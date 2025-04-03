import LikeButton from './like-button';
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

  const names = ['Ada Lovelace', 'مارسلا بابا', 'دومپا بابا', 'gabriel'];
  
  function btnHandler() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. devbyali." />
      <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <LikeButton />
    </div>
  );
}