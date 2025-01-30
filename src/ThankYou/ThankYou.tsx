import { Typography } from "@alfalab/core-components/typography";
import cool from "../assets/cool.png";
import { thxSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";

export const ThankYou = () => (
    <>
      <div className={thxSt.container} style={{ height: "100vh" }}>
        <img alt="Картинка смайлика" src={cool} width={200} />
        <Gap size={48} />
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Мы получили Ваши данные и свяжемся с Вами в ближайшее время
        </Typography.Text>
      </div>
    </>
);
