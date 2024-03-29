import './ScrollSection.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';

const numberOfPicture = [1, 2, 3];

function ScrollSection() {
  return (
    <div className="ScrollSection">
    <ScrollMenu
      arrowLeft={<div style={{ fontSize: "30px" }}>{" < "}</div>}
        arrowRight={<div style={{ fontSize: "30px" }}>{" > "}</div>}
      data={numberOfPicture.map((picture, index) => (
        <img
          style={{ height: "100px" }}
          alt="test"
          src="https://reactjs.org/logo-og.png"
        />
      ))}
    />
    </div>
  )
}

export default ScrollSection;
