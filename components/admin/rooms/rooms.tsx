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

      <div className="grid grid-cols-4 gap-2 mt-10">
        <div>
          <div>
            <img />
          </div>
          <div>
            <span>01</span> <span>Disponible</span>
          </div>
        </div>
        <div>
          <div>
            <img />
          </div>
          <div>
            <span>01</span> <span>Disponible</span>
          </div>
        </div>
        <div>
          <div>
            <img />
          </div>
          <div>
            <span>01</span> <span>Disponible</span>
          </div>
        </div>
        <div>
          <div>
            <img />
          </div>
          <div>
            <span>01</span> <span>Disponible</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
