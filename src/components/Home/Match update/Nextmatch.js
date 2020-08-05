import React from 'react';
import './Nextmatch.css';
import Tablebg from './assets/table_bg/match-bg2.jpg'

const Nextmatch = () => { 
    return (
        <section className="m-section"> <img src={Tablebg} alt="Table"></img>
            <div className="ms-container">
                <div className="left-container">
                    <h4>Upcoming Matches</h4>
                    <table>
                        <tbody>
                    <tr>
                            <td className="left-team">Tampere SC</td>
                            <td className="ms-op">VS<div className="ms-date">10 Sep 2020</div></td>
                            <td className="right-team">Helsinki SC</td>
                            </tr>
                            </tbody>
                    </table>
                    <table>
                        <tbody>
                    <tr>
                            <td className="left-team">Turku SC</td>
                            <td className="ms-op">VS<div className="ms-date">10 Sep 2020</div></td>
                            <td className="right-team">Vaasa SC</td>
                            </tr>
                            </tbody>
                    </table>
                    <table>
                        <tbody>
                    <tr>
                            <td className="left-team">Jyväskylä SC</td>
                            <td className="ms-op">VS<div className="ms-date">10 Sep 2020</div></td>
                            <td className="right-team">Tampere SC</td>
                            </tr>
                            </tbody>
                    </table>
                </div>
               
                <div className="right-container">
                    <h4>Recent Matches</h4>
                    <table>
                        <tbody>
                    <tr>
                            <td className="left-team">Team 1</td>
                            <td className="ms-op">VS<div className="ms-date">10 Sep 2020</div></td>
                            <td className="right-team">Team 2</td>
                            </tr>
                            </tbody>
                    </table>
                    <table>
                        <tbody>
                    <tr>
                            <td className="left-team">Team 1</td>
                            <td className="ms-op">VS<div className="ms-date">10 Sep 2020</div></td>
                            <td className="right-team">Team 2</td>
                            </tr>
                            </tbody>
                    </table>
                    <table>
                        <tbody>
                    <tr>
                            <td className="left-team">Team 1</td>
                            <td className="ms-op">VS<div className="ms-date">10 Sep 2020</div></td>
                            <td className="right-team">Team 2</td>
                            </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Nextmatch;