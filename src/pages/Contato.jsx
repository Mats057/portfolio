import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SocialMenu } from "@/components/social-menu";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useState } from "react";
import "ldrs/ring2";

function Contato() {
  const [t] = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    if (localStorage.getItem("contacted")) {
      toast.error(t("contactPage.errors.alreadySent"));
      return;
    } else {
      setIsSubmitting(true); // Desabilita o botão
      emailjs
        .send(
          "service_fbsudb9",
          "template_d6oh9mt",
          { from_name: data.nome, message: data.msg, contact_mail: data.email },
          "OgEbvFB4d0igC89ZA"
        )
        .then(
          () => {
            toast.success(t("contactPage.success"));
            localStorage.setItem("contacted", "true");
            setIsSubmitting(false); // Reabilita o botão
          },
          (error) => {
            toast.error(t("contactPage.errors.mailFailed"), {
              description: error.text,
            });
            setIsSubmitting(false); // Reabilita o botão mesmo em caso de erro
          }
        );
    }
  };

  return (
    <main className="flex flex-1 flex-grow flex-col items-center justify-center">
      <h1 className="text-4xl font-bold animate-in slide-in-from-top-4 duration-500 text-center">{t("contactPage.title")}</h1>
      <p className="text-lg animate-in slide-in-from-top-8 duration-500">{t("contactPage.subtitle")}</p>
      <section className="flex flex-col items-center justify-center w-full px-4">
        <form
          className="flex flex-col items-start w-full lg:w-auto justify-center mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="nome" className="animate-in slide-in-from-left">{t("contactPage.name")}</label>
          <input
            type="text"
            placeholder="John Doe"
            className={`w-full lg:w-96 p-2 my-2 border-2 dark:border-foreground bg-background focus:bg-foreground rounded-md animate-in slide-in-from-left duration-300 ${
              errors.nome
                ? "border-red-500 dark:border-red-500"
                : "border-primary"
            }`}
            {...register("nome")}
          />
          {errors.nome && (
            <span className="text-red-500 text-sm -mt-1 mb-2">
              {errors.nome.message}
            </span>
          )}
          <label htmlFor="email" className="animate-in slide-in-from-right">{t("contactPage.email")}</label>
          <input
            type="email"
            placeholder="johndoe@mail.com"
            className={`w-full lg:w-96 p-2 my-2 border-2 dark:border-foreground bg-background focus:bg-foreground rounded-md animate-in slide-in-from-right duration-300 ${
              errors.email
                ? "border-red-500 dark:border-red-500"
                : "border-primary"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-sm -mt-1 mb-2">
              {errors.email.message}
            </span>
          )}
          <label htmlFor="msg" className="animate-in slide-in-from-left">{t("contactPage.message")}</label>
          <textarea
            rows={4}
            placeholder={t("contactPage.messagePlaceholder")}
            className={`w-full lg:w-96 p-2 my-2 border-2 dark:border-foreground bg-background focus:bg-foreground rounded-md animate-in slide-in-from-left duration-300 ${
              errors.msg
                ? "border-red-500 dark:border-red-500"
                : "border-primary"
            }`}
            {...register("msg")}
          />
          {errors.msg && (
            <span className="text-red-500 text-sm -mt-1 mb-2">
              {errors.msg.message}
            </span>
          )}
          <button
            type="submit"
            className="bg-primary dark:bg-secondary hover:bg-primary/80 dark:hover:bg-secondary/80 text-background dark:text-primary p-2 rounded-md w-full lg:w-96 my-4 disabled:bg-foreground disabled:text-accent dark:disabled:bg-foreground dark:disabled:text-accent transition-colors"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center text-slate-600 justify-center gap-2">
                <l-ring-2
                  size="24"
                  stroke="4"
                  stroke-length="0.25"
                  bg-opacity="0.1"
                  speed="0.8"
                  color="#475569"
                ></l-ring-2>
                {t("contactPage.sending")}
              </span>
            ) : (
              t("contactPage.send")
            )}
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
