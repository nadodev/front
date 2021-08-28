/* eslint-disable no-template-curly-in-string */
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
            <div className="Content">
              <div className="imgContainer">
                {get(resp, 'Photos[0].url', false) ? (
                  <img src={resp.Photos[0].url} alt="" />
                ) : (
                  <FaUserCircle size={45} />
                )}
              </div>
              <div className="funcName">{resp.name}</div>
              <div className="conhecimentos">
                <p>({resp.conhecimentos})</p>
              </div>
              <div className="status">
                {resp.status ? (
                  <span className="ativo">Ativo</span>
                ) : (
                  <span className="inativo">Inativo</span>
                )}
              </div>
            </div>
          ))}
        </S.Func>
      </S.Container>
    </Container>
  );
}
