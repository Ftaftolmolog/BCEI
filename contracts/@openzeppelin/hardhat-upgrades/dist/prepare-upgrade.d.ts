import { HardhatRuntimeEnvironment } from 'hardhat/types';
import type { ContractFactory } from 'ethers';
import { ContractAddressOrInstance, PrepareUpgradeOptions } from '../dist/utils';
import { DeployImplementationResponse } from '../dist/deploy-implementation';
import { DeployedImpl } from '../dist/utils/deploy-impl';
export type PrepareUpgradeFunction = (referenceAddressOrContract: ContractAddressOrInstance, ImplFactory: ContractFactory, opts?: PrepareUpgradeOptions) => Promise<DeployImplementationResponse>;
export declare function makePrepareUpgrade(hre: HardhatRuntimeEnvironment, defenderModule: boolean): PrepareUpgradeFunction;
export declare function deployImplForUpgrade(hre: HardhatRuntimeEnvironment, referenceAddressOrContract: ContractAddressOrInstance, ImplFactory: ContractFactory, opts?: PrepareUpgradeOptions): Promise<DeployedImpl>;
//# sourceMappingURL=prepare-upgrade.d.ts.map