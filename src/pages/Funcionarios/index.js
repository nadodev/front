import React, { useEffect, useState } from 'react';
import { get } from 'lodash';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUserCircle, FaEdit, FaTrash, FaExclamation } from 'react-icons/fa';
import axios from '../../services/axios';

// Estilos
import * as S from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Funcionarios() {
  // Estados
  const [func, setFunc] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsloading(true);
      const response = await axios.get('/func/editar');
      setFunc(response.data);
      setIsloading(false);
    }
    getData();
  }, []);

  // funçao para mudar icone de deletar usuario
  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'inline');
    e.currentTarget.remove();
  };

  // funçao para deletar usuario
  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsloading(true);
      await axios.delete(`/func/delete/${id}`);
      const novosFunc = [...func];
      novosFunc.splice(index, 1);
      setFunc(novosFunc);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('Voce precisa fazer login');
      } else {
        toast.error('Ocorreu uma erro ao excluir funcionario');
      }
    }
  };

  return (
    <Container>
      <S.Container>
        <h1>Funcionarios</h1>
        <S.Links to="/func">Cadastrar</S.Links>

        <S.Func>
          {func.map((resp, index) => (
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
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                  <span className="ativo">Ativo</span>
                ) : (
                  <span className="inativo">Inativo</span>
                )}
              </div>
              <div className="status">
                <Link to={`/func/${resp.id}/edit`}>
                  <FaEdit />
                </Link>
                <Link
                  onClick={handleDeleteAsk}
                  to={`/register/${resp.id}/edit`}
                >
                  <FaTrash />
                </Link>
                <FaExclamation
                  size={16}
                  display="none"
                  cursor="pointer"
                  onClick={(e) => handleDelete(e, resp.id, index)}
                />
              </div>
            </div>
          ))}
        </S.Func>
      </S.Container>
    </Container>
  );
}
