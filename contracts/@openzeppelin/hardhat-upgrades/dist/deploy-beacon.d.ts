import type { HardhatRuntimeEnvironment } from 'hardhat/types';
import type { ContractFactory, Contract } from 'ethers';
import { DeployBeaconOptions } from '../dist/utils';
export interface DeployBeaconFunction {
    (ImplFactory: ContractFactory, opts?: DeployBeaconOptions): Promise<Contract>;
}
export declare function makeDeployBeacon(hre: HardhatRuntimeEnvironment, defenderModule: boolean): DeployBeaconFunction;
//# sourceMappingURL=deploy-beacon.d.ts.map