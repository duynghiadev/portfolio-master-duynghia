function MySkills({ myskills }) {
  return (
    <>
      {myskills.map((skill, id) => {
        return (
          
            <div key={id}>{skill}</div>
          
        );
      })}
    </>
  );
}
export default MySkills;
