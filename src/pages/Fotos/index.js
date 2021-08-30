import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import Loading from '../../components/Loading';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Fotos({ match }) {
  const dispatch = useDispatch();
  const id = get(match, 'params.id', '');
  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`func/mostrar/${id}`);
        setFoto(get(data, 'Photos[0].url', ''));
        setIsLoading(false);
      } catch (err) {
        toast.error('Erro ao obter a imagem');
        setIsLoading(false);
        history.push('/');
      }
    };
    getData();
  }, [id]);

  const handleChange = (e) => {
    const foto = e.target.files[0];
    const fotoUrl = URL.createObjectURL(foto);
    setFoto(fotoUrl);

    const formData = new FormData();
    formData.append('funcionarios_id', id);
    formData.append('photo', foto);
    try {
      setIsLoading(true);
      axios.post('upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('foto enviada com sucesso');
      history.push('/funcionarios');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Erro ao Enviar foto');

      if (status === 401) dispatch(actions.loginFailure);
    }
  };
  return (
    <Container>
      <S.Container>
        <Loading isLoading={isLoading} />
        <h1>Foto</h1>
        <S.Form>
          <label htmlFor="foto">
            {foto ? <img src={foto} alt="Foto" /> : 'Selecionar'}
          </label>
          <input type="file" id="foto" onChange={handleChange} />
        </S.Form>
      </S.Container>
    </Container>
  );
}
Fotos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
