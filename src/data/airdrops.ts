export type AirdropStatus = 'active' | 'upcoming' | 'expired';

export interface AirdropStep {
    id: string;
    description: string;
    url?: string;
}

export interface AirdropTask {
    id: string;
    title: string;
    protocol: string;
    category: string;
    logo: string;
    status: AirdropStatus;
    difficulty: 'Low' | 'Medium' | 'High';
    potentialReward: '⭐' | '⭐⭐' | '⭐⭐⭐' | '⭐⭐⭐⭐' | '⭐⭐⭐⭐⭐';
    description: {
        ja: string;
        en: string;
        zh: string;
    };
    steps: {
        ja: AirdropStep[];
        en: AirdropStep[];
        zh: AirdropStep[];
    };
    deadline?: string;
}

export const AIRDROP_TASKS: AirdropTask[] = [
    {
        id: 'linea-voyage',
        title: 'Linea Surge / Voyage',
        protocol: 'Linea',
        category: 'Layer 2',
        logo: 'https://assets.coingecko.com/coins/images/30395/large/linea.png',
        status: 'active',
        difficulty: 'Medium',
        potentialReward: '⭐⭐⭐⭐⭐',
        description: {
            ja: 'Consensys社が開発するzkEVM「Linea」のLXP収集キャンペーン。大型エアドロが最も期待されているプロジェクトの一つ。',
            en: 'LXP collection campaign for "Linea", the zkEVM developed by Consensys. Highly anticipated major airdrop.',
            zh: 'Consensys开发的zkEVM“Linea”的LXP收集活动。最受期待的大型空投项目之一。'
        },
        steps: {
            ja: [
                { id: 'l1', description: 'MetamaskにLineaネットワークを追加する' },
                { id: 'l2', description: '公式サイトでProof of Humanity (PoH) 認証を完了する', url: 'https://poh.linea.build/' },
                { id: 'l3', description: '指定のエコシステムdAppsでトランザクションを実行しLXPを稼ぐ' }
            ],
            en: [
                { id: 'l1', description: 'Add Linea network to Metamask' },
                { id: 'l2', description: 'Complete Proof of Humanity (PoH)', url: 'https://poh.linea.build/' },
                { id: 'l3', description: 'Perform transactions on ecosystem dApps to earn LXP' }
            ],
            zh: [
                { id: 'l1', description: '将Linea网络添加到Metamask' },
                { id: 'l2', description: '在官网完成人类证明 (PoH) 认证', url: 'https://poh.linea.build/' },
                { id: 'l3', description: '在指定的生态dApps上执行交易以赚取LXP' }
            ]
        }
    },
    {
        id: 'scroll-sessions',
        title: 'Scroll Sessions Zero',
        protocol: 'Scroll',
        category: 'zkEVM',
        logo: 'https://assets.coingecko.com/coins/images/32208/large/scroll.jpg',
        status: 'active',
        difficulty: 'Low',
        potentialReward: '⭐⭐⭐⭐',
        description: {
            ja: 'Ethereum等価を目指すzkEVM「Scroll」のポイントプログラム（Marks収集）。ブリッジするだけで開始できる手軽さが魅力。',
            en: 'Point program (Marks collection) for Scroll, an Ethereum-equivalent zkEVM. Easy to start by just bridging.',
            zh: '以太坊等效zkEVM“Scroll”的积分计划（收集Marks）。仅需跨链即可开始，非常便捷。'
        },
        steps: {
            ja: [
                { id: 's1', description: '公式ブリッジを使ってEthereumメインネットからScrollへETHを送る', url: 'https://scroll.io/bridge' },
                { id: 's2', description: 'Scroll上のAave V3などに資産を供給して Marks を蓄積させる' },
                { id: 's3', description: 'Session Zero ページでMarksの獲得数を確認する' }
            ],
            en: [
                { id: 's1', description: 'Bridge ETH from Ethereum mainnet to Scroll via official bridge', url: 'https://scroll.io/bridge' },
                { id: 's2', description: 'Supply assets on Scroll (e.g., Aave V3) to accumulate Marks' },
                { id: 's3', description: 'Check your Marks on the Session Zero page' }
            ],
            zh: [
                { id: 's1', description: '使用官方桥将ETH从以太坊主网转移到Scroll', url: 'https://scroll.io/bridge' },
                { id: 's2', description: '在Scroll上提供资产（如Aave V3）以积累Marks' },
                { id: 's3', description: '在Session Zero页面查看您获得的Marks' }
            ]
        }
    },
    {
        id: 'berachain-v2',
        title: 'Berachain bArtio B2 Testnet',
        protocol: 'Berachain',
        category: 'Layer 1',
        logo: 'https://assets.coingecko.com/coins/images/28359/large/Bera.jpg',
        status: 'active',
        difficulty: 'Medium',
        potentialReward: '⭐⭐⭐⭐⭐',
        description: {
            ja: 'Proof of Liquidityを採用する超注目のL1。テストネットbArtio上で蛇口からトークンをもらい、DEXやレンディングを触ることでメインネットでの報酬が期待できる（ノーリスク）。',
            en: 'Highly anticipated L1 using Proof of Liquidity. Interact with the bArtio testnet entirely risk-free to qualify for potential mainnet rewards.',
            zh: '采用流动性证明的备受期待的L1。完全无风险地交互bArtio测试网，以获取主网潜在奖励资格。'
        },
        steps: {
            ja: [
                { id: 'b1', description: 'FaucetからBeraテストネットトークンを受け取る', url: 'https://artio.faucet.berachain.com/' },
                { id: 'b2', description: 'BEX (DEX) で BERA を HONEY や STGUSDC にスワップ' },
                { id: 'b3', description: 'BEND (レンディング) に資産を預け入れ、HONEYを借りる' }
            ],
            en: [
                { id: 'b1', description: 'Claim Bera testnet tokens from Faucet', url: 'https://artio.faucet.berachain.com/' },
                { id: 'b2', description: 'Swap BERA to HONEY on BEX (DEX)' },
                { id: 'b3', description: 'Deposit assets into BEND and borrow HONEY' }
            ],
            zh: [
                { id: 'b1', description: '从水龙头领取Bera测试网代币', url: 'https://artio.faucet.berachain.com/' },
                { id: 'b2', description: '在BEX上将BERA兑换为HONEY' },
                { id: 'b3', description: '在BEND中存入资产并借出HONEY' }
            ]
        }
    }
];
