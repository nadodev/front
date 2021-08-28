import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { FaUserCircle } from 'react-icons/fa';
import * as S from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Funcionarios() {
  const [func, setFunc] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/func/mostrar');
      setFunc(response.data);
    }
    getData();
  }, []);
  return (
    <Container>
      <S.Container>
        <h1>Funcionarios</h1>
        <S.Func>
          {func.map((resp) => (
            <>
              <div className="funcName">{resp.name}</div>
              <div className="funcName">
                {get(resp, 'Photos[0].url', false) ? (
                  <img src={resp.Photos[0].url} alt="" />
                ) : (
                  <FaUserCircle />
                )}
              </div>
            </>
          ))}
        </S.Func>
      </S.Container>
    </Container>
  );
}
