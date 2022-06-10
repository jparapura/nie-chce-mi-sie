import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);   
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 60vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  line-height: 25px;
`;

const MyProfile = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <Message>
            <h2>Mój profil</h2>
            <p>Zalogowano {user.token.length < 500 ? "bez użycia" : "z użyciem"} Google</p>
            <strong>Imię i nazwisko: </strong>
            <p>{user.result.name}</p>
            <strong>Email: </strong>
            <p>{user.result.email}</p>
            {user.token.length < 500 ? (
                <>
                    <strong>Identyfikator w bazie: </strong>
                    <p>{user.result._id}</p>
                </>
            ) : (
                <>
                    <strong>GoogleId: </strong>
                    <p>{user.result.googleId}</p>
                </>
            )}
        </Message>
    );
};

export default MyProfile;
