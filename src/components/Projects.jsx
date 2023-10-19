import React from "react";
import "../styles/Projects.css";
import land from '../assets/landing.png'
import blog from '../assets/blog.png'
import quiz from '../assets/quiz2.png'
import api1 from '../assets/code-ecommerce.png'
import api2 from '../assets/api2.png'
import { Card } from "./Card";
export const Projects = () => {
  return (
    <>
      <div className="text">
        <h3>Projects & Apis</h3>
        <h2>Each project is a unique piece of development 🧩</h2>
        <Card title={'Blog'} parraph={'Blog style application developed with Django RestFramework and React native. It uses a JWT Authentication system, which authorizes requests to the backend, which is in charge of the main CRUD. It has a user system, post filtering, Update and Login'} image={blog} footer={'ivanDev.'}></Card>
        <Card title={'Trivia game'} parraph={'Trivia application developed with React and Tailwind. It consists of several categories where each one has several questions with options to choose from.'} image={quiz} footer={'ivanDev.'}></Card>
        <Card title={'Landing page'} parraph={'Landing page developed with HTML and CSS which simulates offering a web application development service'} image={land} footer={'ivanDev.'}></Card>
        <Card title={'Ecommerce Api'} parraph={'Api developed in Django ready to be consumed that simulates being an Ecommerce with JWT Authentication system, Cart, Invoice Issuance and more'} footer={'ivanDev'} image={api1}></Card>
        <Card title={'Websocket Chat Api'} parraph={'Real-time chat application using ASGI servers and Django channels that simulates a real-time chat room'} footer={'ivanDev'} image={api2}></Card>
      </div>
    </>
  );
};
