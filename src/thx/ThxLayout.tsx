import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import cool from "../assets/cool.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";
import { Input } from "@alfalab/core-components/input";
import { useState } from "react";
import { Gap } from "@alfalab/core-components/gap";

export const ThxLayout = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка смайлика"
          src={cool}
          width={200}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="medium"
          defaultMargins={false}
          weight="bold"
          className={thxSt.title}
        >
          Уже разрабатываем
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Если хотите помочь или принять участие в тестировании сервиса —
          оставьте ваши данные для связи
        </Typography.Text>

        <Gap size={32} />

        <Input
          block={true}
          placeholder="Email или ник в telegram"
          labelView={"outer"}
          size={48}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href="">
          Отправить
        </ButtonMobile>
      </div>
    </>
  );
};
