import Offcanvas from 'react-bootstrap/Offcanvas';

function Example(props) {

  return (
    <>
      <Offcanvas className='bg-black text-white' show={props.expand} onHide={() => props.handleSideBar()}>
        <Offcanvas.Header>
          <Offcanvas.Title>Home</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;