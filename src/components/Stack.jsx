import React from 'react'
import '../styles/Stack.css'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import py from '../assets/py.svg'
import dj from '../assets/dj.svg'
import react from '../assets/react.svg'
import tail from '../assets/tail.svg'
import docker from '../assets/cocker.svg'
import aws from '../assets/aws.svg'
import sass from '../assets/sass.svg'
import mongo from '../assets/mongo.png'
import postgre from '../assets/p.svg'

export const Stack = () => {
  return (
    <div className='stackdiv'>
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={sass} alt="" />
        <img src={js} alt="" />
        <img src={py} alt="" />
        <img src={dj} alt="" />
        <img src={mongo} alt="" />
        <img src={postgre} alt="" />
        <img src={react} alt="" />
        <img src={tail} alt="" />
        <img src={docker} alt="" />
        <img src={aws} alt="" />
    </div>
  )
}
