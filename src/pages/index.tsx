import { Button, Container, Typography, CircularProgress } from "@mui/material";
import PageTitle from "ui/components/data_display/PageTitle/PageTitle";
import UserInformation from "ui/components/data_display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironmet";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  FormElementContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from "ui/styles/index.style";
import useIndex from "data/hooks/pages/useIndex.page";

import { UserShortInterface } from "data/@types/UerInterface";
import type { NextPage } from "next";
import zIndex from "@mui/material/styles/zIndex";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
    precionaEnter,
    readInputCep,
  } = useIndex();
  // mostarDiaristas()
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <Container>
        <FormElementContainer>
          <TextFieldMask
            onKeyDown={(event) => precionaEnter(event)}
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant="outlined"
            value={cep}
            onChange={(event) => readInputCep(event)}
          />

          {erro && cep != "" ? (
            <Typography color={"error"}> {erro} </Typography>
          ) : (
            <div></div>
          )}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais()}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementContainer>
        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((elem, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={elem.nome_completo}
                      picture={elem.foto_usuario}
                      rating={elem.reputacao}
                      description={elem.cidade}
                    />
                  );
                })}
              </ProfissionaisContainer>
              <Container sx={{ mt: 1, textAlign: "center" }}>
                {diaristasRestantes > 0 ? (
                  <Typography sx={{ mt: 1 }}>
                    ... e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? "profissionais atendem"
                      : "profissional atende"}{" "}
                    ao seu endereço
                  </Typography>
                ) : (
                  <></>
                )}

                <Button
                  variant={"contained"}
                  color={"secondary"}
                  sx={{ mt: 3 }}
                >
                  Contratar um profissional{" "}
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography
              align={"center"}
              color={"textPrimary"}
              sx={{ mt: 3, mb: 4 }}
            >
              Ainda não temos nenhuma diarista em sua região
            </Typography>
          ))}
      </Container>
    </div>
  );
};

export default Home;
