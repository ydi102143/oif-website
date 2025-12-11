import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import heroBg1 from '../assets/hero_bg_1.jpg';
import heroBg2 from '../assets/hero_bg_2.jpg';
import heroBg3 from '../assets/hero_bg_3.jpg';
import './Hero.css';

const Hero = () => {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-images-container">
                    <img src={heroBg1} alt="" className="hero-bg-img" />
                    <img src={heroBg2} alt="" className="hero-bg-img" />
                    <img src={heroBg3} alt="" className="hero-bg-img" />
                </div>
                <div className="hero-gradient-1"></div>
                <div className="hero-gradient-2"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="hero-subtitle">
                        <span className="line"></span>
                        Mission：技術と情熱を「社会価値」へ
                    </h2>
                    <h1 className="hero-title">
                        OMU Innovation <br />
                        <span className="text-primary glow-text">Frontier</span>
                    </h1>
                    <p className="hero-description">
                        <strong>「学習」から「創造」、そして「社会実装」へ。</strong><br />
                        大阪公立大学を中心としたイノベーション・コミュニティ。<br />
                        技術とビジネスを横断し、世界を変える企業と人材を輩出します。
                    </p>

                    <div className="hero-buttons">
                        <HashLink to="/#join" className="btn btn-primary" scroll={scrollWithOffset}>
                            説明会に申し込む <ArrowRight size={18} />
                        </HashLink>
                        <HashLink to="/#courses" className="btn btn-outline" scroll={scrollWithOffset}>
                            コースを見る
                        </HashLink>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
