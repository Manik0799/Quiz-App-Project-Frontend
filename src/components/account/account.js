import { useState } from "react";
import ModalDialogs from "../modal-dialog/modal-dialog";
import classes from "./account.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchToken } from "../../Auth";

export default function Account() {
  // define state, logic to authenticate user
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const token = fetchToken()
  const user_data = JSON.parse(atob(token.split('.')[1]))

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

  const signOut = () => {
        localStorage.removeItem('userToken')
        navigate("/");
    }


  return (
    <div className={classes.account}>
      
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
             <p>{user_data.email}</p>
          </MenuItem>
          <MenuItem onClick={handleCollapseDetails}>
             <strong>{user_data.userType.charAt(0).toUpperCase() + user_data.userType.slice(1)}</strong>
          </MenuItem>
          {/* <MenuItem>
            <Link to="/change-password-page">Change Password</Link>
          </MenuItem> */}
          <MenuItem onClick={signOut}>
            <p>Signout</p>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
