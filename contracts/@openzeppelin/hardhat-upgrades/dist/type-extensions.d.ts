import 'hardhat/types/runtime';
import 'hardhat/types/config';
import type { HardhatUpgrades, DefenderHardhatUpgrades } from '../dist';
declare module 'hardhat/types/runtime' {
    interface HardhatRuntimeEnvironment {
        upgrades: HardhatUpgrades;
        defender: DefenderHardhatUpgrades;
    }
}
export interface HardhatDefenderConfig {
    apiKey: string;
    apiSecret: string;
    useDefenderDeploy?: boolean;
    network?: string;
}
declare module 'hardhat/types/config' {
    interface HardhatUserConfig {
        defender?: HardhatDefenderConfig;
    }
    interface HardhatConfig {
        defender?: HardhatDefenderConfig;
    }
}
//# sourceMappingURL=type-extensions.d.ts.map