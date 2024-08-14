import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Qué pasa si no puedo seguir aportando al plan?",
      a: "No hay problema. Nuestro plan es flexible y se ajusta a tus circunstancias. Puedes reducir o pausar tus aportes sin penalización."
    },
    {
      q: "¿Cómo sé que mi dinero está seguro?",
      a: "Trabajamos con las principales aseguradoras del país, garantizando que tu dinero está protegido y en las mejores manos."
    },
    {
      q: "¿Qué beneficios fiscales obtengo?",
      a: "Además de asegurar tu futuro, nuestros planes te permiten deducir impuestos, lo que significa que ahorras más de lo que inviertes."
    },
    {
      q: "¿Puedo personalizar mi plan de acuerdo a mis necesidades?",
      a: "Absolutamente. Cada plan se diseña específicamente para ti, con total flexibilidad en aportaciones y coberturas."
    },
    {
      q: "¿Qué ocurre si necesito retirar dinero antes del tiempo pactado?",
      a: "Dependiendo del plan, existen opciones para retiros parciales sin penalización, asegurándote siempre acceso a tus fondos cuando lo necesites."
    }
  ]

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}