import styled from "styled-components";

export const Section1div = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 120px;

  background: transparent;
  padding: 0;

  &.reverse {
    flex-direction: row-reverse;
  }

  /* TEXTO */
  .text {
    max-width: 520px;
  }

  .text h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .text p {
    font-size: 14px;
    line-height: 1.7;
    color: #333;
  }

  /* IMAGEM PRINCIPAL */
  img {
    width: 420px;
    border-radius: 18px;
    object-fit: cover;
  }

  /* GRID DE IMAGENS */
  .images-grid {
    position: relative;
    width: 460px;
    height: 420px;
  }

  /* 🔥 CUME2 (primeira imagem) puxada pra esquerda */
  .images-grid img:first-child {
    width: 320px;
    border-radius: 18px;
    position: relative;
    z-index: 2;

    transform: translateX(-60px); /* 👈 AQUI */
  }

  /* CUME3 (imagem de trás) */
  .images-grid img:last-child {
    width: 520px;
    border-radius: 18px;
    position: absolute;
    top: 80px;
    left: -50px;
    z-index: 1;
  }

  /* RESPONSIVO */
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;

    &.reverse {
      flex-direction: column;
    }

    img {
      width: 100%;
    }

    .images-grid {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .images-grid img,
    .images-grid img:last-child {
      position: relative;
      width: 100%;
      top: 0;
      left: 0;
      transform: none; /* 🔥 evita quebrar no mobile */
    }
  }
`;