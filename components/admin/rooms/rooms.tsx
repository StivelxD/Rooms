const Rooms = () => {
  return (
    <div>
      <div className='relative'>
        <h1 className='text-3xl font-bold'>Habitaciones</h1>
      </div>
      <div>
        <div>
          <select name='state'>
            <option>Estado</option>
            <option>Disponible</option>
            <option>Ocupada</option>
          </select>

          <select name='state'>
            <option>Estudio</option>
            <option>Laureles</option>
            <option>Poblado</option>
          </select>
        </div>

        <div>
          <button>Presentar </button>
          <button>Crear habitación </button>
        </div>
      </div>

      <div>
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
