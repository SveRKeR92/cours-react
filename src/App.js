// import Username from './components/Username'
// import Card from './components/Card';
// import Image from './img/image.png';
// import RoadMap from './components/RoadMap';

// import { Routes, Route, Link} from "react-router-dom";

import Rooter from './routes/Rooter'

const DataRoadMap = [{
  percentage: '0%',
  title: 'Titre 1',
  content: 'Content 1',
}, {
  percentage: '10%',
  title: 'Titre 10°',
  content: 'Content 10°',
}, {
  percentage: '20%',
  title: 'Titre 1',
  content: 'Content 1',
}, {
  percentage: '30%',
  title: 'Titre 1',
  content: 'Content 1',
}, {
  percentage: '40%',
  title: 'Titre 1',
  content: 'Content 1',
}, {
  percentage: '50%',
  title: 'Titre 1',
  content: 'Content 1',
}, {
  percentage: '60%',
  title: 'Titre 1',
  content: 'Content 1',
}, {
  percentage: '70%',
  title: 'Titre 1',
  content: 'Content 1',
}, {
  percentage: '80%',
  title: 'Titre 1',
  content: 'Content 1', 
},{
  percentage: '90%',
  title: 'Titre 1',
  content: 'Content 1',
},{
  percentage: '100%',
  title: 'Titre 1',
  content: 'Content 1',
}];

function App() {
  const user = {
    firstname : "Lorem",
    lastname : "ipsum"
  }

  return (
    <>
      {/* {Username(user)}
      <Card title="Titre" desc="La description" image={Image} link="google.com" />
      {DataRoadMap.map((data, index) => 
        <div key={index}>
          <RoadMap percentage={data.percentage} title={data.title} content={data.content}/>
        </div>
      )} */}
      <Rooter/>
    </>
  );
}

export default App;
