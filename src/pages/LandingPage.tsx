import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Logo } from "../assets/Logo"
import { ReactLogo } from "../assets/ReactLogo"
import * as codeMockup from "../assets/code.png"
import toast, { Toaster } from "react-hot-toast"
import {
  useCreateSubscriberMutation,
  usePublishSubscriberMutation,
} from "../graphql/generated"

export function LandingPage() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [createSubscriber, { data, loading, error }] =
    useCreateSubscriberMutation()

  const [publishSubscriber] = usePublishSubscriberMutation()

  const successNotification = () =>
    toast.custom(() => (
      <div className="w-[300px] h-[120px] p-5 mt-5 rounded bg-primary-green-regular text-white text-2xl font-bold">
        Parabéns! Você foi inscrito com successo!
      </div>
    ))

  const errorNotification = () =>
    toast.custom((err) => (
      <div className="w-[300px] h-[120px] p-5 mt-5 rounded-sm bg-primary-redError text-white text-2xl font-bold uppercase">
        Infelizmente ocorreu algum erro de inscrição.
      </div>
    ))

  const notify = (msg: string) => toast(msg)

  async function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const result = await createSubscriber({ variables: { name, email } })

      if (result.data?.createSubscriber) {
        await publishSubscriber({
          variables: { id: result.data.createSubscriber.id },
        })
        successNotification()
        setTimeout(() => navigate("/event"), 2000)
      }
    } catch (error) {
      errorNotification()
    }
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center max-h-full">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-primary-blue">aplicação completa</strong>,
            do zero, com <strong className="text-primary-blue">React</strong>
          </h1>
          <p className="mt-4 leading-relaxed text-primary-text-secondary">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com altíssima demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <ReactLogo className="absolute top-0 left-[30%] -z-10" />
        <div className="p-8 bg-primary-gray-elements rounded border border-primary-gray-strokeDivider">
          <strong className="text-2xl mb-6 block">
            Increva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-primary-gray-strokeDivider rounded h-14 px-5 border-2 border-transparent hover:border-primary-blue focus:border-primary-blue focus:outline-none transition-colors"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-primary-gray-strokeDivider rounded h-14 px-5  border-2 border-transparent hover:border-primary-blue focus:border-primary-blue focus:outline-none transition-colors"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu e-mail"
            />

            <button
              type="submit"
              disabled={loading}
              className={
                loading
                  ? "mt-4 rounded font-bold uppercase text-sm py-4 bg-primary-gray-elements disabled:opacity-40 text-primary-warning"
                  : "mt-4 bg-primary-green-regular uppercase py-4 rounded font-bold text-sm hover:bg-primary-green-dark transition-colors"
              }
            >
              {loading ? "Enviando inscrição..." : "Inscrever-se"}
            </button>
          </form>
        </div>
      </div>

      <img src={codeMockup.default} alt="Code Mockup" className="mt-10" />
      <Toaster />
    </div>
  )
}
