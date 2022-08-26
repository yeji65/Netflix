import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ButtonDarkExample() {
  return (
    <>
      <Dropdown className='sort'>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Sort Results By
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">

          <Dropdown.Item href="#/action-1">Popularity(Desc)</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Popularity(asc)</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Release Day(Desc)</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Release Day(asc)</Dropdown.Item>
          <Dropdown.Divider />
        </Dropdown.Menu>
      </Dropdown>

      {/* <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Dropdown button"
        className="mt-2"
      >
        <Dropdown.Item href="#/action-1" active>
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </DropdownButton> */}
    </>
  );
}

export default ButtonDarkExample;