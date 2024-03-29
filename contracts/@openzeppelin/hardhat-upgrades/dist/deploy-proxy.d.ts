import type { HardhatRuntimeEnvironment } from 'hardhat/types';
import type { ContractFactory, Contract } from 'ethers';
import { DeployProxyOptions } from '../dist/utils';
export interface DeployFunction {
    (ImplFactory: ContractFactory, args?: unknown[], opts?: DeployProxyOptions): Promise<Contract>;
    (ImplFactory: ContractFactory, opts?: DeployProxyOptions): Promise<Contract>;
}
export declare function makeDeployProxy(hre: HardhatRuntimeEnvironment, defenderModule: boolean): DeployFunction;
//# sourceMappingURL=deploy-proxy.d.ts.map