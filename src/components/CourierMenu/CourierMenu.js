import {useNavigate} from "react-router-dom";
import Menu from "../../utils/Menu";
import * as React from "react";

export const CourierMenu = () => {

  const courierMenu = [
    {
      name: 'Основная страница',
      func: () => onMenuItemClick(''),
    },
    {
      name: 'История доставок',
      func: () => onMenuItemClick('CourierHistory'),
    },
  ];
  const navigate = useNavigate();

  const onMenuItemClick = (link) => {
    // console.log('onMenuItemClick', link)
    navigate('/CouriersPage/' + link)
  };

  return (
      <Menu menuItem={courierMenu}/>
  );
};




