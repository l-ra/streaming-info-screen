import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import AgendaItem from './AgendaItem';
import './StreamAgenda.css';

const StreamAgenda = ({ onItemClick, items, currentIndex, showAgenda }) => {
  let elements = items.map((elm, idx, arr) => {
    //console.log(`${idx},${currentIndex},${elm}`)
    return (
      <AgendaItem onClick={onItemClick} key={idx} index={idx} text={elm} selected={idx === currentIndex} />
    )
  })

  //style={ {backgroundColor: "rgba(255,255,255,0.5)"} }

  let card = null;
  
  if (showAgenda) {
    card = (
      <Card raised={true} >
        <CardContent>
          <List component="nav">
            {elements}
          </List>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="StreamAgenda" >
      {card}
    </div>
  );

}

StreamAgenda.propTypes = {
  onItemClick: PropTypes.func,
  items: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  showAgenda: PropTypes.bool.isRequired,
}

export default StreamAgenda;
