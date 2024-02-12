import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import teams from '../../Assets/Data/team.json';
import myPics from '../../Assets/Images/profileme.png';
import './team.scss'

function Team() {
  return (
    <div className='container p-5'>
      <h1 className='p-4 text-center fw-bold'>OUR TEAM</h1>
      <div className='row row-cols-md-2 row-cols-lg'>
        {teams.map((team, index) => {
          return (
            <div
              data-aos='flip-left'
              key={index}
              className='d-flex justify-content-center shadow flex-column text-center align-items-center p-4'
            >
              <p>
                <img width={'200px'} src={myPics} alt='my-image' />
              </p>
              <p classname="fw-bold">{team.name}</p>
              <h4>{team.title}</h4>
              <p style={{fontStyle:'italic'}} ><em><q>{team.desc}</q></em></p>
              <div className='social-media d-flex gap-4'>
                <a href={team.socialMedia.github} target='_blank' id='media_logo' className='d-flex align-items-center gap-1' rel='noopener noreferrer'>
                  <BsGithub /> GitHub
                </a>
                <a href={team.socialMedia.linkedin} target='_blank' id='media_logo' className='d-flex align-items-center gap-1' rel='noopener noreferrer'>
                  <BsLinkedin /> LinkedIn
                </a>
                <a href={team.socialMedia.twitter} target='_blank' id='media_logo' className='d-flex align-items-center gap-1' rel='noopener noreferrer'>
                  <BsTwitter /> Twitter
                </a>
                <a href={`https://wa.me/${team.socialMedia.whatsapp}`} target='_blank' id='media_logo' className='d-flex align-items-center gap-1' rel='noopener noreferrer'>
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
