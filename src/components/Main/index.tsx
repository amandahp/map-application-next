import * as S from './styles';

const ReactAvancado = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.png"
        alt="Imagem de um átomo e React avançado escrito ao lado."
      />
      <S.Title>React Avançado!</S.Title>
      <S.Description>
        TypeScript, ReactJS, Next e Styled Components
      </S.Description>
      <S.Ilustration
        src="/img/codeilustration.png"
        alt="Pessoas utilizado o notebook"
      />
    </S.Wrapper>
  );
};

export default ReactAvancado;
