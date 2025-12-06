import React from 'react';
import { motion } from 'framer-motion';
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
                    <h2 className="section-title">Grand Design: Innovation Ecosystem</h2>
                    <div className="about-text">
                        <div className="about-block">
                            <h3>Vision：技術と情熱を「社会価値」へ</h3>
                            <p>
                                私たちは、AI・開発・ビジネスの3つの領域を横断し、<strong>「学習」から「創造」、そして「社会実装（起業/就職）」</strong>までを一気通貫で行う、大阪公立大学トップ層のためのイノベーション・コミュニティです。<br />
                                最終的なゴールは、世界にインパクトを与えるベンチャー企業の創出、あるいはどのフィールドでも即戦力として活躍できるトップ人材の輩出です。
                            </p>
                        </div>

                        <div className="about-block">
                            <h3>Synergy System：なぜ「ここ」なのか</h3>
                            <ul className="synergy-list">
                                <li>
                                    <strong>Diversity & Inclusion (多様性の統合)</strong>
                                    数理に強い学生、コードが書ける学生、ビジネスセンスがある学生。通常なら交わらない才能がここで出会い、<strong>「共同創業者」</strong>を見つけることができます。
                                </li>
                                <li>
                                    <strong>Flexible Career (流動的なキャリアパス)</strong>
                                    「起業」が全てではありません。ここで培った実践力は、就活においても最強の武器になります。卒業後もOB/OGとして関わり、<strong>「起業した先輩が後輩を雇う」「就職した先輩が案件を紹介する」</strong>という縦の繋がりが循環します。
                                </li>
                                <li>
                                    <strong>Academia Connection (アカデミアとの接続)</strong>
                                    「研究（理論）」と「サークル活動（実装）」を往復することで、理論に裏打ちされた強いプロダクトが生まれます。
                                </li>
                            </ul>
                        </div>

                        <div className="about-message">
                            <p>
                                私たちは、未来のユニコーン企業を創るかもしれないし、世界を変える研究者を生むかもしれない。<br />
                                重要なのは、<strong>「本気で挑戦する仲間」と「実現するための技術」</strong>が、ここにはすべて揃っているということです。
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
