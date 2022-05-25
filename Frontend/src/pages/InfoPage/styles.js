import styled from 'styled-components'

export const StyledPagin = styled.div`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
h1 {
  color: #f6f6f6;
}

.div-logo {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
}

header {
  margin-bottom: 5%;
}
a {
  text-decoration: none;
}
.menu {
  content: "";
  position: relative;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.ul-menu {
  list-style: none;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.nav-logo {
  display: flex;
  max-width: 100%;
  background-color: #0d47a1;
  border: 1px solid rgb(238, 255, 0);
  justify-content: space-between;
  width: calc(130% - 20%);
  top: 0;
}

.logo1 {
  width: 4.5rem;
  margin: auto;
  border: 1px solid red;
}
.p {
  font-family: Goldman;
  color: #f6f6f6;
  font-size: 2rem;
  font-weight: 4;
  line-height: 45%;
  letter-spacing: 0em;
  text-align: center;
  border: 1px solid pink;
}

.fundo-h1 {
  font-family: Goldman;
  color: #f6f6f6;
  font-size: 7rem;
  font-weight: normal;
  line-height: 8rem;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 10rem;
  letter-spacing: 1px;
  text-shadow: 1px 2px 5px black;
}
.fundop {
  font-family: BenchNine;
  color: #f6f6f6;
  font-size: 2.4rem;
  font-weight: 40;
  line-height: 2rem;
  letter-spacing: 0em;
  text-align: center;
  text-shadow: 1px 1px 4px black;
}

.div-info {
  background-color: rgba(246, 246, 246, 50%);
  border-radius: 0.5rem;
  border: 2px solid #f9a826;
  width: 60%;
  height: 10rem;

  box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.24);

  margin: 7% auto;
  /* padding: 1%; */
}

.div-info p {
  font-family: BenchNine;
  color: #1e3f7f;
  font-size: 2rem;
  text-align: center;
  margin: 1.5%;
  /* margin: auto; */
}

.quadro-tudo h3 {
  font-size: 1.8rem;
  font-family: BenchNine;
  margin-left: 15%;
  color: #f6f6f6;
  font-weight: 100;
  margin-bottom: 0.5%;
}

.quadro-alugar {
  background-color: rgba(246, 246, 246, 50%);
  border-radius: 0.5rem;
  border: 2px solid #f9a826;
  width: 60%;
  height: 6rem;
  margin: auto;
  margin-bottom: 2%;
  /* padding: 0.4%; */
  text-align: center;
  display: flex;
  align-items: center;

  box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.24);
}
.quadro-alugar p {
  font-family: BenchNine;
  color: #1e3f7f;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  margin: 4%;
  /* margin: auto; */
}
.quadro-pagamento {
  background-color: rgba(246, 246, 246, 50%);
  border-radius: 0.5rem;
  border: 2px solid #f9a826;
  width: 60%;
  height: 6rem;
  margin: auto;
  margin-bottom: 2%;
  /* padding: 0.4%; */
  text-align: center;
  display: flex;
  align-items: center;

  box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.24);
}
.quadro-pagamento p {
  font-family: BenchNine;
  color: #1e3f7f;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  margin: 4%;
  /* margin: auto; */
}

.quadro-dias {
  background-color: rgba(246, 246, 246, 50%);
  border-radius: 0.5rem;
  border: 2px solid #f9a826;
  width: 60%;
  height: 8rem;
  margin: auto;
  margin-bottom: 2%;
  /* padding: 0.4%; */
  text-align: center;
  display: flex;
  align-items: center;

  box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.24);
}
.quadro-dias p {
  font-family: BenchNine;
  color: #1e3f7f;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  margin: 4%;
  /* margin: auto; */
}

.quadro-modelos {
  background-color: rgba(246, 246, 246, 50%);
  border-radius: 0.5rem;
  border: 2px solid #f9a826;
  width: 60%;
  height: 8rem;
  margin: auto;
  margin-bottom: 2%;
  /* padding: 0.4%; */
  text-align: center;
  display: flex;
  align-items: center;

  box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.24);
}
.quadro-modelos p {
  font-family: BenchNine;
  color: #1e3f7f;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  /* margin: 4%; */
  margin: auto;
}

.quadro {
  background-color: rgba(246, 246, 246, 50%);
  border-radius: 0.5rem;
  border: 2px solid #f9a826;
  width: 60%;
  height: 8rem;
  margin: auto;
  margin-bottom: 2%;
  /* padding: 0.4%; */
  text-align: center;
  display: flex;
  align-items: center;

  box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.24);
}
.quadro p {
  font-family: BenchNine;
  color: #1e3f7f;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  margin: 4%;
  margin: auto;
}

.quadro-modelos ul {
  /* display: flex; */
  font-family: BenchNine;
  color: #1e3f7f;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  margin: auto;
  /* gap: 10rem; */
}

footer {
  background-color: #f6f6f6;
  width: 100%;
  height: 14rem;
  margin-top: 5%;
}

.img-mulher {
  width: 10rem;
  height: 12rem;
  margin-left: 65rem;
  margin-top: 1.2rem;
}

.img {
  margin-left: 10rem;
  margin-top: -7rem;
  display: flex;
  /* width: 15rem; */
  height: 1.5rem;
  justify-content: space-between;
  width: 30rem;
}

.face {
  margin-left: 5rem;
}

.lin {
  margin-left: 5rem;
}

.p1 {
  margin: auto;
  color: #f9a826;
  font-family: BenchNine;
  font-weight: 700;
}

#alugar {
  color: #1e3f7f;
  margin-left: -10rem;
}

`
