import { Navbar, Typography, Button, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NoteImg from "../Images/notes.png";

const Header = () => {
  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full">
      <div className="relative flex justify-around items-center text-blue-gray-900">
        <Link to={"/"}>
          <Avatar variant="square" src={NoteImg} />
        </Link>
        <div className="">
          <Link to={"/"}>
            <Button variant="text" size="sm" className="bg-blue-gray-50">
              Add Note
            </Button>
          </Link>
          <Link to={"/notes"}>
            <Button variant="text" size="sm" className="bg-blue-gray-50 ml-3">
              View Notes
            </Button>
          </Link>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
