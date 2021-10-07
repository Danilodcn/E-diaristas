import PageTitle from "ui/components/data_display/PageTitle/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironmet";
import UserInformation from "ui/components/data_display/UserInformation/UserInformation";

import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Eloisa Elena"}
        picture = {"https://cdn.pixabay.com/photo/2021/01/02/17/24/rear-5882411_960_720.jpg"}
        rating = {3}
        description = {"São Paulo"}
      />
    </div>
  );
};

export default Home;
