import { BiExitFullscreen } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

const Rooms = () => {
  return (
    <div>
      <div className="relative">
        <h1 className="text-4xl font-bold">Habitaciones</h1>
      </div>
      <div className="flex justify-between -ml-3 mt-8 mr-16">
        <div>
          <select
            name="state"
            className="text-lg border border-solid border-black py-2 px-12 mx-3"
          >
            <option>Estado</option>
            <option>Disponible</option>
            <option>Ocupada</option>
          </select>

          <select
            name="state"
            className="text-lg border border-solid border-black py-2 px-12 mx-3"
          >
            <option>Estudio</option>
            <option>Laureles</option>
            <option>Poblado</option>
          </select>
        </div>

        <div className="flex justify-center items-center">
          <button className="text-lg border border-solid border-black py-2 px-10 mx-3 flex">
            Presentar
            <span>
              <BiExitFullscreen className="text-2xl ml-2" />
            </span>
          </button>
          <button className="text-lg border border-solid border-black py-1 px-12 bg-gray-900 text-white flex items-center">
            Crear Habitación
            <span>
              <BiPlus className="text-4xl text-blue-400 ml-2" />
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
        <div className="flex flex-col w-84 h-72 bg-green-400">
          <div>
            <img
              src="/static/images/conejo-grande.png"
              alt=""
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="flex">
            <p className="bg-black text-white px-6 py-4 text-lg">01</p>
            <p className="bg-blue-400 text-black text-lg px-24 py-4">
              Disponible
            </p>
          </div>
        </div>
        <div className="bg-green-500">
          <div>
            <img src="/static/images/conejo-grande.png" alt="" />
          </div>
          <div>
            <span className="bg-black text-white px-5 py-3">02</span>
            <span className="bg-blue-400 text-white px-16 py-3 -ml-1">
              Disponible
            </span>
          </div>
        </div>
        <div>
          <div>
            <img src="/static/images/conejo-grande.png" alt="" />
          </div>
          <div>
            <span className="bg-black text-white px-5 py-3">03</span>
            <span className="bg-blue-400 text-white px-16 py-3 -ml-1">
              Disponible
            </span>
          </div>
        </div>
        <div>
          <div>
            <img src="/static/images/conejo-grande.png" alt="" />
          </div>
          <div>
            <span className="bg-black text-white px-5 py-3">04</span>
            <span className="bg-gray-700 text-white px-16 py-3 -ml-1">
              No Disponible
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
