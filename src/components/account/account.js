import { useState } from "react";
import ModalDialogs from "../modal-dialog/modal-dialog";
import classes from "./account.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

export default function Account() {
  // define state, logic to authenticate user
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCollapseDetails = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  let div1text = "To sign in with a class code";
  let div2text = "Use an authorized account";
  let div3text = "Use a class code with 5-7 letters or numbers without spaces";
  let div4text = "Ask your teacher for the class code.";

  return (
    <div className={classes.account}>
      {modalOpen && (
        <ModalDialogs
          open={modalOpen}
          close={handleClose}
          title="Join Class"
          button1="Join"
          contentDiv1={div1text}
          bulletList1={div2text}
          bulletList2={div3text}
          contentDiv2={div4text}
        />
      )}
      {/* <span
        className="material-icons-outlined"
        title="Join Class"
        onClick={handleClick}
      >
        add
      </span> */}
      <IconButton aria-label="Join Class" onClick={handleClick}>
        <AddOutlinedIcon />
      </IconButton>
      <div className={classes.profileMenu}>
        <IconButton
          aria-label="account of current user"
          aria-haspopup="true"
          // title="UserAccount"
          onClick={handleMenu}
        >
          <AccountCircleOutlinedIcon />{" "}
          {/*show icon and username after user logged in */}
        </IconButton>
        <Menu
          sx={{ top: 50 }}
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleCollapseDetails}
        >
          <MenuItem onClick={handleCollapseDetails}>
            <p>Nischal Gupta</p>
          </MenuItem>
          <MenuItem onClick={handleCollapseDetails}>
            <p>nischalg.cs.18@nitj.ac.in</p>
          </MenuItem>
          <MenuItem>
            <Link to="/change-password-page">Change Password</Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
