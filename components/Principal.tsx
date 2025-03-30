import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Principal = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image with decorative elements */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-2xl">
                            <Image
                                src="/images/ppp.png"
                                alt="Principal"
                                fill
                                className="z-20 object-cover shadow-md"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute  -bottom-5 -right-4 w-32 h-32 bg-[#D41D33]/90 rounded-xl z-10"></div>
                        <div className="absolute -top-6 -left-5 w-24 h-24  bg-[#FF981F]/90  rounded-xl z-10"></div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1 text-sm font-semibold text-[#D41D33] bg-[#D41D33]/10 rounded-full mb-6">
                            Leadership
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                            Message from Our <span className='text-[#D41D33]'>Principal</span>
                        </h2>
                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p className="mb-6">
                                Welcome to Vedanga International School. As the Principal, it is my privilege to lead an institution that stands at the forefront of educational excellence. Our commitment to providing a world-class education is unwavering.
                            </p>
                            <p>
                                We foster an environment where students are encouraged to explore, innovate, and develop into well-rounded global citizens. Our holistic approach ensures each child reaches their fullest potential.
                            </p>
                        </div>
                        <Link
                            href="/about/principal-message"
                            className="inline-flex items-center px-5 py-3 border-2 border-[#D41D33] text-sm hover:text-base transition-all duration-200 delay-150 text-[#D41D33] rounded-lg  shadow-lg hover:shadow-xl font-medium group"
                        >
                            Read Full Message
                            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Principal