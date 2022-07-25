import React from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = [
    'option1',
    'option2',
    'option3',
    'option4',
    'option5',
    
]


export default function CardMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div className="card__menu">
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style={{borderRadius: '8px', padding: '0px 8px', transition: 'all 0.3s ease-in-out'}}
      >
        <i style={{fontSize: '16px'}} className="bi bi-three-dots-vertical"></i>

      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '15ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'option1'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
