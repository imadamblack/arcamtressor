import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Por qué necesito un seguro si ya tengo seguro social?",
      a: "Contar con un seguro te asegura tu bienestar completo ya que en muchas ocasiones el seguro social no cuenta con las herramientas o atención que requieres ante una emergencia."
    },
    {
      q: "¿Cómo puedo estar seguro de que recibiré ayuda rápida en caso de emergencia?",
      a: "Tu bienestar es lo más importante para nosotros, por eso nuestro equipo te brinda atención inmediata para atender cualquier solicitud."
    },
    {
      q: "¿Qué ventajas fiscales obtengo al contratar un seguro con Arcam Tressor?",
      a: "Al contratar cualquier seguro con nosotros lo podrás deducir de tus impuestos."
    },
    {
      q: "¿Es complicado el proceso para contratar una póliza?",
      a: "Sabemos lo valioso que es tu tiempo, por eso nos aseguramos de que todo sea claro y fácil de entender para que puedas contar con tu seguro lo más pronto posible."
    },
    {
      q: "¿Cuál es el primer paso para contratar un seguro con ustedes?",
      a: "Es muy sencillo, llena el formulario que aparece aquí abajo y nos pondremos en contacto contigo para asesorarte lo más pronto posible."
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