import React from 'react';
import { motion } from 'framer-motion';
import './Organization.css';

const Organization = () => {
    return (
        <section className="section org-section">
            <div className="container">
                <h2 className="section-title">組織構成</h2>

                <div className="org-content-wrapper">
                    {/* Left Side: Venn Diagram */}
                    <div className="org-visual-area">
                        <div className="venn-diagram-wrapper">
                            <div className="venn-container">
                                {/* Community Circle (Outer) */}
                                <div className="venn-community">
                                    <span className="label-community">コミュニティメンバー</span>
                                </div>

                                {/* Core Circles (Inner) */}
                                <div className="venn-core-group">
                                    <div className="venn-circle ai">
                                        <span className="label-core">AI<br />コース</span>
                                    </div>
                                    <div className="venn-circle dev">
                                        <span className="label-core">Dev<br />コース</span>
                                    </div>
                                    <div className="venn-circle biz">
                                        <span className="label-core">Biz<br />コース</span>
                                    </div>
                                    {/* Intersection */}
                                    <div className="venn-center">
                                        <span>正規<br />メンバー</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Membership Details */}
                    <div className="org-details-area">
                        <div className="membership-grid">
                            <motion.div
                                className="membership-card layer-1"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="layer-badge">Layer 1</div>
                                <h4>正規メンバー <span className="en-role">(Core Member)</span></h4>
                                <p className="definition">
                                    <strong>定義:</strong> OIFが定める研修プログラムを修了し、主体的にプロジェクトや運営に関わるメンバー。
                                </p>
                                <ul className="feature-list">
                                    <li><strong>特徴:</strong> 学年不問。研修を修了すれば即座に正規メンバーとして活動可能。</li>
                                    <li><strong>役割:</strong> サークルの中核として、技術を極め、チーム開発や対外活動を主導する。</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                className="membership-card layer-2"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="layer-badge">Layer 2</div>
                                <h4>コミュニティメンバー <span className="en-role">(Community Member)</span></h4>
                                <p className="definition">
                                    <strong>定義:</strong> サークルの活動に興味があり、自身のペースでゆるく関わりたい層。
                                </p>
                                <div className="rights-block">
                                    <h5>参加できること:</h5>
                                    <ul>
                                        <li><strong>教材アクセス:</strong> 学習ロードマップや限定教材の閲覧</li>
                                        <li><strong>講座参加:</strong> 初心者向けスキルアップ講座への参加</li>
                                        <li><strong>交流:</strong> Discordでの情報交換やイベントへの参加</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organization;
