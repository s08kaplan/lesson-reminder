const LessonCard = ({ data }) => {
  return (
    <div className="card row">
      {data.map(({ id, name, hour, image }) => (
        <div className="section-div col-12 col-sm-6 col-md-4 gap-4 align-items-center m-4 " key={id}>
          <div>
            <img src={image} alt={name} />
          </div>
          <div d-flex justify-content-center align-items-center>
            <p className="lesson">
              Lesson Name: <span>{name}</span>
            </p>
            <p className="lesson">
              Lesson Hour: <span>{hour}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonCard;
