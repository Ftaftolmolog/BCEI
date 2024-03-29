import { HardhatRuntimeEnvironment } from 'hardhat/types';
import type { ContractFactory, ethers } from 'ethers';
import { DeployImplementationOptions } from '../dist/utils';
export type DeployImplementationFunction = (ImplFactory: ContractFactory, opts?: DeployImplementationOptions) => Promise<DeployImplementationResponse>;
export type DeployImplementationResponse = string | ethers.TransactionResponse;
export declare function makeDeployImplementation(hre: HardhatRuntimeEnvironment, defenderModule: boolean): DeployImplementationFunction;
//# sourceMappingURL=deploy-implementation.d.ts.map