import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import './Teams.css';
const Teams = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams));
    }, [setTeam]);
    return (
        <div className='team'>
            <div id='clubs'>
                {
                    team.map(clubs => <Cart clubs={clubs}></Cart>)
                }
            </div>
        </div>
    );
};

export default Teams;