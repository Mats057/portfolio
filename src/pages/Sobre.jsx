import { useTranslation } from "react-i18next";

function Sobre(){
    const [t] = useTranslation();

    return (
        <main className="flex flex-col items-center justify-center">
            <section className="flex flex-col items-start justify-center text-xl">
                <h1 className="text-4xl font-bold self-center p-4">Who am<span className="text-secondary"> I?</span></h1>
                <p>Oi, seja bem vindo ao meu portfólio. 👋🏽</p>
                <p>Me chamo <span className="text-secondary">Matheus Queiroz Zanutin.</span></p>
                <p>Nasci e moro em <span className="text-secondary">São Paulo, Brasil.</span></p>
                <p>Estou atualmente cursando <span className="text-secondary">Engenharia de Software</span> na <span className="text-primary">FIAP</span>.</p>
                <p>Sou formado no técnico em <span className="text-secondary">Desenvolvimento de Sistemas</span> pela <span className="text-primary">ETEC</span>.</p>
                <p>Estou em busca da minha <span className="text-secondary">primeira oportunidade</span> no mercado de trabalho.</p>
            </section>
        </main>
    )
}

export default Sobre