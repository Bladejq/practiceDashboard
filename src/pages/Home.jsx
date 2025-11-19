import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import studentsData from "../data/student.json";
import practiceData from "../data/date.json";

export default function Home() {
    useEffect(() => {
        document.title = "Басты бет";
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute("content", "Студенттерге арналған өндірістік тәжірибе бағдарламасы");
        } else {
            const metaTag = document.createElement("meta");
            metaTag.name = "description";
            metaTag.content = "Студенттерге арналған өндірістік тәжірибе бағдарламасы";
            document.head.appendChild(metaTag);
        }
    }, []);

    const navigate = useNavigate();

    const fadeUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-mont">

            {/* HERO */}
            <motion.section
                {...fadeUp}
                viewport={{ once: true }}
                className="w-full h-64 bg-cover bg-center flex items-center justify-center relative"
                style={{
                    backgroundImage:
                        "url('https://static.tildacdn.pro/tild6562-6639-4664-a565-616165306630/tipografiya-zakaz.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
                <h1 className="text-white text-4xl font-extrabold drop-shadow-xl z-10 text-center px-4">
                    Кәсіптік өндірістік оқыту
                </h1>
            </motion.section>

            {/* DESCRIPTION */}
            <motion.section
                {...fadeUp}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto p-4 sm:p-6"
            >
                <h2 className="text-3xl text-center font-bold mb-4">Өндірістік тәжірибе</h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Кәсіптік өндірістік оқыту — бұл студенттерге теориялық білімдерін практикалық
                    жобаларда қолдануға мүмкіндік беретін бағдарлама. Студенттер дизайн, веб-даму,
                    фотоөңдеу және жобалау сияқты дағдыларды меңгереді. Бұл процесс барысында
                    әр студент өзіне жеке тапсырмалар алады және портфолиоға арналған материалдар
                    жинайды.
                </p>
            </motion.section>

            {/* PRACTICE TABLE */}
            <motion.section
                {...fadeUp}
                viewport={{ once: true }}
                className="p-4 sm:p-6 max-w-6xl mx-auto"
            >
                <h2 className="text-3xl font-bold mb-4 text-center">Практика мерзімдері</h2>

                {/* Desktop */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full min-w-[600px] border-collapse border border-gray-400 text-left bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-gray-400 p-2">№</th>
                                <th className="border border-gray-400 p-2">Атқарылған жұмыстар</th>
                                <th className="border border-gray-400 p-2">Кәсіптік практика мерзімдері</th>
                            </tr>
                        </thead>
                        <tbody>
                            {practiceData.map((item) => (
                                <tr className="bg-white hover:bg-gray-100" key={item.id}>
                                    <td className="border p-2">{item.id}</td>
                                    <td className="border p-2">{item.works}</td>
                                    <td className="border p-2">{item.period}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile */}
                <div className="md:hidden space-y-4">
                    {practiceData.map((item) => (
                        <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
                            <p className="font-semibold text-lg mb-1">
                                #{item.id} — {item.works}
                            </p>
                            <p className="text-gray-600 text-sm">Мерзімі: {item.period}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* STUDENTS */}
            <motion.section
                {...fadeUp}
                viewport={{ once: true }}
                className="p-4 sm:p-6 max-w-6xl mx-auto"
            >
                <h2 className="text-2xl font-bold mb-4">Студенттер</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {studentsData.map((s) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition cursor-pointer"
                            onClick={() => navigate(`/student/${s.id}`)}
                        >
                            <img
                                src={s.img}
                                alt={s.name}
                                className="w-full h-40 object-cover rounded-t-xl"
                            />
                            <div className="p-4 text-center">
                                <p className="font-semibold text-lg">{s.name}</p>
                                <button className="mt-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition">
                                    Фото Альбом
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* FAQ SECTION */}
            <motion.section
                {...fadeUp}
                viewport={{ once: true }}
                className="p-4 sm:p-6 max-w-6xl mx-auto"
            >
                <h2 className="text-3xl font-bold mb-6 text-center">Практика барысында не үйренендік?</h2>

                <div className="space-y-4">
                    {[
                        {
                            q: "Өндірістік тәжірибеде не үйренендік?",
                            a: "Біз графикалық дизайн, веб-даму, фотомонтаж, баспа процесі және жобаларды тапсыру дағдыларын меңгередік."
                        },
                        {
                            q: "Практика қанша уақытқа созылады?",
                            a: "Практика оқу жоспарына сәйкес практика 2 қыркүйектен 21 қарашаға дейін созылды."
                        },
                        {
                            q: "Практика барысында қандай жобалар жасаймыз?",
                            a: "Біз логотип, баннер, визитка, көпбетті брошюра сияқты жобаларды орындадық."
                        },
                        {
                            q: "Қандай бағдарламалармен жұмыс жасаймыз?",
                            a: "Photoshop, Illustrator, Figma, Corel Draw."
                        }
                    ].map((item, i) => (
                        <FAQItem key={i} question={item.q} answer={item.a} />
                    ))}
                </div>
            </motion.section>

        </div>
    );
}

/* FAQ COMPONENT */
function FAQItem({ question, answer }) {
    const [open, setOpen] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer border"
            onClick={() => setOpen(!open)}
        >
            <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">{question}</p>
                <span className="text-2xl">{open ? "−" : "+"}</span>
            </div>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="text-gray-700 mt-3">{answer}</p>
            </motion.div>
        </motion.div>
    );
}
