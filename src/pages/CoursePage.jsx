import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Calendar, User, Target, ExternalLink } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import './CoursePage.css';
import heroBg1 from '../assets/hero_bg_1.jpg';
import heroBg2 from '../assets/hero_bg_2.jpg';
import heroBg3 from '../assets/hero_bg_3.jpg';

const courseData = {
    ai: {
        title: 'AI Course',
        subtitle: 'The Brain: 技術の核',
        color: '#ff0055',
        description: '最先端のAI技術を学び、社会実装を目指すエンジニア・研究者集団。',
        mission: '「理論」と「実装」の両輪で、実社会で通用するAIエンジニアを育成する。',
        trainingProgram: [
            { title: '基礎研修', desc: '未経験からでも安心して学べる基礎カリキュラム。Pythonや数学の基礎からスタートします。' },
            { title: '応用実践', desc: '実際のデータを扱った分析や、AIモデルの構築を通じて実践的なスキルを磨きます。' }
        ],
        coreActivities: [
            { title: '輪読会 (Reading Circle)', desc: '最新論文（LLM、画像生成など）を読み解き、技術的知見を深める。' },
            { title: 'Works Showcase', desc: '自身のAIモデルや分析結果を発表し、フィードバックを得る。' },
            { title: 'Kaggle Challenge', desc: 'コンペティション期間中にチームを結成し、上位入賞を目指して実装を行う。' },
            { title: 'Hackathon', desc: '短期間で集中的に開発を行い、アイデアを形にするイベント。' },
            { title: 'LT大会', desc: '興味のある技術や学習成果をライトニングトーク形式で発表し合う。' },
            { title: '合宿 (Dev Camp)', desc: '長期休暇などを利用して、技術漬けの合宿を行うこともあります。' }
        ],
        schedule: '毎週 火・金 19:00〜 (オンライン/オフライン併用)'
    },
    dev: {
        title: 'Dev Course',
        subtitle: 'The Body: 形を作る',
        color: '#00f0ff',
        description: 'モダンな技術スタックで、ユーザーの心を動かすWebサービスを創り出す。',
        mission: '「動くもの」を作る楽しさを知り、ユーザーファーストな開発者になる。',
        trainingProgram: [
            { title: '基礎研修', desc: 'Web開発の基礎となるHTML/CSS/JavaScriptから、Gitなどのツール使いまでを習得します。' },
            { title: '応用実践', desc: 'モダンなフレームワークを用いたアプリケーション開発に挑戦します。' }
        ],
        coreActivities: [
            { title: 'Monthly Demo Day', desc: '自身が開発したWeb/モバイルアプリのLT（ライトニングトーク）を行い、技術スタックやこだわりを共有する。' },
            { title: 'Tech Talk', desc: '新しいフレームワークやライブラリの知見を共有する技術勉強会を開催する。' },
            { title: 'Official Works', desc: 'サークル公式サイトや運営に必要なツールの開発・保守を行う。' },
            { title: 'Hackathon', desc: 'チームで協力して短期間でプロダクトを作り上げるイベント。' },
            { title: 'もくもく会', desc: '各自が作業を持ち寄り、困ったときに相談し合いながら開発を進める。' },
            { title: '企業連携プロジェクト', desc: '企業からの依頼を受けて、実際のサービス開発に携わる機会も。' }
        ],
        schedule: '毎週 月・木 19:00〜'
    },
    biz: {
        title: 'Biz Course',
        subtitle: 'The Direction: 道を作る',
        color: '#ffaa00',
        description: 'テクノロジーを社会に届けるための「ビジネスモデル」と「戦略」を描く。',
        mission: '技術を「事業」に変え、持続可能なイノベーションを生み出す。',
        trainingProgram: [
            { title: '基礎研修', desc: 'ビジネスの基礎知識や、論理的思考力、プレゼンテーションスキルを学びます。' },
            { title: '応用実践', desc: '実際のビジネス課題に対する解決策の立案や、事業計画の作成を行います。' }
        ],
        coreActivities: [
            { title: 'Operations (運営局)', desc: 'サークルの会計、スケジュール管理、新歓活動などの組織運営全般を担う。' },
            { title: 'External Relations', desc: '企業協賛の獲得、他大学との連携、イベント共催などの交渉を行う。' },
            { title: 'Incubation', desc: 'AI/Devメンバーのプロダクトに対する事業化検証や、起業プロジェクトのマネジメントを行う。' },
            { title: 'Workshop Host', desc: '学内・中高生向けのAI/ITワークショップを企画・運営し、サークルのプレゼンスを高める。' },
            { title: 'Business Contest', desc: '学内外のビジネスコンテストに参加し、アイデアを競い合う。' },
            { title: 'Pitch Practice', desc: '投資家やメンターに向けて、事業アイデアをプレゼンする練習を行う。' }
        ],
        schedule: '毎週 土 10:00〜'
    },
    ds: {
        title: 'Data Science Course',
        subtitle: 'Data Intelligence',
        color: '#00ffaa',
        description: 'データから価値を引き出し、ビジネスの意思決定を加速させる。',
        mission: '「データ」を「武器」に変え、不確実な世界を読み解く力を養う。',
        trainingProgram: [
            { title: '基礎研修', desc: '統計学の基礎や、データ分析に必要なツールの使い方を学びます。' },
            { title: '応用実践', desc: '実データを用いた分析プロジェクトに取り組み、インサイトを導き出します。' }
        ],
        coreActivities: [
            { title: 'Kaggle Challenge', desc: 'データ分析コンペティションに参加し、スキルを磨く。' },
            { title: 'Data Viz', desc: '分析結果を効果的に可視化し、伝える技術を学ぶ。' },
            { title: 'Study Session', desc: '統計や機械学習の理論について深く学ぶ勉強会。' }
        ],
        schedule: '毎週 水 19:00〜'
    },
    web3: {
        title: 'Web3 Course',
        subtitle: 'Next Gen Internet',
        color: '#aa00ff',
        description: 'ブロックチェーン技術で新しい社会システムを実験する。',
        mission: '次世代のインターネット「Web3」の思想と技術を深く理解し、実装する。',
        trainingProgram: [
            { title: '基礎研修', desc: 'ブロックチェーンの仕組みや、スマートコントラクトの基礎を学びます。' },
            { title: '応用実践', desc: 'DApps（分散型アプリケーション）の開発や、トークンエコノミーの設計に挑戦します。' }
        ],
        coreActivities: [
            { title: 'Smart Contract Dev', desc: 'Solidityなどを用いてスマートコントラクトを開発する。' },
            { title: 'DAO Lab', desc: 'DAO（自律分散型組織）の運営や仕組みについて研究・実践する。' },
            { title: 'Whitepaper Reading', desc: '主要なWeb3プロジェクトのホワイトペーパーを読み解く。' }
        ],
        schedule: '毎週 金 20:00〜'
    }
};

