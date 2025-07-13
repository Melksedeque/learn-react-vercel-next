export default function LikeButton() {
    function handleClick() {
        console.log('I like it!');
        setLikes(likes + 1);
    }
 
  return <button onClick={handleClick}>Like ({likes})</button>;
}