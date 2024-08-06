import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i01 from '../../public/landing/01.png';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/04.png';
import i05 from '../../public/landing/05.png';
import i06 from '../../public/landing/06.png';
import ico01 from '../../public/landing/icons/ico-01.png';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('fullScroll');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Solicita tu asesoría gratuita',
    // description: 'Solicita una asesoría de nuestro ingeniero sin costo',
    description: 'Agenda una asesoría patrimonial sin costo.',
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
            Aún crees que el gobierno te va a mantener en tu vejez...<br/>
            y que Santa Claus cabe por la chimenea.
          </h1>
          <p className="md:w-2/3 ft-2 font-medium my-12">Comienza a asegurar tu futuro financiero</p>
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
          Queremos ser el apoyo necesario frente a eventos inesperados,
          como emergencias médicas o siniestros de todo tipo.
          <br/><br/>
          Y tu soporte para que logres asegurar la educación universitaria de tus hijos o un buen ahorro para tu retiro.
          <br/><br/>
          Para que tú te dediques a cumplir tus objetivos financieros y a celebrar los momentos felices con tu familia
          como la llegada de un nuevo integrante.
          <br/><br/>
          Sin que te tengas que descapitalizar.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a onClick={() => setLastClick('story')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="No se trata de venderte un seguro, sino de asegurar tu bienestar completo."
        image={i05}
      />
      <section className="reading-container my-16">
        <p>Estamos de acuerdo que más vale póliza en mano que cientos volando… o cómo va?</p>
        <p className="font-bold">Te voy a dar 3 razones de por qué debes contratar una póliza de gastos médicos o ahorro
          patrimonial</p>
        <h3>Proteges tu dinero</h3>
        <p>Más vale pagar un deducible en un accidente que puede surgir en cualquier momento,
          a tener que sacar todo el dinero del banco, vender tus activos o pedir que te adelanten la tanda.</p>
        <h3>Tu YO del futuro te lo va a agradecer</h3>
        <p>A ver, si empezaste a cotizar en el IMSS antes del 97, probablemente esto no es para ti.
          Pero si no, un plan de ahorro para el retiro puede ser la decisión más inteligente de tu vida.</p>
        <h3>Garantizas tu tranquilidad</h3>
        <p>Tener una póliza de gastos médicos y un ahorro patrimonial te va a permitir disfrutar de la vida, andar de
          viaje, practicando tu deporte favorito y todas esas cosas que te emocionan, sin miedo.</p>
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
        overhead="Productos"
        title="A ver, nosotros sí te protegemos en todo momento"
        image={i01}
      />
      <section className="container my-16">
        <div className="reading-container">
          <p>Conoce los productos con los que podemos ayudarte a tener futuro sin preocupaciones</p>
        </div>
        <div className="relative w-full">
          <div className="absolute lg:hidden bottom-4 right-4 z-10 animate-pulse">
            <div className="material-icons ft-10">arrow_forward</div>
          </div>
          <div className="absolute lg:hidden bottom-4 left-4 z-10 animate-pulse">
            <div className="material-icons ft-10">arrow_backward</div>
          </div>
          <div className="mt-12 relative w-full h-[16rem] lg:h-auto">
            <div
              className="flex lg:flex-wrap lg:w-full absolute lg:relative px-10 -right-8 -left-8 lg:ml-16 overflow-scroll snap-mandatory snap-x justify-start lg:justify-center">
              <div className="min-w-[36rem] md:w-1/3 snap-center p-4">
                <div className="w-full bg-brand-3 rounded-xl p-12 ft-3 font-bold text-center text-gray-800">Gastos
                  Médicos
                </div>
              </div>
              <div className="min-w-[36rem] md:w-1/3 snap-center p-4">
                <div className="w-full bg-brand-3 rounded-xl p-12 ft-3 font-bold text-center text-gray-800">Seguro
                  Patrimonial
                </div>
              </div>
              <div className="min-w-[36rem] md:w-1/3 snap-center p-4">
                <div className="w-full bg-brand-3 rounded-xl p-12 ft-3 font-bold text-center text-gray-800">Seguro de
                  Vida
                </div>
              </div>
              <div className="min-w-[36rem] md:w-1/3 snap-center p-4">
                <div className="w-full bg-brand-3 rounded-xl p-12 ft-3 font-bold text-center text-gray-800">Plan de
                  Retiro
                </div>
              </div>
              <div className="min-w-[36rem] md:w-1/3 snap-center p-4">
                <div className="w-full bg-brand-3 rounded-xl p-12 ft-3 font-bold text-center text-gray-800">Plan
                  Educación
                  Universitaria
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reading-container">
          <div className="flex flex-col justify-center items-center">
            <Link href="#contact">
              <a onClick={() => setLastClick('products')} className="button mb-4">{cta.main}</a>
            </Link>
            <p className="-ft-2 text-center">{cta.description}</p>
          </div>
        </div>
      </section>

      <Blockbuster
        overhead="Proceso"
        title="Más que una agencia de seguros: somos expertos en proteger tu vida y tus finanzas."
        image={i02}
      />
      <section className="reading-container my-16">
        Ahora sí, qué vamos a hacer por ti.
        <br/><br/>
        Tu vida está llena de responsabilidades y decisiones más importantes
        que preocuparte en vano por cosas que nosotros podemos controlar.
        <br/><br/>
        Por eso queremos que confíes en nosotros para asegurar tu bienestar y el de tu familia.
        <br/><br/>
        Alcanzar tu tranquilidad solo requiere 6 pasos:
        <br/><br/>
        <ol>
          <li className="ft-1 mb-8">Tenemos una cita para conocernos y revisamos qué plan necesitas.</li>
          <li className="ft-1 mb-8">Creamos propuestas de pólizas a tu medida, adaptadas a tus metas financieras y
            familiares.
          </li>
          <li className="ft-1 mb-8">Una vez que elijas tu seguro, reunimos todos los documentos necesarios.</li>
          <li className="ft-1 mb-8">Emitimos la póliza y te hacemos entrega detallando las especificaciones de la
            misma.
          </li>
          <li className="ft-1 mb-8">Tendrás oportunidad de revisar la póliza con el fin de asegurar tu satisfacción.
          </li>
          <li className="ft-1 mb-8">Te brindamos apoyo continuo para resolver tus dudas y darte la tranquilidad de que
            estás haciendo la mejor inversión
          </li>
        </ol>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('process')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>

      </section>

      <Blockbuster
        overhead="Target"
        title="Si no quieres estar viviendo al día a tus 50, 60 o 70 años, es tu momento de contactarnos."
        image={i03}
      />
      <section className="reading-container my-16">
        <p>
          Afrontar una emergencia sin estar preparado, te puede llevar a tomar decisiones
          que pongan en riesgo tu patrimonio.
          <br/><br/>
          En cambio, con un seguro adecuado y a tu medida,
          no solo te proteges de esos imprevistos
          sino que fortaleces tu situación financiera a largo plazo.
          <br/><br/>
          Te ayudamos a proteger tu futuro con <b>planes desde $20,000 pesos anuales</b>, con el objetivo de que
          comiences
          a planificar tu vida desde hoy y no lo dejes para <b>tu yo del futuro</b>.
          <br/><br/>
          Puedes estar seguro de que el plan que armemos estará diseñado para que nosotros nos encarguemos de todo.
        </p>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('target')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      {/*<Blockbuster*/}
      {/*  overhead="Testimonios"*/}
      {/*  title="Déjanos proteger tu futuro, te prometemos cuidarte mejor de lo que tú lo harías."*/}
      {/*  image={i05}*/}
      {/*/>*/}
      {/*<section className="container my-16">*/}
      {/*  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">*/}
      {/*    <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">*/}
      {/*      <div className="relative w-2/3 pt-[100%]">*/}
      {/*        <Image src={ico04} layout="fill" objectFit="contain"/>*/}
      {/*      </div>*/}
      {/*      <h4 className="text-center my-8">Recibe descuentos a partir de la compra de 5 lts</h4>*/}
      {/*    </div>*/}
      {/*    <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">*/}
      {/*      <div className="relative w-2/3 pt-[100%]">*/}
      {/*        <Image src={ico05} layout="fill" objectFit="contain"/>*/}
      {/*      </div>*/}
      {/*      <h4 className="text-center my-8">Resultados visibles en 48 hrs</h4>*/}
      {/*    </div>*/}
      {/*    <div className="relative flex flex-col items-center rounded-2xl border border-brand-6 p-16">*/}
      {/*      <div className="relative w-2/3 pt-[100%]">*/}
      {/*        <Image src={ico06} layout="fill" objectFit="contain"/>*/}
      {/*      </div>*/}
      {/*      <h4 className="text-center my-8">Envío gratis a toda la República Mexicana</h4>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="reading-container">*/}
      {/*    <div className="flex flex-col justify-center items-center">*/}
      {/*      <Link href="#contact">*/}
      {/*        <a onClick={() => setLastClick('testimonials')} className="button mb-4">{cta.main}</a>*/}
      {/*      </Link>*/}
      {/*      <p className="-ft-2 text-center">{cta.description}</p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <Blockbuster
        overhead="Garantías"
        title="Tu dinero, tu salud y tu tranquilidad están asegurados."
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
              Listo, es momento de tener tu primer asesoría patrimonial gratuita
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
