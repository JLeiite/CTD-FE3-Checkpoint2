import styles from "./Card.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";


//import {useState, useEffect} from 'react'

const Card = (props) => {
  const {nome, sobrenome, matricula} = props.dados;
  const { theme } = useContext(ThemeContext);
//  const {matricula, setMatricula} = useState("")
  const navigate = useNavigate()
  
useEffect(() => {
  const token = localStorage.getItem("ctd_token");

  console.log("Token no contexto: " + token);
  if(token == null){
    navigate("/login")
  }
  else{
    
  }
}, []);

  //useEffect(() => {
   // const response = localStorage.getItem("@dentista_matricula");
   // saveMatricula(response);
  //}, []);
  
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card ${theme === "dark"? "dark" : ""}`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <Link to = {`/detail/${matricula}`}>
            <h5 className={`card-title ${styles.title}`}>{nome} {sobrenome}</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
