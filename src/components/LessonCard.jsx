const LessonCard = ({ data }) => {
  return (
    <>
      {data.map(({ id, name, hour, image }) => (
        <div className="section-div" key={id}>
          <img src={image} alt={name} />
          <div>
            <p className="lesson">
              Lesson Name: <span>{name}</span>
            </p>
            <p className="lesson">
              Lesson Hour: <span>{hour}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default LessonCard;
