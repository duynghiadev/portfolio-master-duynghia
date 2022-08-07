function MyPersonality({ MyPersonality }) {
  return (
    <div className="typing-personality">
      I'm
      <div className="slider">
        {MyPersonality.map((item, id) => {
          return <div key={id}>{item}</div>;
        })}
      </div>
    </div>
  );
}
export default MyPersonality;
