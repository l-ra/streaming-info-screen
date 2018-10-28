import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneIcon from '@material-ui/icons/Done';
import { Typography } from '@material-ui/core';


const AgendaItem = ({ onClick, index, text , selected}) => {
    //console.log(`${index}: ${selected}: ${text}`)
    let itemText = (index+1)+". "+text
    return (
        <ListItem button onClick={()=>{onClick(index, text)}} selected={selected}>
            <ListItemIcon>
                <DoneIcon />
            </ListItemIcon>
            <ListItemText 
                disableTypography 
                primary={<Typography type="h1" style={{ fontSize: "160%" }}>{itemText}</Typography>} />
        </ListItem>
    )
}



AgendaItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}



export default AgendaItem