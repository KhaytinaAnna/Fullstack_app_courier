import React, {useState} from 'react';

import {Box, CircularProgress, Typography, TextField, Button} from "@mui/material";


import {registerCourier} from "../../../store/couriers/actions";
import {useDispatch, useSelector} from "react-redux";
import ModalWindow from "../../ModalWindow/ModalWindow";
import ErrorWindow from "../../ErrorWindow/ErrorWindow";
import {selectRegisterLoading, selectRequestCouriers} from "../../../store/couriers/selector";
import SuccessModal from "../../SuccessModal/SuccessModal";
import {REQUEST_STATUS} from "../../../utils/constants";

export const CourierRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  let [openModal, setOpenModal] = useState(false);
  const [coordinate, setCoordinate] = useState("");

  const couriersRequest = useSelector(selectRequestCouriers);

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleCoordChange = (e) => {
    setCoordinate(e.target.value);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch();
  const registrationClick = () => {
    dispatch(registerCourier(name, surname, email, password))
    setOpenModal(true)
  };

  const renderModal = () => {
    if (!openModal) {
      return null;
    };
    switch (couriersRequest.status) {
      case REQUEST_STATUS.PENDING: {
        return <CircularProgress/>
      };
      case REQUEST_STATUS.FAILURE: {
        return <ModalWindow
          openModal
          data={couriersRequest}
          component={ErrorWindow}
          closeModal={closeModal}
        />
      };
      case REQUEST_STATUS.SUCCESS: {
        return <ModalWindow
          openModal
          data={`Новый курьер ${name} ${surname} зарегистрирован!`}
          component={SuccessModal}
          closeModal={closeModal}
        />
      };
      default:
        return <></>
    };
   };

  return (
    <>
      <Box component="form"
           sx={{display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 500}}>

        <Typography variant='h4' my={2}>Управление курьерами</Typography>

        <TextField sx={{mt: 2}}
                   required
                   id="outlined-name-input"
                   label="name"
                   type="text"
                   autoComplete="current-name"
                   onChange={handleNameChange}
        />
        <TextField sx={{mt: 2}}
                   required
                   id="outlined-surname-input"
                   label="surname"
                   type="text"
                   autoComplete="current-surname"
                   onChange={handleSurnameChange}
        />
        <TextField sx={{mt: 2}}
                   required
                   id="outlined-email-input"
                   label="email"
                   type="email"
                   autoComplete="current-email"
                   onChange={handleEmailChange}
        />
        <TextField sx={{mt: 2}}
                   required
                   id="outlined-password-input"
                   label="password"
                   type="password"
                   autoComplete="current-password"
                   onChange={handlePassChange}
        />
        <TextField sx={{mt: 2}}
                   required
                   id="outlined-coord-input"
                   label="coordinate (ex: 55.684758,37.338521)"
                   type="text"
                   autoComplete="current-coord"
                   onChange={handleCoordChange}
        />
        <Box sx={{mt: 2}}>
          <Button variant={'contained'} onClick={registrationClick}>Зарегистрировать</Button>
        </Box>
      </Box>
      {renderModal()}
    </>
  )
};
