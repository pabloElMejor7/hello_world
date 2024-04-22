import { useState, useEffect } from 'react';

export function Paneles() {
  const [clickedPanel, setClickedPanel] = useState(null);

  useEffect(() => {

    // const handleClickInsidePanel = (panel) => {
    //   setClickedPanel(panel);
    // };

    const handleClickOutsidePanel = (event) => {
      if (!event.target.closest('.panel')) {
        setClickedPanel(null);
      }
    };

    document.addEventListener('click', handleClickOutsidePanel);

    return () => {
      document.removeEventListener('click', handleClickOutsidePanel);
    };
  }, []);

  const handlePanelClick = (panel) => {
    if (clickedPanel === panel) {
      setClickedPanel(null);
    } else {
      setClickedPanel(panel);
    }
  };

  const isPanelClicked = (panel) => {
    return clickedPanel === panel;
  };

  return (
    <div className="container_paneles">
      <div className="sub_paneles">
        <div className="primer_panel">
          <div className='tendencias-primer-panel' style={{ display: isPanelClicked('primer') ? 'block' : 'none' }}>
                <div className="card">
                    <img src="https://llerosadreams.es/wp-content/uploads/2020/04/lenguajes-programacion.png" width={200} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Lo ultimo en hardware y computcion</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://blog.ssd.com.py/wp-content/uploads/2022/06/informatica-lenguajes-de-programacion-SSD-Paraguay-jpg-1.jpg" width={200} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Los ultimos codigos de la nasa</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://www.globbit.com/wp-content/uploads/2016/07/lenguaje-programaci%C3%B3n-portada.jpg" width={200} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Lo ultimo  en tecnologia</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://llerosadreams.es/wp-content/uploads/2020/04/lenguajes-programacion.png" width={200} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">Los ultimos codigos de youtube</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

          </div>
          <div className={`primera_capa panel ${isPanelClicked('primer') ? 'clicked' : ''}`} onClick={() => handlePanelClick('primer')} style={{ width: isPanelClicked('primer') ? '60%' : '100%' }}>
            <h1>Tendencias</h1>
            <p>Consiste en que un artista publique una ilustración original con la etiqueta , invitando a otros artistas a reinterpretarla en su propio estilo.</p>
          </div>
        </div>
        <div className="segundo_panel">
          <div className={`segunda_capa panel ${isPanelClicked('segundo') ? 'clicked' : ''}`} onClick={() => handlePanelClick('segundo')} style={{ width: isPanelClicked('segundo') ? '60%' : '100%' }}>
            <h1>Chat</h1>
            <p>Este tipo de conversación puede surgir espontáneamente en respuesta a un tema de interés común, una pregunta, un evento actual o simplemente como una interacción social casual. La naturaleza del chat que se hace es fluida y orgánica, ya que no está necesariamente guiada por un guion preestablecido o un objetivo específico.</p>
          </div>
        </div>
        <div className="tercer_panel">
          <div className={`tercera_capa panel ${isPanelClicked('tercer') ? 'clicked' : ''}`} onClick={() => handlePanelClick('tercer')} style={{ width: isPanelClicked('tercer') ? '60%' : '100%' }}>
            <h1>Blok</h1>
            <p>Genera comentarios con un contenido específico, para que las personas den su opinión de lo que haces.</p>
          </div>
        </div>
        <div className="cuarto_panel">
          <div className={`cuarta_capa panel ${isPanelClicked('cuarto') ? 'clicked' : ''}`} onClick={() => handlePanelClick('cuarto')} style={{ width: isPanelClicked('cuarto') ? '60%' : '100%' }}>
            <h1>Post</h1>
            <p>Postea sobre tu vida y los hobbies que te gustan practicar, no importa cuál sea, sé tú mismo y atrévete con tus actitudes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
