import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity,faFlag,faFutbol,faMars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitterSquare,faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import './Detail.css';
const Details = () => {
    const {apiKey} = useParams();
    const [club, setClub] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
            const clubInfo = data.teams.find(cd=> cd.idAPIfootball === apiKey);
            setClub(clubInfo);
        })
        },[apiKey]);
        console.log(club);
    return (
        <div className='club-info'>
            <div>
                <img id='banner' src={club.strStadiumThumb} alt=""/>
                <img id='logo' src={club.strTeamBadge} alt=""/>
            </div>
            <div className='info-div'>
                <div className='team-info'>
                    <h1>{club.strTeam}</h1>
                    <h5><FontAwesomeIcon icon={faUniversity} /> Founded: {club.intFormedYear}</h5>
                    <h5><FontAwesomeIcon icon={faFlag} /> Country: {club.strCountry}</h5>
                    <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {club.strSport}</h5>
                    <h5><FontAwesomeIcon icon={faMars} /> Gender: {club.strGender}</h5>
                </div>
                <div>
                    <img id='team-pic' src='https://image.api.playstation.com/vulcan/img/rnd/202011/0200/rzdKIO41DWh8hX44ZNFVjTwy.jpg' alt=""/>
                </div>
            </div>
            <div className='description'>
                <p>
                    <h5>🏆  Introduction:</h5> {club.strDescriptionEN} <br/>
                    <h5>🏆  Stadium Information:</h5> {club.strStadiumDescription} <br/>
                    <h5>🏆  Stadium location:</h5> {club.strStadiumLocation} <br/>
                </p>
            </div>
            <div className='icons'>
                <a href={club.strTwitter}><FontAwesomeIcon id='twitter' icon={faTwitterSquare} /></a>
                <a href={club.strFacebook}><FontAwesomeIcon id='fb' icon={faFacebook} /></a>
                <a href={club.strYoutube}><FontAwesomeIcon id='youtube' icon={faYoutubeSquare} /></a>
            </div>
        </div>
    );
};

export default Details;