const CoursePage = () => {
    const { courseId } = useParams();
    const course = courseData[courseId];

    if (!course) {
        return <div className="container section">Course not found.</div>;
    }

    return (
        <div className="course-page" style={{ '--accent-color': course.color }}>
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

            {/* Premium Hero Section */}
            <section className="course-hero-premium">
                <Link to="/" className="back-link-premium">
                    <ArrowLeft size={20} /> Back to OIF Top
                </Link>
                <div className="container hero-content-premium">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-text-wrapper"
                    >
                        <span className="course-badge-premium">{course.title}</span>
                        <h1 className="course-hero-title-premium">
                            {course.subtitle.split(':')[0]}<br />
                            <span className="glow-text">{course.subtitle.split(':')[1]}</span>
                        </h1>
                        <p className="course-hero-desc-premium">{course.description}</p>
                    </motion.div>
                </div>
            </section>



            {/* Premium Training Program Section */}
            {course.trainingProgram && (
                <section className="section training-section-premium">
                    <div className="container">
                        <motion.h2
                            className="section-title-premium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Training Program
                        </motion.h2>
                        <p className="section-desc-premium">
                            入会直後の研修生が受講するプログラムです。<br />
                            ※内容は年度やメンバーのスキルレベルに合わせて最適化されます。
                        </p>
                        <div className="core-activities-grid-premium">
                            {course.trainingProgram.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="core-activity-card-premium glass-card-premium"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ scale: 1.02, translateY: -5 }}
                                    style={{ '--accent-color': course.color }}
                                >
                                    <div className="activity-icon-placeholder" style={{ backgroundColor: course.color, opacity: 0.7 }}></div>
                                    <h3 className="activity-title-premium">{item.title}</h3>
                                    <p className="activity-desc-premium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Premium Core Activities Section */}
            {course.coreActivities && (
                <section className="section core-activities-section-premium">
                    <div className="container">
                        <motion.h2
                            className="section-title-premium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Core Activities
                        </motion.h2>
                        <p className="section-desc-premium">
                            正規メンバーとして、以下の活動を通して専門性を深めます。
                        </p>
                        <div className="core-activities-grid-premium">
                            {course.coreActivities.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    className="core-activity-card-premium glass-card-premium"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ scale: 1.02, translateY: -5 }}
                                    style={{ '--accent-color': course.color }}
                                >
                                    <div className="activity-icon-placeholder" style={{ backgroundColor: course.color }}></div>
                                    <h3 className="activity-title-premium">{activity.title}</h3>
                                    <p className="activity-desc-premium">{activity.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Schedule & Join (Premium Style) */}
            <section className="section join-section-premium">
                <div className="container">
                    <div className="join-grid-premium">
                        <motion.div
                            className="schedule-card-premium glass-card-premium"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ '--accent-color': course.color }}
                        >
                            <Calendar size={32} color={course.color} />
                            <div>
                                <h4>Weekly Activity</h4>
                                <p className="schedule-time">{course.schedule}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="join-cta-premium glass-card-premium"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ '--accent-color': course.color }}
                        >
                            <div className="cta-content">
                                <h4>Start Your Journey</h4>
                                <p>まずは全体説明会へお越しください。</p>
                            </div>
                            <HashLink to="/#join" className="btn-course-join-premium" style={{ backgroundColor: course.color }}>
                                説明会に申し込む <ExternalLink size={18} />
                            </HashLink>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursePage;
