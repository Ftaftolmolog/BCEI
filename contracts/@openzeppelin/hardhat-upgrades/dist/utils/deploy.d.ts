import type { Deployment, RemoteDeploymentId } from '@openzeppelin/upgrades-core';
import type { ethers, ContractFactory } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { EthersDeployOptions, DefenderDeployOptions, UpgradeOptions } from '../../dist/utils/options';
export interface DeployTransaction {
    deployTransaction?: ethers.TransactionResponse;
}
export declare function deploy(hre: HardhatRuntimeEnvironment, opts: UpgradeOptions & EthersDeployOptions & DefenderDeployOptions, factory: ContractFactory, ...args: unknown[]): Promise<Required<Deployment> & DeployTransaction & RemoteDeploymentId>;
//# sourceMappingURL=deploy.d.ts.map