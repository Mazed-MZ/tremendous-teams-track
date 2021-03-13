import React from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = (props) => {
    const { strTeam, strTeamBadge, strSport, idAPIfootball } = props.clubs;
    const handleClubInfo = (info) =>{
        console.log(info);
    }
    return (
        <div className='cart'>
            <div id='cart-text'>
                <img src={strTeamBadge} alt="" />
                <h3>{strTeam}</h3>
                <p>Sports Type: {strSport}</p>
                <Link to={'/club/'+idAPIfootball}><Button onClick={()=> handleClubInfo(props.clubs)} variant="contained" color="primary">Explore<FontAwesomeIcon icon={faArrowRight} /></Button></Link>
            </div>
        </div>
    );
};

export default Cart;