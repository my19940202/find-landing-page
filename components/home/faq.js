'use client';
import { FAQList } from '@/lib/faqsList';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';

export default function Feature({ locale, langName = 'en' }) {
    let list = FAQList[`FAQ_${langName.toUpperCase()}`] || [];
    return (
        <section
            id='faq'
            className='relative py-10 md:py-20'
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                }}
            >
                <div className='relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto'>
                    <div className='relative inline-flex items-center justify-center gap-2 border-2 border-base-content px-5 md:px-10 py-1 md:py-3 rounded-full text-lg md:text-2xl font-semibold overflow-hidden group'>
                        <div className='inline-flex items-center justify-center gap-2 z-10'>
                            <FaQuestionCircle /> <h2>{locale.h2}</h2>
                        </div>
                        <div className='absolute w-0 h-full bg-base-content z-[0]'></div>
                    </div>

                    <h4 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center'>{locale.description}</h4>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                }}
            >
                <div className='relative z-10 w-full md:w-10/12 mx-auto flex flex-col gap-5'>
                    {list.map((item, index) => {
                        return (
                            <div
                                key={index}
                                tabIndex={0}
                                className='collapse collapse-arrow bg-base-200 border-b-[1px] border-base-content rounded-none bg-transparent'
                            >
                                <div className='collapse-title text-xl font-medium'>{item.question}</div>
                                <div className='collapse-content'>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            <div className='hidden md:block absolute left-[50%] top-[30%] z-0'>
                <div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
            </div>
        </section>
    );
}
