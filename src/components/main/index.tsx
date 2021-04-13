import * as S from './styles';

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo src="/images/world-map.svg" alt="Imagem do mapa múndi" />
      <S.Title>Testing with Jest</S.Title>
      <S.Description>Typescript, ReactJS e Styled Components</S.Description>
      <S.Illustration
        src="/images/hero-illustration.svg"
        alt="Desenvolvedor atuando em um computador"
      />
    </S.Wrapper>
  );
}
