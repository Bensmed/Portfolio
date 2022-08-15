import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://linkedin.com/in/mohambuildmed-bensouna' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/Bensmed' target='_blank'>
        <AiFillGithub />
      </a>
      {/* <a href='#'>
        <FaFacebookF />
      </a> */}
    </div>
  );
};

export default SocialMedia;
