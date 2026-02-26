export type Locale = 'ja' | 'en' | 'zh';

export const dictionaries = {
    ja: {
        hero: {
            title: 'プロレベルのWeb3リサーチを、\nあなたの手に',
            subtitle: '最新のDeFi、GameFi、レイヤー1/2プロジェクトを網羅。データドリブンな分析と独自の視点で、次世代のイノベーションを発見しよう。',
            searchPlaceholder: 'プロジェクト名、カテゴリ、キーワードで検索...',
            searchButton: '検索'
        },
        nav: {
            home: 'ホーム',
            projects: 'プロジェクト',
            dashboard: 'オンチェーンデータ',
            portfolio: 'ウォッチリスト',
            airdrop: 'エアドロップ',
            manual: 'マニュアル',
            techDive: 'Tech Deep Dive',
            request: '調査リクエスト',
            pricing: '料金表',
            connect: 'ウォレット接続'
        },
        navGroups: {
            discover: '発見 (Discover)',
            learn: '学ぶ (Learn)',
            services: 'サービス'
        },
        sections: {
            trending: '24h 検索急上昇 (Trending)',
            trendingProjects: 'トレンドプロジェクト',
            news: '業界ヘッドライン',
            social: 'センチメント (X)'
        },
        common: {
            all: 'すべて',
            currentPrice: '現在価格',
            change24h: '24h変動',
            marketCap: '時価総額',
            rank: 'Rank',
            backToList: '一覧へ戻る',
            footerRights: '無断転載を禁じます。',
            footerData: 'データ提供: CoinGecko API & RSS Feeds',
            descriptionTitle: 'プロジェクト概要',
            marketDataTitle: 'マーケットデータ',
            comingSoon: '鋭意開発中・近日公開予定'
        },
        wallet: {
            title: 'ウォレットを接続',
            subtitle: '対応するウォレットを選択してください',
            metamask: 'MetaMask',
            walletConnect: 'WalletConnect',
            coinbase: 'Coinbase Wallet',
            phantom: 'Phantom',
            connecting: '接続中...',
            cancel: 'キャンセル'
        },
        contact: {
            nameLabel: 'お名前',
            namePlaceholder: '山田 太郎',
            emailLabel: 'メールアドレス',
            emailPlaceholder: 'yamada@example.com',
            projectLabel: '調査希望プロジェクト名（任意）',
            projectPlaceholder: '例: Ethereum, Solana...',
            messageLabel: 'リクエスト内容',
            messagePlaceholder: '「このブロックチェーンの技術的優位性を知りたい」など...',
            submitButton: 'リクエストを送信する',
            submitting: '送信中...',
            successTitle: '送信完了',
            successMessage: 'リクエストを承りました。調査完了までしばらくお待ちください！',
            errorRequired: '必須項目をすべて入力してください。'
        },
        guide: {
            title: '初心者向け Web3・暗号資産ガイド',
            subtitle: 'ゼロから学ぶ、次世代インターネットの基礎知識',
            courses: [
                {
                    id: 'web3-basics',
                    title: 'Web3（ウェブスリー）とは？',
                    content: 'Web3は「分散型インターネット」を指す概念です。特定の巨大企業（GoogleやAppleなど）がデータを独占するWeb2の時代から、ブロックチェーン技術を用いて個人がデータを所有・管理できる時代への移行を目指しています。クリエイターエコノミーやDeFi（分散型金融）など、新しい経済圏が生まれています。'
                },
                {
                    id: 'blockchain',
                    title: 'ブロックチェーンの仕組み',
                    content: 'ブロックチェーンは「改ざんが非常に困難な分散型台帳（データベース）技術」です。取引記録（トランザクション）を「ブロック」という単位にまとめ、それを鎖（チェーン）のようにつないで記録します。ネットワーク参加者全員でデータを共有し監視し合うため、透明性が高く、中央管理者がいなくても信用を担保できるのが最大の特徴です。'
                },
                {
                    id: 'wallets',
                    title: '暗号資産ウォレットの基本',
                    content: 'ウォレットは暗号資産（トークン）やNFTを保管する「デジタルな財布」です。大きく分けて、インターネットに常時接続されている「ホットウォレット（例: MetaMask）」と、オフラインで安全に保管する「コールドウォレット（例: Ledger）」があります。ウォレットを管理する「シードフレーズ（リカバリーフレーズ）」は銀行の暗証番号以上の意味を持つため、絶対に他人に教えてはいけません。'
                }
            ],
            quizTitle: '理解度チェッククイズ',
            quizCorrect: '正解！ 🎉',
            quizIncorrect: '不正解... ❌',
            quizzes: [
                {
                    id: 'q1',
                    question: 'Web3の最大の特徴として正しいものはどれ？',
                    options: [
                        'すべてのデータが特定の1つのサーバーに保存される。',
                        'ブロックチェーン技術を用いて、ユーザー自身がデータや資産を管理・所有できる。',
                        '動画の読み込み速度がWeb2に比べて圧倒的に速くなる技術。'
                    ],
                    correctIndex: 1,
                    explanation: 'Web3は「分散化」が鍵です。特定の企業に依存せず、個人がデジタルアセットを所有できるのが最大の特徴です。'
                },
                {
                    id: 'q2',
                    question: 'ウォレットの「シードフレーズ（リカバリーフレーズ）」の正しい扱いは？',
                    options: [
                        'クラウドサービス（Google Driveなど）に保存しておくと便利で安全だ。',
                        '忘れないようにSNSのプロフィールにメモしておく。',
                        'ネットから切り離された紙などに物理的にメモし、誰にも教えずに厳重に保管する。'
                    ],
                    correctIndex: 2,
                    explanation: 'シードフレーズが漏れるとウォレットの中身がすべて盗まれます。デジタルデータとして保存すること自体がハッキングのリスクを伴うため、物理的なメモ（紙や鉄板）が基本です。'
                }
            ]
        },
        advanced: {
            title: 'Tech Deep Dive',
            subtitle: '開発者・中上級者向け Web3 アーキテクチャ解説',
            topics: [
                {
                    id: 'smart-contracts',
                    title: 'Smart Contracts (スマートコントラクト)',
                    content: 'スマートコントラクトは、ブロックチェーン上で自動的に実行されるプログラムです。EthereumのEVM（Ethereum Virtual Machine）などで動作し、SolidityやVyperといった言語で記述されます。コードが法律（Code is Law）として機能し、仲介者なしでトラストレスな取引やDeFiプロトコルを実現します。一度デプロイされるとイミュータブル（変更不可）となるため、厳密なセキュリティ監査が不可欠です。',
                    codeSnippet: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}`
                },
                {
                    id: 'consensus',
                    title: 'Consensus Algorithms (Proof of Work vs Proof of Stake)',
                    content: 'コンセンサスアルゴリズムは、分散型ネットワークで単一の真実状態（State）に合意するための仕組みです。\n**Proof of Work (PoW):** Bitcoinが採用。マイナーが莫大な計算力（ハッシュパワー）を提供してブロックを生成し、ビザンチン将軍問題を解決します。極めてセキュアですが、エネルギー消費が課題です。\n**Proof of Stake (PoS):** Ethereum 2.0などが採用。計算力ではなく、ネットワークにステーク（ロック）した資産額に応じてバリデーターが選出されます。エネルギー効率が高く、ファイナリティへのアプローチが異なります。'
                },
                {
                    id: 'layer2',
                    title: 'Layer 2 Scaling (Rollups)',
                    content: 'Layer 1（Ethereumなど）のスケーラビリティ問題（ガス代の高騰、トランザクションの遅延）を解決するための技術です。\n**Optimistic Rollups (Arbitrum, Optimism):** トランザクションが不正でないという「楽観的」な前提で処理し、後から異議申し立て（Fraud Proof）の期間を設けます。\n**ZK-Rollups (StarkNet, zkSync):** ゼロ知識証明を用いて、オフチェーンで計算した結果の正当性を暗号学的に証明（Validity Proof）し、L1に提出します。より高いスケーラビリティと即時のファイナリティを持ちます。'
                }
            ]
        },
        dashboard: {
            title: 'On-chain Data Dashboard',
            subtitle: 'DefiLlamaのライブAPIを活用した、各チェーンおよびプロトコルのリアルタイムTVL（Total Value Locked）分析。',
            chainsTitle: 'トップチェーン別 TVL シェア',
            protocolsTitle: 'トッププロトコル別 TVL ランキング'
        },
        portfolio: {
            title: 'マイ・ウォッチリスト',
            subtitle: 'あなたが「★」をつけた注目のプロジェクト一覧です。',
            emptyState: '現在、ウォッチリストに登録されたプロジェクトはありません。',
            exploreButton: 'プロジェクトを探す'
        },
        airdrop: {
            title: 'エアドロップ＆テストネット ハブ',
            subtitle: '給付金（エアドロップ）が期待される注目プロジェクトのタスク一覧。チェックリストを活用して取りこぼしを防ごう。',
            reward: '期待報酬',
            difficulty: '難易度',
            completed: '完了',
            stepsLabel: 'タスク手順'
        },
        tierGuard: {
            title: 'アクセス制限',
            description: 'この機能を利用するには、より高いメンバーシップランクが必要です。ウォレットを接続するか、プランをアップグレードしてください。',
            requirements: '利用条件',
            paidReq: '有料プレミアム会員（PAID）以上',
            nftReq: '公式NFTを1枚以上保有していること',
            upgradeBtn: 'メンバーシップをアップグレード'
        },
        footer: {
            description: '最新のWeb3インサイト、データ、そしてトレンドをワンストップで。',
            quickLinks: 'クイックリンク'
        },
        sentiment: {
            title: 'AI 本日の市場レポート'
        }
    },
    en: {
        hero: {
            title: 'Pro-level Web3 Research\nin Your Hands',
            subtitle: 'Covering the latest DeFi, GameFi, and L1/L2 projects. Discover next-gen innovation with data-driven analysis.',
            searchPlaceholder: 'Search by project, category, keyword...',
            searchButton: 'Search'
        },
        nav: {
            home: 'Home',
            projects: 'Projects',
            dashboard: 'On-chain Data',
            portfolio: 'Watchlist',
            airdrop: 'Airdrop Hub',
            manual: 'Beginner Guide',
            techDive: 'Tech Deep Dive',
            request: 'Request',
            pricing: 'Pricing',
            connect: 'Connect Wallet'
        },
        navGroups: {
            discover: 'Discover',
            learn: 'Learn',
            services: 'Services'
        },
        sections: {
            trending: '24h Trending Search',
            trendingProjects: 'Trending Projects',
            news: 'Industry Headlines',
            social: 'Sentiment (X)'
        },
        common: {
            all: 'All',
            currentPrice: 'Price',
            change24h: '24h Change',
            marketCap: 'Market Cap',
            rank: 'Rank',
            backToList: 'Back to List',
            footerRights: 'All rights reserved.',
            footerData: 'Data provided by CoinGecko API & RSS Feeds',
            descriptionTitle: 'Project Overview',
            marketDataTitle: 'Market Data',
            comingSoon: 'Under Construction & Coming Soon'
        },
        wallet: {
            title: 'Connect Wallet',
            subtitle: 'Select your preferred wallet',
            metamask: 'MetaMask',
            walletConnect: 'WalletConnect',
            coinbase: 'Coinbase Wallet',
            phantom: 'Phantom',
            connecting: 'Connecting...',
            cancel: 'Cancel'
        },
        contact: {
            nameLabel: 'Your Name',
            namePlaceholder: 'John Doe',
            emailLabel: 'Email Address',
            emailPlaceholder: 'john@example.com',
            projectLabel: 'Target Project (Optional)',
            projectPlaceholder: 'e.g., Ethereum, Solana...',
            messageLabel: 'Request Details',
            messagePlaceholder: 'I want to know the technical advantages of this blockchain...',
            submitButton: 'Send Request',
            submitting: 'Sending...',
            successTitle: 'Request Sent',
            successMessage: 'We have received your research request. Please wait for our analysis!',
            errorRequired: 'Please fill in all required fields.'
        },
        guide: {
            title: 'Web3 & Crypto Beginner Guide',
            subtitle: 'Learn the fundamentals of the next-generation internet from scratch.',
            courses: [
                {
                    id: 'web3-basics',
                    title: 'What is Web3?',
                    content: 'Web3 refers to the "decentralized internet." It aims to transition from the Web2 era, where data is monopolized by giant corporations (like Google and Apple), to an era where individuals can own and manage their data using blockchain technology. It has given rise to new economic zones like the creator economy and DeFi (Decentralized Finance).'
                },
                {
                    id: 'blockchain',
                    title: 'How Blockchain Works',
                    content: 'Blockchain is a "decentralized ledger (database) technology that is extremely difficult to tamper with." Transaction records are grouped into "blocks," which are linked together like a chain. Since all participants in the network share and monitor the data, its biggest feature is high transparency and the ability to ensure trust without a central administrator.'
                },
                {
                    id: 'wallets',
                    title: 'Basics of Crypto Wallets',
                    content: 'A wallet is a "digital purse" for storing crypto assets (tokens) and NFTs. They are broadly divided into "Hot Wallets" (e.g., MetaMask), which are always connected to the internet, and "Cold Wallets" (e.g., Ledger), which are stored safely offline. The "Seed Phrase (Recovery Phrase)" that manages the wallet means more than a bank PIN, so you must NEVER share it with anyone.'
                }
            ],
            quizTitle: 'Knowledge Check Quiz',
            quizCorrect: 'Correct! 🎉',
            quizIncorrect: 'Incorrect... ❌',
            quizzes: [
                {
                    id: 'q1',
                    question: 'Which of the following describes the key feature of Web3?',
                    options: [
                        'All data is stored on a single specific server.',
                        'Users can manage and own their data and assets using blockchain technology.',
                        'A technology that natively makes video loading speeds much faster than Web2.'
                    ],
                    correctIndex: 1,
                    explanation: 'Decentralization is the key to Web3. Its greatest feature is that individuals can own digital assets without relying on specific companies.'
                },
                {
                    id: 'q2',
                    question: 'What is the correct way to handle a wallet\'s "Seed Phrase"?',
                    options: [
                        'It is convenient and safe to store it in a cloud service (like Google Drive).',
                        'Write it down in your SNS profile so you don\'t forget it.',
                        'Physically write it down on paper, keep it offline, and NEVER share it with anyone.'
                    ],
                    correctIndex: 2,
                    explanation: 'If a seed phrase is leaked, everything in the wallet can be stolen. Storing it as digital data itself carries hacking risks, so physical notes (paper or metal) are standard practice.'
                }
            ]
        },
        advanced: {
            title: 'Tech Deep Dive',
            subtitle: 'Web3 Architecture Guide for Developers & Advanced Users',
            topics: [
                {
                    id: 'smart-contracts',
                    title: 'Smart Contracts',
                    content: 'Smart contracts are programs stored on a blockchain that run when predetermined conditions are met. They typically run on environments like the EVM (Ethereum Virtual Machine) and are written in languages like Solidity or Vyper. They enable trustless transactions and DeFi protocols without intermediaries (Code is Law). Because they are immutable once deployed, rigorous security audits are essential.',
                    codeSnippet: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}`
                },
                {
                    id: 'consensus',
                    title: 'Consensus Algorithms (PoW vs PoS)',
                    content: 'Consensus algorithms are mechanisms used to achieve agreement on a single data value among distributed processes or systems.\n**Proof of Work (PoW):** Used by Bitcoin. Miners provide massive computational power to generate blocks, solving the Byzantine Generals Problem. Extremely secure but highly energy-intensive.\n**Proof of Stake (PoS):** Used by Ethereum 2.0. Validators are chosen to create blocks based on the amount of cryptocurrency they "stake" (lock up) in the network. It offers high energy efficiency and different approaches to finality.'
                },
                {
                    id: 'layer2',
                    title: 'Layer 2 Scaling (Rollups)',
                    content: 'Technology designed to solve the scalability trilemma of Layer 1 blockchains (like high gas fees and slow transactions).\n**Optimistic Rollups (Arbitrum, Optimism):** Assume transactions are valid by default and only run computation via a fraud proof in the event of a challenge.\n**ZK-Rollups (StarkNet, zkSync):** Run computation off-chain and submit a validity proof (using Zero-Knowledge Proofs) to the chain. They offer higher scalability and immediate finality.'
                }
            ]
        },
        dashboard: {
            title: 'On-chain Data Dashboard',
            subtitle: 'Real-time TVL (Total Value Locked) analysis for chains and protocols powered by DefiLlama live API.',
            chainsTitle: 'Top Chains TVL Share',
            protocolsTitle: 'Top Protocols TVL Ranking'
        },
        portfolio: {
            title: 'My Watchlist',
            subtitle: 'Projects you have starred and are currently tracking.',
            emptyState: 'Your watchlist is currently empty.',
            exploreButton: 'Explore Projects'
        },
        airdrop: {
            title: 'Airdrop & Testnet Hub',
            subtitle: 'Curated tasks for high-potential airdrops. Use the checklist to track your progress and maximize rewards.',
            reward: 'Potential Reward',
            difficulty: 'Difficulty',
            completed: 'Completed',
            stepsLabel: 'Task Steps'
        },
        tierGuard: {
            title: 'Access Restricted',
            description: 'This feature requires a higher membership tier. Please upgrade your membership or connect an eligible wallet.',
            requirements: 'Requirements',
            paidReq: 'Active Premium Subscription (PAID)',
            nftReq: 'Hold at least 1x Official NFT',
            upgradeBtn: 'Upgrade Membership'
        },
        footer: {
            description: 'Your one-stop platform for the latest Web3 insights, data, and trends.',
            quickLinks: 'Quick Links'
        },
        sentiment: {
            title: 'AI Daily Market Report'
        }
    },
    zh: {
        hero: {
            title: '专业级的Web3研究\n触手可及',
            subtitle: '涵盖最新的DeFi、GameFi和L1/L2项目。通过数据驱动的分析，发现下一代创新。',
            searchPlaceholder: '按项目、类别、关键字搜索...',
            searchButton: '搜索'
        },
        nav: {
            home: '首页',
            projects: '项目',
            dashboard: '链上看板',
            portfolio: '自选观察',
            airdrop: '空投任务',
            manual: '新手指南',
            techDive: '技术深度解析',
            request: '研究请求',
            pricing: '价格',
            connect: '连接钱包'
        },
        navGroups: {
            discover: '发现 (Discover)',
            learn: '学习 (Learn)',
            services: '服务中心'
        },
        sections: {
            trending: '24h 热门搜索 (Trending)',
            trendingProjects: '热门项目',
            news: '行业头条',
            social: '市场情绪 (X)'
        },
        common: {
            all: '全部',
            currentPrice: '当前价格',
            change24h: '24h变化',
            marketCap: '市值',
            rank: '排名',
            backToList: '返回列表',
            footerRights: '版权所有。',
            footerData: '数据提供: CoinGecko API & RSS Feeds',
            descriptionTitle: '项目概述',
            marketDataTitle: '市场数据',
            comingSoon: '正在开发中 · 敬请期待'
        },
        wallet: {
            title: '连接钱包',
            subtitle: '请选择您支持的钱包',
            metamask: 'MetaMask',
            walletConnect: 'WalletConnect',
            coinbase: 'Coinbase Wallet',
            phantom: 'Phantom',
            connecting: '连接中...',
            cancel: '取消'
        },
        contact: {
            nameLabel: '您的姓名',
            namePlaceholder: '张三',
            emailLabel: '电子邮件',
            emailPlaceholder: 'zhangsan@example.com',
            projectLabel: '调研项目名称（选填）',
            projectPlaceholder: '例如：Ethereum, Solana...',
            messageLabel: '请求详细内容',
            messagePlaceholder: '我想了解这个区块链的技术优势...',
            submitButton: '发送请求',
            submitting: '发送中...',
            successTitle: '请求已发送',
            successMessage: '我们已收到您的调研请求，请耐心等待我们的分析报告！',
            errorRequired: '请输入所有必填项。'
        },
        guide: {
            title: 'Web3 与加密资产新手指南',
            subtitle: '从零开始学习下一代互联网的基础知识。',
            courses: [
                {
                    id: 'web3-basics',
                    title: '什么是 Web3？',
                    content: 'Web3 指的是“去中心化互联网”。它旨在从数据被巨头公司（如谷歌和苹果）垄断的 Web2 时代，过渡到个人可以使用区块链技术拥有和管理自己数据的时代。它催生了创作者经济和 DeFi（去中心化金融）等新的经济圈。'
                },
                {
                    id: 'blockchain',
                    title: '区块链是如何运作的？',
                    content: '区块链是一种“极难篡改的去中心化账本（数据库）技术”。交易记录被打包成“区块”，然后像链条一样连接起来记录。由于网络中的所有参与者共享并监控这些数据，其最大特点是透明度高，且无需中央管理员即可保证信任。'
                },
                {
                    id: 'wallets',
                    title: '加密钱包基础',
                    content: '钱包是存储加密资产（代币）和 NFT 的“数字钱包”。主要分为始终连接互联网的“热钱包”（如 MetaMask）和离线安全存储的“冷钱包”（如 Ledger）。管理钱包的“助记词（恢复短语）”比银行密码更重要，因此绝对不能告诉任何人。'
                }
            ],
            quizTitle: '知识测试测验',
            quizCorrect: '回答正确！ 🎉',
            quizIncorrect: '回答错误... ❌',
            quizzes: [
                {
                    id: 'q1',
                    question: '以下哪项是 Web3 的最大特征？',
                    options: [
                        '所有数据都保存在一个特定的服务器上。',
                        '利用区块链技术，用户可以自己管理和拥有数据及资产。',
                        '使视频加载速度比 Web2 快得多的技术。'
                    ],
                    correctIndex: 1,
                    explanation: 'Web3 的关键在于“去中心化”。其最大特点是不依赖特定公司，个人可以拥有数字资产。'
                },
                {
                    id: 'q2',
                    question: '处理钱包“助记词（恢复短语）”的正确方法是什么？',
                    options: [
                        '将其保存在云服务（如 Google Drive）中既方便又安全。',
                        '为了不忘记，把它记在社交网络的个人简介里。',
                        '实际写在纸上等物理介质上，与网络隔离，严密保管，绝不告诉任何人。'
                    ],
                    correctIndex: 2,
                    explanation: '如果助记词泄露，钱包里的所有内容都会被盗。将其作为数字数据保存本身就伴随着被黑客攻击的风险，因此物理记录（纸张或金属板）是基本要求。'
                }
            ]
        },
        advanced: {
            title: '技术深度解析 (Tech Deep Dive)',
            subtitle: '面向开发者与中高级用户的 Web3 架构指南',
            topics: [
                {
                    id: 'smart-contracts',
                    title: '智能合约 (Smart Contracts)',
                    content: '智能合约是存储在区块链上的程序，当满足预定条件时就会运行。它们通常在 EVM（以太坊虚拟机）等环境中运行，并使用 Solidity 或 Vyper 等语言编写。它们实现了无需预先信任的交易和无中介的 DeFi 协议（代码即法律）。由于部署后不可篡改，因此严格的安全审计至关重要。',
                    codeSnippet: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}`
                },
                {
                    id: 'consensus',
                    title: '共识算法 (PoW vs PoS)',
                    content: '共识算法是用于在分布式进程或系统之间对单个数据值达成一致机制。\n**工作量证明 (PoW):** 被比特币使用。矿工提供大规模计算能力来生成区块，解决拜占庭将军问题。极其安全但极其耗电。\n**权益证明 (PoS):** 被以太坊 2.0 使用。根据验证者在网络中“质押”（锁定）的加密货币数量选择验证者来创建区块。它提供了高能源效率和不同的最终性方法。'
                },
                {
                    id: 'layer2',
                    title: 'Layer 2 扩容 (Rollups)',
                    content: '旨在解决Layer 1区块链可扩展性困境（如高昂的 Gas 费和缓慢的交易）的技术。\n**Optimistic Rollups (Arbitrum, Optimism):** 默认假设交易有效，仅在遇到挑战时才通过欺诈证明运行计算。\n**ZK-Rollups (StarkNet, zkSync):** 在链下运行计算，并向链上提交有效性证明（使用零知识证明）。它们提供更高的可扩展性和即时的最终性。'
                }
            ]
        },
        dashboard: {
            title: '链上数据看板',
            subtitle: '利用 DefiLlama 实时 API 分析各公链及协议的 TVL (总锁仓量)。',
            chainsTitle: '顶级公链 TVL 占比',
            protocolsTitle: '顶级协议 TVL 排行'
        },
        portfolio: {
            title: '我的自选观察',
            subtitle: '您加注“★”星标并正在追踪的项目列表。',
            emptyState: '目前您的自选列表中没有项目。',
            exploreButton: '探索项目'
        },
        airdrop: {
            title: '空投与测试网中心',
            subtitle: '精心策划的高潜力空投任务。使用清单跟踪您的进度并最大化奖励。',
            reward: '预估奖励',
            difficulty: '难度',
            completed: '已完成',
            stepsLabel: '任务步骤'
        },
        tierGuard: {
            title: '访问受限',
            description: '此功能需要更高的会员等级。请升级您的会员资格或连接符合条件的钱包。',
            requirements: '访问条件',
            paidReq: '有效的付费高级订阅 (PAID)',
            nftReq: '至少持有 1 个官方 NFT',
            upgradeBtn: '升级会员'
        },
        footer: {
            description: '一站式获取最新 Web3 洞察、数据和趋势的平台。',
            quickLinks: '快速链接'
        },
        sentiment: {
            title: 'AI 每日市场报告'
        }
    }
};

export const getDictionary = (locale: Locale) => {
    return dictionaries[locale] || dictionaries['ja'];
};
