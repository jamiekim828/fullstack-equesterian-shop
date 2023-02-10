import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import LogInForm from './userForm/LogInForm';
import RegisterForm from './userForm/RegisterForm';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [openLogIn, setOpenLogIn] = useState<boolean>(true);
  const [openRegister, setOpenRegister] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <nav className='flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto'>
            <Link to='/rider' className='mr-5 hover:text-gray-900 uppercase'>
              Rider
            </Link>
            <Link
              to='/horse'
              className='mr-5 ml-2 hover:text-gray-900 uppercase'
            >
              Horse
            </Link>
            <Link to='/' className='mr-5 ml-2 hover:text-gray-900 uppercase'>
              New Arrivals
            </Link>
            <Link to='/' className='ml-2 hover:text-gray-900 uppercase'>
              Sale
            </Link>
          </nav>
          <Link
            to='/'
            className='flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0'
          >
            <BedroomBabyIcon sx={{ fontSize: '30px' }} />
            <span className='ml-3 text-3xl uppercase'>Equesterian</span>
          </Link>
          <div className='lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0'>
            <Link to='/cart' className='ml-5'>
              <Badge badgeContent={2} color='primary'>
                <LocalMallIcon />
              </Badge>
            </Link>
            <Link to='/' className='ml-5'>
              <AccountCircleIcon onClick={handleClickOpen} />
            </Link>
            <Dialog open={open} onClose={handleClose}>
              <DialogActions>
                <CloseIcon onClick={handleClose} className='cursor-pointer' />
              </DialogActions>
              <div className='flex flex-row justify-center'>
                <p
                  className={`mx-10 text-xl cursor-pointer ${
                    openLogIn === true && 'text-sky-800'
                  }`}
                  onClick={() => {
                    setOpenLogIn(true);
                    setOpenRegister(false);
                  }}
                >
                  Log in
                </p>
                <p
                  className={`mx-10 text-xl cursor-pointer ${
                    openRegister === true && 'text-sky-800'
                  }`}
                  onClick={() => {
                    setOpenLogIn(false);
                    setOpenRegister(true);
                  }}
                >
                  New customer
                </p>
              </div>
              <DialogContent>
                {openLogIn === true && <LogInForm handleClose={handleClose} />}
                {openRegister === true && (
                  <RegisterForm
                    handleClose={handleClose}
                    setOpenLogIn={setOpenLogIn}
                    setOpenRegister={setOpenRegister}
                    setOpen={setOpen}
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
    </div>
  );
}
