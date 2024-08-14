import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/10.jpg';
import i05 from '../../public/landing/12.jpg';
import i06 from '../../public/landing/06.png';
import ico01 from '../../public/landing/icons/ico-01.png';
import Faqs from '../components/faqs';
import { useRouter } from 'next/router';

export default function Home() {
  const [lastClick, setLastClick] = useState('fullScroll');
  const router = useRouter();

  const {query: {product}} = router;
  console.log('product', product);

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Agenda una asesoría',
    // description: 'Solicita una asesoría de nuestro ingeniero sin costo',
    description: 'Resuelve todas tus dudas y maximiza tus ahorros para el retiro.',
  };

  return (
    <>
      <section
        className={`relative min-h-[80vh] w-full flex flex-col justify-center items-center bg-cover bg-center`}
        style={{backgroundImage: `url(/landing/00.png)`}}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 z-10"/>

        <div className="container w-full flex flex-col md:items-start text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative font-medium ft-9 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Olvídate de la pensión que nunca tendrás.<br/>Mejor asegura un retiro digno y sin dramas con un plan de
            ahorro.
          </h1>
          <p className="md:w-2/3 ft-2 font-medium mt-12">Contratación en línea</p>
          <p className="md:w-2/3 ft-2 font-medium">Atención personalizada</p>
          <p className="md:w-2/3 ft-2 font-medium mb-12">Acompañamiento 24/7</p>
          <div className="flex flex-col justify-center items-center md:items-start mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 md:text-left mb-12">{cta.description}</p>
          </div>
        </div>
        <div className="absolute flex flex-col justify-center items-center text-white bottom-8 mt-8 md:mt-20 z-10">
          <p className="ft-1">Sigue leyendo</p>
          <div className="animate-bounce">
            <div className="ft-3 material-icons mx-auto">expand_more</div>
          </div>
        </div>
        <div className="w-full h-full absolute bg-black/30 -z-1"/>
      </section>

      <section className="reading-container mb-16">
        <div className="flex border-b border-brand-1 pb-4 mb-8">
          <span className="material-icons mr-2 -ft-2">timer</span>
          <p className="-ft-2" style={{marginBlockEnd: 0}}>Conoce los principales beneficios en 4 min</p>
        </div>
        <p className="ft-2">
          Entendemos que el mejor plan de ahorro es aquel que te deja dormir tranquilo,<br/>
          aquel que de viejo te deje feria para no tener que comer Maruchans todos los días.<br/><br/>
          El chiste es que tengas un Plan de Ahorro para tu Retiro, que se adapte a tus posibilidades y metas.<br/><br/>
          Y que te cuides de asesorías y planes chafas que te van a querer vender nomás por su comisión.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('story')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        anchor="#benefits"
        overhead="Beneficios"
        title="Estamos en contra de la miseria de las afores, apuéstale a tu tranquilidad."
        image={i05}
      />
      <section className="my-16">
        <p className="reading-container">
          Sé que la incertidumbre te quita el sueño, por eso seleccionamos planes de
          ahorro que te aseguren tener el control de tu futuro.
          <br/><br/>
          La solución que te proponemos tiene tres pilares clave:</p>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-12 bg-white border border-neutral-200 rounded-xl shadow-lg">
          <h3 className="mb-8">Flexibilidad Total</h3>
          <p>Puedes ajustar tus aportes cuando lo necesites. ¿Tu negocio va viento en popa? Aumenta el ahorro. ¿Las
            cosas
            están flojas? Baja la aportación sin penalizaciones.</p>
          </div>
          <div className="p-12 bg-white border border-neutral-200 rounded-xl shadow-lg">
          <h3 className="mb-8">Protección Ante Todo</h3>
          <p>No importa si hay imprevistos, tu plan está diseñado para que tu lana esté protegida en cualquier
            situación.
            Porque aquí no jugamos con tu seguridad.</p>
          </div>
          <div className="p-12 bg-white border border-neutral-200 rounded-xl shadow-lg">
          <h3 className="mb-8">Personalización Real</h3>
          <p>Sé que no hay dos personas iguales, por eso adaptamos el plan a tus necesidades específicas. Nada de
            fórmulas
            mágicas ni moldes rígidos.</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        anchor="#process"
        overhead="Proceso"
        title="Somos expertos en convertir planes de ahorro en algo tan simple como preparar un café."
        image={i03}
      />
      <section className="my-16">
        <p className="reading-container">
          ¿Te preocupa no saber qué pasará con tu dinero? <br/><br/>Tranquilo, eso se resuelve en 5 pasos:
        </p>

        <div className="container">
          <ul className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <li className="flex flex-col w-full h-full items-center">
              <p
                className="h-16 w-16 rounded-full bg-blue-100 flex justify-center items-center mb-8 text-gray-800 font-bold">1</p>
              <div
                className="w-full text-center lg:text-left p-8 text-brand-1 border border-blue-400 bg-blue-50 shadow-lg rounded-2xl flex-grow">
                <h3 className="mb-8">Evaluamos y cotizamos</h3>
                <p>Evaluamos juntos tus necesidades y capacidad real de ahorro para cotizar tu plan.</p>
              </div>
            </li>
            <li className="flex flex-col w-full h-full items-center">
              <p
                className="h-16 w-16 rounded-full bg-blue-100 flex justify-center items-center mb-8 text-gray-800 font-bold">2</p>
              <div
                className="w-full text-center lg:text-left p-8 text-brand-1 border border-blue-400 bg-blue-50 shadow-lg rounded-2xl flex-grow">
                <h3 className="mb-8">Asesoría de estrategia</h3>
                <p>Diseñamos un par de estrategias que te muestren cómo vas a llegar a tus objetivos de ahorro.</p>
              </div>
            </li>
            <li className="flex flex-col w-full h-full items-center">
              <p
                className="h-16 w-16 rounded-full bg-blue-100 flex justify-center items-center mb-8 text-gray-800 font-bold">3</p>
              <div
                className="w-full text-center lg:text-left p-8 text-brand-1 border border-blue-400 bg-blue-50 shadow-lg rounded-2xl flex-grow">
                <h3 className="mb-8">Contratación</h3>
                <p>Nuestro equipo se encarga de que tu proceso de contratación sea totalmente transparente.</p>
              </div>
            </li>
            <li className="flex flex-col w-full h-full items-center">
              <p
                className="h-16 w-16 rounded-full bg-blue-100 flex justify-center items-center mb-8 text-gray-800 font-bold">4</p>
              <div
                className="w-full text-center lg:text-left p-8 text-brand-1 border border-blue-400 bg-blue-50 shadow-lg rounded-2xl flex-grow">
                <h3 className="mb-8">Entrega de póliza</h3>
                <p>Así de simple como suena, te entregamos tu póliza de ahorro.</p>
              </div>
            </li>
            <li className="flex flex-col w-full h-full items-center">
              <p
                className="h-16 w-16 rounded-full bg-blue-100 flex justify-center items-center mb-8 text-gray-800 font-bold">5</p>
              <div
                className="w-full text-center lg:text-left p-8 text-brand-1 border border-blue-400 bg-blue-50 shadow-lg rounded-2xl flex-grow">
                <h3 className="mb-8">Seguimiento de tu plan</h3>
                <p>Si requieres modificaciones, aclaraciones o cualquier tipo de ayuda, nosotros nos encargamos.</p>
              </div>
            </li>
          </ul>
        </div>
        <p className="reading-container">
          La experiencia nos ha enseñado que un buen plan es aquel que te permite disfrutar del presente sin
          perder de vista el futuro.
        </p>

        <div className="flex flex-col justify-center items-center my-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('process')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>

      </section>

      <Blockbuster
        anchor="#target"
        overhead="Target"
        title="Estás cansado de escuchar cómo todo el mundo tiene un plan para el retiro, menos tú."
        image={i02}
      />
      <section className="reading-container text-center my-16">
        <h3 className="ft-6">Si andas en tus 30's y puedes ahorrar unos $2,500mxn al mes, vas a retirarte a tus 65 con
          más de $3mdp</h3>
        <p className="ft-0">* esta información puede tener ligeras variaciones, te sugerimos cotizar para tener una
          estimación más certera.</p>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('target')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        anchor="#guarantees"
        overhead="Garantías"
        title="Aquí no te dejamos solo después de la compra, es más siempre contestamos en menos de 15min"
        image={i04}
      />
      <section className="container my-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          <div className="relative flex flex-col items-center rounded-2xl border border-neutral-200 shadow-xl p-16">
            <div className="relative w-1/2 pt-[30%]">
              <Image src={ico01} layout="fill" objectFit="contain"/>
            </div>
            <h4 className="text-center my-8">Cobertura personalizada</h4>
            <p className="text-center">Nos encargamos de encontrar el plan que se adapte mejor a tu economía y a tus
              necesidades para que puedas protegerte sin excusas.</p>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl border border-neutral-200 shadow-xl p-16">
            <div className="relative w-1/2 pt-[30%]">
              <Image src={ico01} layout="fill" objectFit="contain"/>
            </div>
            <h4 className="text-center my-8">Ahorro inteligente</h4>
            <p className="text-center">Diseñamos planes que no solo te protegen, sino que también te ayudan a ahorrar y
              hacer crecer tu dinero.</p>
          </div>
          <div className="relative flex flex-col items-center rounded-2xl border border-neutral-200 shadow-xl p-16">
            <div className="relative w-1/2 pt-[30%]">
              <Image src={ico01} layout="fill" objectFit="contain"/>
            </div>
            <h4 className="text-center my-8">Tranquilidad garantizada</h4>
            <p className="text-center">Acceso a servicios de salud, asistencia legal y financiera de la más alta calidad
              y atención 24/7 para cualquier emergencia</p>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('guarantees')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>


      <Blockbuster
        anchor="#faqs"
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí"
        image={i06}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-2 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold text-white tracking-wide">
              Listo, obtén una asesoría gratuita para comenzar a asegurar tu futuro
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Ya llegaste hasta acá, <br/>
                ya le dedicaste unos minutos de tu valioso tiempo a leer esta información.
                <br/><br/>
                Regálanos unos datos y agenda una sesión con nosotros.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
