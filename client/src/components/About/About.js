import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 55%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);   
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 90vh;
  padding: 20px;
  display: flex;
  text-align: justify;
  text-justify: inter-word;
  flex-direction: column;
`;

const Header = styled.span`
    font-size: ${props => props.primary ? "200px" : "105px"}
    margin: 0px;
    text-align: left;
    font-weight: bold;
`;

const About = () => {
    return (
        <Container>
            <Header primary>O stronie</Header>
            <p>Za dużo obowiązków? Nie masz ochoty czegoś robić? Podziel się tym ze wszystkimi!</p>
            <Header>Zrealizowane funkcjonalności frontendowe:</Header>
            <ul>
              <li>5 podstron</li>
              <li>Single Page Application</li>
              <li>Accordion</li>
              <li>Infinite scrolling</li>
              <li>Obrazki z systemem komentarzy</li>
              <li>Autoryzacja z użyciem Google</li>
              <li>Technologia: ReactJS</li>
            </ul>
            <Header>Zrealizowane funkcjonalności backendowe:</Header>
            <ul>
              <li>Tabele bazodanowe: Użytkownicy, Posty, Administratorzy</li>
              <li>Autoryzacja użytkowników</li>
              <li>System uprawnień (tylko twórcy posta mogą go edytować i usuwać)</li>
              <li>Upload plików</li>
              <li>Technologie: NodeJS, ExpressJS, MongoDB</li>
            </ul>
        </Container>
    );
};

export default About;
