import React from 'react';
import superheroSearch from '../../images/Superhero-Project.png';
import dayPlanner from '../../images/Day-Planner.png';
import noteTaker from '../../images/Note-Taker.png';
import readmeGenerator from '../../images/Readme-Generator.png';
import employeeTracker from '../../images/Employee-Tracker.png'
import openMicNight from '../../images/Open-Mic-Night.png'
import '../../styles/Projects.css'

const styles = {
    portfolio: {
        backgroundColor: 'aquamarine',
        color: 'black',
        padding: '10px',
        fontFamily: 'Arial',
        fontSize: '15px',
        textAlign: 'center',
        margin: '0px'
    },
    imgStyles: {
        width: '25%',
        height: '25%',
        margin: '5rem',
        border: 'none',
    },
    pStyles: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divStyles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

function Project(props) {
    return (
        <div className="card" style={styles.portfolio}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                         <strong>GitHub:</strong> <a href={props.github} target='_blank'>{props.github}</a>
                    </li>
                    <li>
                        <strong>Deployed:</strong> <a href={props.deployed} target='_blank'>{props.deployed}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const projects = [
        {
            name: 'Superhero Search',
            github: 'https://github.com/sandregg2/Superhero-Search-SA.git',
            deployed: 'https://sandregg2.github.io/Superhero-Search-SA/'
        },
        {
            name: 'Day Planner',
            github: 'https://github.com/dkopac/Daily-Planner.git',
            deployed: 'https://dkopac.github.io/Daily-Planner/'
        },
        {
            name: 'Note Taker',
            github: 'https://github.com/dkopac/Note-Taker.git',
            deployed: 'https://note-taker-dk.herokuapp.com/'
        },
        {
            name: 'Readme Generator',
            github: 'https://github.com/dkopac/README-Generator.git',
            deployed: ''
        },
        {
            name: 'Employee Tracker',
            github: 'https://github.com/dkopac/SQL-Employee-Tracker.git',
            deployed: ''
        },
        {
            name: 'Open Mic Night',
            github: 'https://github.com/paulisturm/Local-Open-Mics.git',
            deployed: 'https://local-open-mics-3af6ed455b4c.herokuapp.com/#'
        },
    ];

    return (
        <div style={styles.portfolio}>
            <h1>Portfolio</h1>
            <img style={styles.imgStyles} src={superheroSearch} alt='Superhero Search' />
            <img style={styles.imgStyles} src={dayPlanner} alt='Day Planner' />
            <img style={styles.imgStyles} src={noteTaker} alt='Note Taker' />
            <img style={styles.imgStyles} src={readmeGenerator} alt='Readme Generator' />
            <img style={styles.imgStyles} src={employeeTracker} alt='Employee Tracker' />
            <img style={styles.imgStyles} src={openMicNight} alt='Open Mic Night' />
            <div class="container" style={styles.pStyles}>
                <Project
                    image={superheroSearch}
                    name={projects[0].name}
                    github={projects[0].github}
                    deployed={projects[0].deployed}
                />
                <Project
                    image={dayPlanner}
                    name={projects[1].name}
                    github={projects[1].github}
                    deployed={projects[1].deployed}
                />
                <Project
                    image={noteTaker}
                    name={projects[2].name}
                    github={projects[2].github}
                    deployed={projects[2].deployed}
                />
                <Project
                    image={readmeGenerator}
                    name={projects[3].name}
                    github={projects[3].github}
                    deployed={projects[3].deployed}
                />
                <Project
                    image={employeeTracker}
                    name={projects[4].name}
                    github={projects[4].github}
                    deployed={projects[4].deployed}
                />
                <Project
                    image={openMicNight}
                    name={projects[5].name}
                    github={projects[5].github}
                    deployed={projects[5].deployed}
                />
            </div>
        </div>
    );
}