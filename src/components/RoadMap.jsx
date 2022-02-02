const RoadMap = ({percentage, title, content}) => {
      return (
            <>
                  <span>{percentage}</span>
                  <h1>{title}</h1>
                  <p>{content}</p>
            </>
      );
}

export default RoadMap;