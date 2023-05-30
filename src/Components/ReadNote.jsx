import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const ReadNote = ({ title, description, onClose }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>
          <Typography type="h2" color="blueGray">
            {title}
          </Typography>
        </DialogHeader>
        <DialogBody divider className="h-[40rem] overflow-scroll">
          <Typography type="p" color="blueGray">
            {description}
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleClose}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default ReadNote;
