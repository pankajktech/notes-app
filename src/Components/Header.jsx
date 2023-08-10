import { Navbar, Button, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NoteImg from "../Images/notes.png";

const Header = () => {
  return (
    <Navbar className="mx-auto bg-white max-w-screen-xl p-2 lg:rounded-full">
      <div className="relative flex justify-around items-center text-blue-gray-900">
        <Link to={"/"}>
          <Avatar variant="square" src={NoteImg} />
        </Link>
        <div className="">
          <Link to={"/"}>
            <Button variant="text" size="md" className="bg-gray-100">
              Add Note
            </Button>
          </Link>
          <Link to={"/notes"}>
            <Button variant="text" size="md" className="bg-gray-100 ml-3">
              View Notes
            </Button>
          </Link>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
