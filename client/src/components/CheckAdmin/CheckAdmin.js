import React, { useState, useEffect } from 'react';
import * as api from '../../api';
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

const ChechAdmin = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [adminStatus, setAdminStatus] = useState('Fetching data...');

    useEffect(() => {
        async function fetchData() {
            const message = await api.checkAdmin(user?.result?._id);
            setAdminStatus(message.data.message);
        }
        if (user && user.token.length < 500) {
            fetchData();
        }
        else if (user && user.token.length >= 500) {
            setAdminStatus("Użytkownik zalogowany przy użyciu Google nie może być administratorem.");
        }
        else {
            setAdminStatus("Zaloguj się, aby wyświetlić te sekcję.");
        }
    }, [user]);

    return (
        <Message>
            <strong>Status bycia administratorem:</strong>
            {adminStatus}
        </Message>
    );
};

export default ChechAdmin;
