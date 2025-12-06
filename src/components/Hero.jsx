import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
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
                        Vision：技術と情熱を「社会価値」へ
                    </h2>
                    <h1 className="hero-title">
                        OMU Innovation <br />
                        <span className="text-primary glow-text">Frontier</span>
                    </h1>
                    <p className="hero-description">
                        AI・開発・ビジネスの3領域を横断し、<br />
                        「学習」から「創造」、そして「社会実装」へ。<br />
                        大阪公立大学トップ層のためのイノベーション・コミュニティ。
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
