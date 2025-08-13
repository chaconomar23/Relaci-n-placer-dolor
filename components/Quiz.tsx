
import React, { useState } from 'react';
import type { QuizQuestion } from '../types';

const quizQuestions: QuizQuestion[] = [
    {
        question: "¿Cuál es el rol principal de la dopamina según la lección?",
        options: ["Ser la molécula del placer", "Regular el sueño", "Generar motivación y anticipación", "Controlar la respiración"],
        correctAnswerIndex: 2,
        explanation: "La dopamina no es la molécula del placer en sí, sino de la motivación y la anticipación que nos impulsa a buscar recompensas."
    },
    {
        question: "El Núcleo Accumbens, la Amígdala y la Corteza Prefrontal forman parte del:",
        options: ["Sistema límbico", "Sistema de recompensa del cerebro", "Sistema nervioso autónomo", "Cerebelo"],
        correctAnswerIndex: 1,
        explanation: "Estas tres estructuras son componentes clave del sistema de recompensa, encargado de procesar el placer y la motivación."
    },
    {
        question: "¿Por qué un pico de placer es seguido por un 'valle' de dolor?",
        options: ["Porque el cerebro se cansa", "Para mantener el equilibrio (homeostasis)", "Es un efecto secundario aleatorio", "Porque el placer es malo"],
        correctAnswerIndex: 1,
        explanation: "El cerebro busca la homeostasis o equilibrio. Tras un pico de placer, genera una respuesta opuesta (dolor/malestar) para volver a su línea base."
    },
    {
        question: "¿Qué problema presentan los estímulos modernos según el Módulo 2?",
        options: ["Son demasiado caros", "Rompen el ciclo esfuerzo-recompensa", "No son lo suficientemente placenteros", "Son difíciles de encontrar"],
        correctAnswerIndex: 1,
        explanation: "El acceso fácil e ilimitado al placer sin un esfuerzo previo desajusta el sistema de recompensa, que evolucionó para valorar el esfuerzo."
    },
    {
        question: "El 'scroll infinito' en redes sociales es un ejemplo de:",
        options: ["Placer sostenible", "Un reto controlado", "Desequilibrio en el ciclo placer-dolor", "Un hábito saludable"],
        correctAnswerIndex: 2,
        explanation: "Es un ejemplo de estímulo de placer inmediato y de bajo esfuerzo que puede llevar a un ciclo adictivo y desequilibrar el sistema."
    },
    {
        question: "¿Qué es la 'adaptación hedónica'?",
        options: ["La capacidad de sentir más placer", "Acostumbrarse a un estímulo placentero, necesitando más para sentir lo mismo", "Una técnica de meditación", "Un tipo de ejercicio"],
        correctAnswerIndex: 1,
        explanation: "La adaptación hedónica ocurre cuando la exposición repetida a un estímulo reduce su impacto placentero, creando tolerancia."
    },
    {
        question: "Según el Módulo 4, ¿cuál es una estrategia para 'hackear' el sistema dopaminérgico?",
        options: ["Buscar más placer inmediato", "Evitar cualquier tipo de dolor", "Introducir retos y malestar controlado", "Dormir menos"],
        correctAnswerIndex: 2,
        explanation: "Introducir voluntariamente retos como el ejercicio o las duchas frías ayuda a 'resetear' el sistema y aumentar la sensibilidad al placer."
    },
    {
        question: "¿Qué beneficio tiene el ejercicio físico regular sobre la dopamina?",
        options: ["Genera un pico masivo y corto", "Elimina la necesidad de dopamina", "Eleva la línea base de dopamina de forma sostenible", "No tiene ningún efecto"],
        correctAnswerIndex: 2,
        explanation: "A diferencia de los placeres inmediatos, el ejercicio eleva de forma sostenida nuestra línea base de dopamina, mejorando el humor y la motivación a largo plazo."
    },
    {
        question: "Comer después de ayunar es un ejemplo de cómo...",
        options: ["El dolor controlado puede potenciar el placer", "El ayuno es perjudicial", "La comida siempre sabe igual", "El placer no depende del contexto"],
        correctAnswerIndex: 0,
        explanation: "El 'dolor' controlado del hambre hace que la recompensa (comida) se perciba como mucho más placentera y satisfactoria."
    },
    {
        question: "¿Cuál es una característica del 'placer sostenible'?",
        options: ["Produce picos muy altos de placer", "Requiere cero esfuerzo", "Eleva la línea base de felicidad", "Es adictivo"],
        correctAnswerIndex: 2,
        explanation: "Las actividades de placer sostenible, como aprender una habilidad, elevan nuestra línea base de bienestar general en lugar de dar picos momentáneos."
    },
    {
        question: "¿Cuál de estas actividades se considera de 'placer inmediato'?",
        options: ["Leer un libro", "Hacer un maratón de series", "Aprender a tocar un instrumento", "Entrenar para una carrera"],
        correctAnswerIndex: 1,
        explanation: "El maratón de series ofrece una gratificación instantánea y pasiva, a diferencia de las otras opciones que requieren esfuerzo y tiempo."
    },
    {
        question: "El ciclo adictivo se caracteriza por una búsqueda de placer que lleva a...",
        options: ["Una mayor felicidad", "Un descenso cada vez mayor en la línea base", "Un equilibrio perfecto", "La eliminación del dolor"],
        correctAnswerIndex: 1,
        explanation: "Cada pico de placer es seguido por un valle de dolor más profundo, lo que baja la línea base y crea una necesidad de estímulos más fuertes."
    },
    {
        question: "¿Qué técnica ayuda a reducir la búsqueda impulsiva de recompensas?",
        options: ["El multitasking", "El mindfulness y la meditación", "Beber bebidas energéticas", "Ignorar las emociones"],
        correctAnswerIndex: 1,
        explanation: "El mindfulness nos hace más conscientes de nuestros impulsos, dándonos la capacidad de elegir no actuar sobre ellos."
    },
    {
        question: "¿Por qué espaciar las recompensas es una estrategia útil?",
        options: ["Para olvidarnos de ellas", "Para evitar la adaptación hedónica", "Porque es más barato", "Para aumentar el estrés"],
        correctAnswerIndex: 1,
        explanation: "Al espaciar las recompensas, evitamos que nuestro cerebro se acostumbre a ellas, manteniendo su valor y el placer que nos proporcionan."
    },
    {
        question: "El propósito y las metas a largo plazo contribuyen a:",
        options: ["Un placer más sostenible", "Más picos de placer inmediato", "Un aumento del estrés", "La evitación del esfuerzo"],
        correctAnswerIndex: 0,
        explanation: "Tener metas a largo plazo da un sentido de propósito que alimenta la motivación de una manera mucho más estable y duradera."
    },
    {
        question: "Una ducha fría es un ejemplo de:",
        options: ["Tortura innecesaria", "Placer inmediato", "Reto controlado que eleva la dopamina posteriormente", "Algo que no tiene efecto neuropsicológico"],
        correctAnswerIndex: 2,
        explanation: "Es un breve malestar voluntario que provoca una respuesta compensatoria del cuerpo, liberando dopamina y mejorando el estado de ánimo después."
    },
    {
        question: "La principal diferencia entre gratificación inmediata y diferida es:",
        options: ["La cantidad de dinero que cuesta", "La cantidad de esfuerzo y tiempo requeridos", "El tipo de neurotransmisor implicado", "Si es legal o no"],
        correctAnswerIndex: 1,
        explanation: "La gratificación diferida implica esfuerzo y paciencia, lo que neurobiológicamente resulta en una recompensa más significativa y duradera."
    },
    {
        question: "El objetivo final de 'hackear' el sistema dopaminérgico es:",
        options: ["Eliminar todo el dolor", "Sentir placer todo el tiempo", "Construir una vida con un placer más equilibrado y sostenible", "Volverse insensible a todo"],
        correctAnswerIndex: 2,
        explanation: "El objetivo no es un estado de placer constante (lo cual es imposible), sino elevar nuestra línea base de bienestar y satisfacción con la vida."
    },
    {
        question: "¿Qué estructura cerebral está fuertemente asociada con la emoción y el miedo, influyendo en el sistema de recompensa?",
        options: ["El hipocampo", "El tálamo", "La amígdala", "El lóbulo occipital"],
        correctAnswerIndex: 2,
        explanation: "La amígdala es clave en el procesamiento de emociones como el miedo y la ansiedad, y su interacción con el sistema de recompensa es crucial."
    },
    {
        question: "Construir una rutina con un balance de retos y recompensas ayuda a:",
        options: ["Evitar 'picos y caídas' drásticos de dopamina", "Aumentar los 'picos y caídas'", "Eliminar la necesidad de recompensas", "Hacer la vida más aburrida"],
        correctAnswerIndex: 0,
        explanation: "Un balance saludable mantiene el sistema dopaminérgico estable, evitando los extremos que llevan al desequilibrio y la insatisfacción."
    }
];


