
import React from 'react';
import { Header } from './components/Header';
import { ModuleCard } from './components/ModuleCard';
import { PleasurePainChart } from './components/PleasurePainChart';
import { AddictionCycleDiagram } from './components/AddictionCycleDiagram';
import { DopamineComparisonChart } from './components/DopamineComparisonChart';
import { Quiz } from './components/Quiz';
import { CheckCircleIcon, BrainIcon, BookOpenIcon, BarChartIcon, TargetIcon, SparklesIcon, HeartIcon } from './components/Icons';


const App: React.FC = () => {

  const learningObjectives = [
    "Comprender el vínculo biológico y psicológico entre placer y dolor.",
    "Identificar las estructuras cerebrales clave involucradas en el sistema dopaminérgico.",
    "Reconocer cómo los hábitos modernos alteran este balance natural.",
    "Aprender estrategias prácticas para regular la dopamina de forma saludable.",
    "Aplicar este conocimiento para aumentar la satisfacción y motivación diaria.",
  ];
  
  const pleasureTableData = [
    { immediate: "Comida ultraprocesada", sustainable: "Comida nutritiva preparada en casa" },
    { immediate: "Maratones de series/videos", sustainable: "Leer un libro o un capítulo" },
    { immediate: "Scroll infinito en redes sociales", sustainable: "Llamar a un amigo o familiar" },
    { immediate: "Compras impulsivas online", sustainable: "Aprender una nueva habilidad" },
    { immediate: "Videojuegos sin fin", sustainable: "Practicar un deporte o hobby" },
    { immediate: "Pornografía", sustainable: "Construir intimidad en una relación" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-5xl space-y-16">
        
        {/* Introduction */}
        <ModuleCard>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 flex items-center"><BookOpenIcon className="w-8 h-8 mr-3" /> Introducción</h2>
            <p className="text-lg mb-4">La relación placer-dolor es uno de los principios fundamentales que guían la conducta humana. Desde una perspectiva psicológica y neuropsicológica, ambos estados están profundamente conectados: el cerebro regula nuestra motivación, decisiones y bienestar equilibrando recompensas (placer) y castigos (dolor). Este balance no es casualidad; responde a millones de años de evolución para ayudarnos a sobrevivir.</p>
            <p className="text-lg">En el contexto moderno, donde el acceso al placer inmediato es más fácil que nunca, este mecanismo puede desajustarse, afectando nuestra felicidad y productividad. Comprender cómo funciona este sistema nos da el poder de regularlo y “hackearlo” para vivir más equilibrados. Aquí aprenderás cómo funciona esta conexión a nivel cerebral, ejemplos cotidianos de su influencia y estrategias prácticas para optimizar tu sistema dopaminérgico.</p>
        </ModuleCard>

        {/* Learning Objectives */}
        <ModuleCard>
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center"><TargetIcon className="w-8 h-8 mr-3" /> Objetivos de Aprendizaje</h2>
            <ul className="space-y-4">
                {learningObjectives.map((obj, index) => (
                    <li key={index} className="flex items-start text-lg">
                        <CheckCircleIcon className="w-6 h-6 mr-3 mt-1 text-green-400 flex-shrink-0" />
                        <span>{obj}</span>
                    </li>
                ))}
            </ul>
        </ModuleCard>

        {/* Module 1 */}
        <ModuleCard>
            <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">Módulo 1</h3>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 flex items-center"><BrainIcon className="w-8 h-8 mr-3" /> Fundamentos Neuropsicológicos</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-lg">
                   <p><strong className="text-slate-100">El sistema de recompensa:</strong> El cerebro posee un circuito dedicado a procesar el placer, compuesto por el <strong className="text-teal-300">Núcleo Accumbens</strong>, la <strong className="text-teal-300">Amígdala</strong> y la <strong className="text-teal-300">Corteza Prefrontal</strong>.</p>
                   <p><strong className="text-slate-100">La Dopamina:</strong> Es el neurotransmisor clave. No es la molécula del placer en sí, sino de la <strong className="text-rose-400">motivación y la anticipación</strong>. Nos impulsa a buscar cosas que creemos que nos darán placer.</p>
                   <p>El dolor y el placer se procesan en áreas cerebrales superpuestas. Esto significa que experimentar uno afecta directamente nuestra sensibilidad al otro, creando un delicado equilibrio.</p>
                </div>
                <div>
                  <h4 className="text-center font-bold text-slate-200 mb-2">La Balanza Placer-Dolor</h4>
                  <p className="text-center text-sm text-slate-400 mb-4">Un pico de placer es seguido por un "valle" de dolor para reestablecer el equilibrio (homeostasis).</p>
                  <PleasurePainChart />
                </div>
            </div>
        </ModuleCard>

        {/* Module 2 */}
        <ModuleCard>
            <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">Módulo 2</h3>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">El Ciclo Placer-Dolor y su Función Evolutiva</h2>
            <p className="text-lg mb-4">Evolutivamente, este ciclo era vital. El "dolor" del hambre nos motivaba (dopamina) a cazar (esfuerzo), culminando en el "placer" de comer (recompensa). Este sistema garantizaba nuestra supervivencia promoviendo conductas beneficiosas.</p>
            <p className="text-lg"><strong className="text-slate-100">El problema moderno:</strong> El acceso ilimitado a estímulos placenteros (comida, redes sociales) sin un esfuerzo previo rompe este ciclo. El cerebro se adapta, disminuyendo la sensibilidad al placer y aumentando la del dolor, lo que nos lleva a buscar estímulos cada vez más intensos.</p>
            <div className="mt-6 p-4 border border-slate-700 rounded-lg bg-slate-800/50">
                <h4 className="font-bold text-slate-100">Ejemplo Práctico:</h4>
                <p className="text-slate-300">Comer un trozo de chocolate en cualquier momento produce un pico de placer moderado. Sin embargo, comer ese mismo chocolate después de un período de ayuno (un "dolor" controlado) genera una respuesta de placer mucho más intensa y satisfactoria. El esfuerzo o la espera magnifican la recompensa.</p>
            </div>
        </ModuleCard>

        {/* Module 3 */}
         <ModuleCard>
            <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">Módulo 3</h3>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Ejemplos Cotidianos del Desequilibrio</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                 <ul className="space-y-3 text-lg">
                    <li className="flex items-center"><SparklesIcon className="w-5 h-5 mr-3 text-rose-400" />Redes sociales y el “scroll infinito”.</li>
                    <li className="flex items-center"><SparklesIcon className="w-5 h-5 mr-3 text-rose-400" />Comida ultraprocesada y atracones.</li>
                    <li className="flex items-center"><SparklesIcon className="w-5 h-5 mr-3 text-rose-400" />Maratones de series y falta de sueño.</li>
                    <li className="flex items-center"><SparklesIcon className="w-5 h-5 mr-3 text-rose-400" />Dependencia de compras en línea.</li>
                </ul>
                <div>
                   <h4 className="text-center font-bold text-slate-200 mb-2">El Ciclo Adictivo</h4>
                   <p className="text-center text-sm text-slate-400 mb-4">La búsqueda constante de picos de placer sin esfuerzo conduce a una espiral descendente.</p>
                   <AddictionCycleDiagram />
                </div>
            </div>
        </ModuleCard>
        
        {/* Module 4 */}
        <ModuleCard>
            <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">Módulo 4</h3>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 flex items-center"><HeartIcon className="w-8 h-8 mr-3" /> Hackeando el Sistema Dopaminérgico</h2>
            <p className="text-lg mb-6">Podemos "resetear" nuestro sistema dopaminérgico para encontrar más placer en las cosas simples. La clave es introducir voluntariamente <strong className="text-teal-300">esfuerzo y malestar controlado</strong> y espaciar las recompensas.</p>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                    <h4 className="text-xl font-bold text-slate-100 mb-3">Estrategias Clave:</h4>
                    <ul className="space-y-3 text-lg">
                        <li><strong className="text-green-400">Ejercicio Físico:</strong> Eleva la línea base de dopamina de forma sostenible.</li>
                        <li><strong className="text-green-400">Retos Controlados:</strong> Duchas frías, ayuno intermitente. Generan un "dolor" breve que potencia el placer posterior.</li>
                        <li><strong className="text-green-400">Mindfulness:</strong> Reduce la búsqueda impulsiva de recompensas y aumenta la apreciación del presente.</li>
                        <li><strong className="text-green-400">Espaciar Recompensas:</strong> Evita la "adaptación hedónica" (acostumbrarse al placer). Guarda esa serie o postre para el fin de semana.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl text-center font-bold text-slate-200 mb-2">Gratificación Inmediata vs. Diferida</h4>
                    <p className="text-center text-sm text-slate-400 mb-4">Las actividades que requieren esfuerzo (diferida) generan picos de dopamina menores pero más duraderos y elevan nuestra línea base de felicidad.</p>
                    <DopamineComparisonChart />
                </div>
            </div>
        </ModuleCard>
        
        {/* Module 5 */}
        <ModuleCard>
            <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">Módulo 5</h3>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Construyendo una Vida con Placer Sostenible</h2>
            <p className="text-lg mb-6">El objetivo no es eliminar el placer, sino cultivarlo de forma que nos enriquezca a largo plazo. Se trata de diseñar una vida con un balance saludable entre retos (esfuerzo) y recompensas, alineado con un propósito mayor.</p>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="p-4 bg-slate-800 border-b-2 border-slate-600 text-lg font-bold text-rose-400">Placer Inmediato (Picos Altos, Caídas Bajas)</th>
                            <th className="p-4 bg-slate-800 border-b-2 border-slate-600 text-lg font-bold text-green-400">Placer Sostenible (Línea Base Elevada)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-slate-800/50">
                        {pleasureTableData.map((row, index) => (
                            <tr key={index} className="border-b border-slate-700">
                                <td className="p-4">{row.immediate}</td>
                                <td className="p-4">{row.sustainable}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ModuleCard>

        {/* Practical Activity */}
        <ModuleCard>
          <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2">Actividad Práctica</h3>
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Pon a Prueba tu Conocimiento</h2>
          <p className="text-lg mb-6">Responde a este cuestionario de 20 preguntas para afianzar los conceptos clave de la lección.</p>
          <Quiz />
        </ModuleCard>

      </main>
      <footer className="text-center py-8 border-t border-slate-800">
        <p className="text-slate-500">Contenido educativo creado con fines académicos.</p>
      </footer>
    </div>
  );
};

export default App;
