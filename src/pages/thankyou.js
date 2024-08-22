import { info } from '../../info';

export default function ThankYou() {
  return (
    <section className="relative flex flex-col flex-grow justify-center pt-20 px-0">
      <div className="container md:w-1/2 flex flex-col items-center">
        <h2 className="ft-8 text-center">Listo, ya estás un paso adelante de todos los demás de tu generación</h2>
        <p className="text-center ft-4 mt-12">Te invito a que nos escribas por WhatsApp para que programemos tu asesoría.</p>
        <a
          className="button !bg-brand-5 ft-4 flex justify-center items-center mt-6"
          href={`https://wa.me/${info.whatsapp.value}?text=${info.whatsapp.message}`}
          target="_blank"
        >
          <span className="material-icons">arrow_forward</span>Da click aquí<span
          className="text-white material-icons">arrow_back</span>
        </a>
      </div>
    </section>
  );
}
