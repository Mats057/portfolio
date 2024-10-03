import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SocialMenu } from "@/components/social-menu";

function Contato() {
  const [t] = useTranslation();
  const contactFormSchema = z.object({
    nome: z
      .string()
      .min(3, t("contactPage.errors.nameMin"))
      .max(50, t("contactPage.errors.nameMax")),
    email: z.string().email(t("contactPage.errors.email")),
    msg: z
      .string()
      .min(10, t("contactPage.errors.msgMin"))
      .max(500, t("contactPage.errors.msgMax")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="flex flex-col items-center justify-center mt-8 min-h-[80svh]">
      <h1 className="text-4xl font-bold">{t("contactPage.title")}</h1>
      <p className="text-lg">{t("contactPage.subtitle")}</p>
      <section className="flex flex-col items-center">
        <form
          className="flex flex-col items-center justify-center mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder={t("contactPage.name")}
            className={`w-96 p-2 my-2 border-2 rounded-md ${
              errors.nome ? "border-red-500" : "border-primary"
            }`}
            {...register("nome")}
          />
          {errors.nome && (
            <span className="text-red-500 text-sm">{errors.nome.message}</span>
          )}
          <input
            type="email"
            placeholder={t("contactPage.email")}
            className={`w-96 p-2 my-2 border-2 rounded-md ${
              errors.email ? "border-red-500" : "border-primary"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
          <textarea
            placeholder={t("contactPage.message")}
            className={`w-96 p-2 my-2 border-2 rounded-md ${
              errors.msg ? "border-red-500" : "border-primary"
            }`}
            {...register("msg")}
          />
          {errors.msg && (
            <span className="text-red-500 text-sm">{errors.msg.message}</span>
          )}
          <button className="bg-primary text-background dark:text-secondary p-2 rounded-md w-96 my-4 disabled:bg-foreground disabled:text-accent">
            {t("contactPage.send")}
          </button>
        </form>
        <p className="text-lg text-primary font-semibold">
          {t("contactPage.or")}
        </p>
        <SocialMenu animate={false} />
      </section>
    </main>
  );
}

export default Contato;
