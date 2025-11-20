import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { BsPrinter, BsFileText, BsPalette, BsPencilSquare, BsBook, BsImage, BsTag, BsGraphUp, BsArrowRight } from "react-icons/bs";
import studentsData from "../data/student.json";
import practiceData from "../data/date.json";
import { SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiCoreldraw } from "react-icons/si";

export default function Home() {
    useEffect(() => {
        document.title = "Басты бет";
    }, []);

    const navigate = useNavigate();
    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });

    const services = [
        { icon: <BsPrinter />, title: "Жобаларды баспаға дайындау", color: "from-orange-500 to-red-500" },
        { icon: <BsFileText />, title: "Визиткалар мен брошюралар", color: "from-blue-500 to-cyan-500" },
        { icon: <BsPalette />, title: "Дизайн макеттер жасау", color: "from-purple-500 to-pink-500" },
        { icon: <BsPencilSquare />, title: "Типографиялық жобаларды дайындау", color: "from-green-500 to-emerald-500" },
        { icon: <BsTag />, title: "Логотип және бренд элементтері", color: "from-yellow-500 to-amber-500" },
        { icon: <BsBook />, title: "Каталогтар мен презентациялар", color: "from-indigo-500 to-blue-500" },
        { icon: <BsImage />, title: "Фотосуреттерді өңдеу", color: "from-rose-500 to-red-500" },
        { icon: <BsGraphUp />, title: "Баспа жобаларын бақылау", color: "from-teal-500 to-green-500" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
            {/* ANIMATED BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* HERO */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 z-10">
                <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

                <div className="relative z-20 text-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Кәсіптік
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                Өндірістік Оқыту
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={isHeroInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <span className="text-cyan-400 font-semibold">Дизайн</span>, <span className="text-purple-400 font-semibold">Веб-Даму</span> және <span className="text-pink-400 font-semibold">Баспа</span> салаларындағы <span className="text-yellow-400 font-semibold">шынайы тәжірибе</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isHeroInView ? { opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
                        >
                            <button
                                onClick={() => document.getElementById("students").scrollIntoView({ behavior: "smooth" })}
                                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3 z-30"
                            >
                                Студенттерді Көру
                                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={() => document.getElementById("practice").scrollIntoView({ behavior: "smooth" })}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl font-bold text-white hover:bg-white/20 transition-all duration-500 transform hover:scale-105 z-30"
                            >
                                Практика Туралы
                            </button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isHeroInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-white/60 rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </section>
            {/* DESCRIPTION */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="relative py-20 px-4 max-w-6xl mx-auto"
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            Өндірістік Тәжірибе
                        </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 group"
                >
                    <p className="text-xl md:text-2xl text-gray-200 text-center leading-relaxed font-light">
                        <span className="text-cyan-300 font-medium">Кәсіптік өндірістік оқыту</span> барысында біз теориялық білімдерімізді{" "}
                        <span className="text-green-300 font-medium">практикалық жобаларда</span> қолдандық.{" "}
                        <span className="text-purple-300 font-medium">Брошюраларға</span> және{" "}
                        <span className="text-pink-300 font-medium">көпбетті дизайндарға</span> жұмыс істедік,{" "}
                        <span className="text-yellow-300 font-medium">веб-даму</span> мен{" "}
                        <span className="text-orange-300 font-medium">фотоөңдеуді</span> меңгердік,{" "}
                        <span className="text-red-300 font-medium">визитка</span> мен{" "}
                        <span className="text-blue-300 font-medium">туристтік карталарды</span> жасап көрдік.
                    </p>
                </motion.div>
            </motion.section>

            {/* PRACTICE TABLE */}
            <motion.section
                id="practice"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="relative py-20 px-4 max-w-6xl mx-auto"
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            Практика Мерзімдері
                        </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full mb-8"></div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden"
                >
                    {/* Desktop */}
                    <div className="hidden md:block">
                        <div className="grid grid-cols-12 gap-4 p-6 bg-white/5 rounded-2xl mb-4">
                            <div className="col-span-1 font-bold text-cyan-400 text-lg">№</div>
                            <div className="col-span-7 font-bold text-cyan-400 text-lg">Атқарылған жұмыстар</div>
                            <div className="col-span-4 font-bold text-cyan-400 text-lg">Мерзімдері</div>
                        </div>

                        {practiceData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`grid grid-cols-12 gap-4 p-6 rounded-2xl mb-3 transition-all duration-300 hover:bg-white/10 hover:scale-105 group ${index % 2 === 0 ? 'bg-white/5' : 'bg-white/3'
                                    }`}
                            >
                                <div className="col-span-1">
                                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-3 py-1 font-bold text-sm">
                                        #{item.id}
                                    </span>
                                </div>
                                <div className="col-span-7 text-gray-200 font-medium group-hover:text-white transition-colors">
                                    {item.works}
                                </div>
                                <div className="col-span-4">
                                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        {item.period}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile */}
                    <div className="md:hidden space-y-4">
                        {practiceData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-3 py-1 font-bold text-sm flex-shrink-0">
                                        #{item.id}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-200 font-medium mb-3 group-hover:text-white transition-colors">
                                            {item.works}
                                        </p>
                                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                                            📅 {item.period}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>

            {/* STUDENTS */}
            <motion.section
                id="students"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="relative py-20 px-4 max-w-6xl mx-auto"
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Біздің Студенттер
                        </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full mb-8"></div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {studentsData.map((s, index) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => navigate(`/student/${s.id}`)}
                        >
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={s.img}
                                        alt={s.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center">
                                            Фото Альбомды Ашу →
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white text-center group-hover:text-cyan-400 transition-colors duration-300">
                                        {s.name}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* SERVICES SECTION */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="relative py-20 px-4 max-w-6xl mx-auto"
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            Біздің Жұмыстар
                        </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full mb-8"></div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-2xl h-full flex flex-col items-center justify-center`}>
                                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-500 group-hover:scale-110">
                                    <span className="text-3xl text-white">
                                        {item.icon}
                                    </span>
                                </div>
                                <p className="text-white font-bold text-lg leading-tight group-hover:text-white/90 transition-colors duration-300">
                                    {item.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* FAQ SECTION */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="relative py-20 px-4 max-w-4xl mx-auto"
            >
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                            Не Үйрендік?
                        </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full mb-8"></div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-4">
                    {[
                        { q: "Өндірістік тәжірибеде не үйрендік?", a: "Графикалық дизайн, веб-даму, фотомонтаж және баспа процесі дағдыларын меңгердік." },
                        { q: "Практика қанша уақытқа созылды?", a: "Практика 2 қыркүйектен 21 қарашаға дейін созылды." },
                        { q: "Қандай жобалар орындадық?", a: "Логотип, баннер, визитка, көпбетті брошюра сияқты жобалар жасадық." },
                        {
                            q: "Қандай бағдарламалар қолдандық?",
                            a: (
                                <div className="flex items-start justify-start gap-4 mt-4 flex-wrap">
                                    <div className="flex flex-col items-center gap-2">
                                        <SiAdobephotoshop className="text-3xl text-blue-600" />
                                        <span className="text-white">Photoshop</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SiAdobeillustrator className="text-3xl text-orange-600" />
                                        <span className="text-white">Illustrator</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SiFigma className="text-3xl text-purple-600" />
                                        <span className="text-white">Figma</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <SiCoreldraw className="text-3xl text-green-600" />
                                        <span className="text-white">Corel Draw</span>
                                    </div>
                                </div>
                            )
                        }
                    ].map((item, i) => (
                        <FAQItem key={i} question={item.q} answer={item.a} index={i} />
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
}

function FAQItem({ question, answer, index }) {
    const [open, setOpen] = React.useState(false);
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true });

    return (
        <motion.div
            ref={itemRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 cursor-pointer border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group"
            onClick={() => setOpen(!open)}
        >
            <div className="flex justify-between items-center">
                <p className="font-bold text-lg text-white pr-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {question}
                </p>
                <motion.div
                    animate={{ rotate: open ? 45 : 0, scale: open ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:from-cyan-600 group-hover:to-blue-700 transition-all duration-300"
                >
                    +
                </motion.div>
            </div>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="pt-4 mt-4 border-t border-white/20">
                    <p className="text-gray-300 leading-relaxed font-light">{answer}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}