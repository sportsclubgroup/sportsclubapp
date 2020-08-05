import React from 'react';
import './Ranking.css';

const Ranking = () => { 
    return (
        <div className="row">
            <div className="col-lg-8"><h4>Latest News<hr></hr></h4></div>
            <div className="col-lg-4"><h4>Club Ranking<hr></hr></h4></div>
            <div className="points-table">
                <table>
                    <thead>
                        <tr>
                            <th className="th-o">Pos</th>
                            <th>Team</th>
                            <th className="th-o">W</th>
                            <th className="th-o">L</th>
                            <th className="th-o">PTS</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}

export default Ranking;