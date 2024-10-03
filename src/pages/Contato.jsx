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
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="flex flex-col items-center justify-center mt-16">
      <h1 className="text-4xl font-bold">{t("contactPage.title")}</h1>
      <p className="text-lg">{t("contactPage.subtitle")}</p>
      <section className="flex flex-col items-center">
        <form
          className="flex flex-col items-start justify-left mt-8"
          onSubmit={handleSubmit(onSubmit)}
        > 
          <label htmlFor="nome">{t("contactPage.name")}</label>
          <input
            type="text"
            placeholder="John Doe"
            className={`w-96 p-2 my-2 border-2 dark:border-foreground bg-background focus:bg-foreground rounded-md ${
              errors.nome ? "border-red-500 dark:border-red-500" : "border-primary"
            }`}
            {...register("nome")}
          />
          {errors.nome && (
            <span className="text-red-500 text-sm -mt-1 mb-2">{errors.nome.message}</span>
          )}
          <label htmlFor="email">{t("contactPage.email")}</label>
          <input
            type="email"
            placeholder="johndoe@mail.com"
            className={`w-96 p-2 my-2 border-2 dark:border-foreground bg-background focus:bg-foreground rounded-md ${
              errors.email ? "border-red-500 dark:border-red-500" : "border-primary"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm -mt-1 mb-2">{errors.email.message}</span>
          )}
          <label htmlFor="msg">{t("contactPage.message")}</label>
          <textarea
            rows={4}
            placeholder={t("contactPage.messagePlaceholder")}
            className={`w-96 p-2 my-2 border-2 dark:border-foreground bg-background focus:bg-foreground rounded-md ${
              errors.msg ? "border-red-500 dark:border-red-500" : "border-primary"
            }`}
            {...register("msg")}
          />
          {errors.msg && (
            <span className="text-red-500 text-sm -mt-1 mb-2">{errors.msg.message}</span>
          )}
          <button type="submit" className="bg-primary dark:bg-secondary hover:bg-primary/80 dark:hover:bg-secondary/80 text-background dark:text-primary p-2 rounded-md w-96 my-4 disabled:bg-foreground disabled:text-accent dark:disabled:bg-foreground dark:disabled:text-accent transition-colors"  disabled={!isValid}>
            {t("contactPage.send")}
          </button>
        </form>
        <p className="text-lg text-primary font-semibold">
          {t("contactPage.or")}
        </p>
        <SocialMenu animate={false} className="mt-4" />
      </section>
    </main>
  );
}

export default Contato;
