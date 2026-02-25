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
            projects: 'プロジェクト一覧',
            manual: '初心者マニュアル',
            request: 'リサーチリクエスト',
            pricing: '料金表',
            connect: 'ウォレット接続'
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
            projects: 'Projects',
            manual: 'Beginner Guide',
            request: 'Research Request',
            pricing: 'Pricing',
            connect: 'Connect Wallet'
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
            projects: '项目列表',
            manual: '新手指南',
            request: '研究请求',
            pricing: '价格',
            connect: '连接钱包'
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
        }
    }
};

export const getDictionary = (locale: Locale) => {
    return dictionaries[locale] || dictionaries['ja'];
};
