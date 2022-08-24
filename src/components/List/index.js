import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import { EscalatorWarningSharp } from '@mui/icons-material';

export function ListComponent(earnings,outgoings) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    
    setChecked(newChecked);
  };
  
  return (
    <List dense sx={{ width: '100%', maxWidth: '98%', bgcolor: 'background.paper', margin: "15px"}}>
      {earnings.map((value) => {        
        const labelId = `checkbox-list-secondary-label`;
        return (
          <ListItem
          secondaryAction={
          <ListItemText> 
              <p>$ {value.value}</p>
          </ListItemText>
        }

            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                  <FontAwesomeIcon icon={faMoneyBill1Wave} color={"green"}/>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Concepto ${value.concept}`} />              
            </ListItemButton>
          </ListItem>          
        );
      })}
      {outgoings.map((value) => {        
        const labelId = `checkbox-list-secondary-label`;
        return (
          <ListItem
          secondaryAction={
          <ListItemText> 
              <p>$ {value.value}</p>
          </ListItemText>
        }

            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                  <FontAwesomeIcon icon={faMoneyBill1Wave} color={"red"}/>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`Concepto ${value.concept}`} />              
            </ListItemButton>
          </ListItem>          
        );
      })}
    </List>
  );
}
export default ListComponent;