export const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleAnswerSelect = (index: number) => {
        if (showExplanation) return;
        setSelectedAnswer(index);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer === null) return;

        setShowExplanation(true);
        
        if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswerIndex) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            setShowExplanation(false);
            setSelectedAnswer(null);
            if (currentQuestionIndex < quizQuestions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                setQuizFinished(true);
            }
        }, 3000); // Wait 3 seconds to show explanation
    };
    
    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setScore(0);
        setQuizFinished(false);
        setShowExplanation(false);
    };

    if (quizFinished) {
        const percentage = Math.round((score / quizQuestions.length) * 100);
        return (
            <div className="text-center p-6 bg-slate-800 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-2">¡Cuestionario Completado!</h3>
                <p className="text-4xl font-bold text-cyan-400 mb-4">{score} / {quizQuestions.length}</p>
                 <div className="w-full bg-slate-700 rounded-full h-4 mb-4">
                    <div 
                        className="bg-gradient-to-r from-sky-500 to-cyan-400 h-4 rounded-full" 
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <p className="text-lg text-slate-300 mb-6">Has acertado el {percentage}% de las preguntas.</p>
                <button 
                    onClick={handleRestart}
                    className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                    Intentar de Nuevo
                </button>
            </div>
        );
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];

    return (
        <div className="p-6 bg-slate-800 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}</h3>
                <p className="text-lg font-semibold text-slate-300">Puntuación: {score}</p>
            </div>
            <p className="text-xl text-slate-200 mb-6 min-h-[6rem]">{currentQuestion.question}</p>
            <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, index) => {
                    const isCorrect = index === currentQuestion.correctAnswerIndex;
                    const isSelected = selectedAnswer === index;
                    let buttonClass = "w-full text-left p-4 rounded-lg border-2 border-slate-600 hover:bg-slate-700 transition-colors duration-200";

                    if (showExplanation) {
                        if (isCorrect) {
                           buttonClass += " bg-green-500/30 border-green-500";
                        } else if (isSelected && !isCorrect) {
                            buttonClass += " bg-red-500/30 border-red-500";
                        }
                    } else if (isSelected) {
                        buttonClass += " bg-sky-600/50 border-sky-500";
                    }

                    return (
                        <button key={index} onClick={() => handleAnswerSelect(index)} className={buttonClass} disabled={showExplanation}>
                            {option}
                        </button>
                    );
                })}
            </div>
            
            {showExplanation && (
                <div className="p-4 bg-slate-700/50 border-l-4 border-cyan-400 rounded-r-lg text-slate-300 animate-pulse">
                    <strong className="text-cyan-400">Explicación:</strong> {currentQuestion.explanation}
                </div>
            )}

            {!showExplanation && (
                 <button 
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed"
                >
                    Confirmar
                </button>
            )}
        </div>
    );
};
