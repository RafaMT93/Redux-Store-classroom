const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

const aluno = {
  nome: 'Rafael Tiburcio',
  email: 'rafael@outlook.com',
  diasRestantes: 120,
};

export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const modificarEmail = (payload) => ({ type: MODIFICAR_EMAIL, payload });

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      aluno.diasRestantes++;
      break;
    case REDUZIR_TEMPO:
      aluno.diasRestantes--;
      break;
    case MODIFICAR_EMAIL:
      aluno.email = action.payload;
      break;
  }
}, aluno);

export default reducer;
