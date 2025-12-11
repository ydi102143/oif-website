import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, GitMerge, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">OIFの強み</h2>
                    <div className="about-text">
                        <div className="about-block">

                            <div className="synergy-grid">
                                <motion.div
                                    className="synergy-card"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="card-icon-wrapper">
                                        <GitMerge size={32} />
                                    </div>
                                    <h4>異分野融合</h4>
                                    <h5>Cross-Disciplinary</h5>
                                    <p>
                                        AI・Dev・Bizが1つのチームに。<br />
                                        「作れる」と「売れる」が同居する、最強のチームビルディング。
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="synergy-card"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="card-icon-wrapper">
                                        <GraduationCap size={32} />
                                    </div>
                                    <h4>理論と実践</h4>
                                    <h5>Theory & Practice</h5>
                                    <p>
                                        最先端の研究(Theory)を、即座にプロダクト(Practice)へ。<br />
                                        論文を社会実装する力がここにあります。
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="synergy-card"
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="card-icon-wrapper">
                                        <Users size={32} />
                                    </div>
                                    <h4>垂直統合</h4>
                                    <h5>Vertical Integration</h5>
                                    <p>
                                        学習・開発・起業を一気通貫で支援。<br />
                                        先輩から後輩へ、知見と文化が還流し続けます。
                                    </p>
                                </motion.div>
                            </div>
                        </div>


                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
