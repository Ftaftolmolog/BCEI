import type { HardhatRuntimeEnvironment } from 'hardhat/types';
import { Contract, Signer } from 'ethers';
import { EthersDeployOptions } from '../dist/utils';
type TransferProxyAdminOwnershipOptions = {
    silent?: boolean;
};
export type ChangeAdminFunction = (proxyAddress: string, newAdmin: string, signer?: Signer, opts?: EthersDeployOptions) => Promise<void>;
export type TransferProxyAdminOwnershipFunction = (proxyAddress: string, newOwner: string, signer?: Signer, opts?: TransferProxyAdminOwnershipOptions & EthersDeployOptions) => Promise<void>;
export type GetInstanceFunction = (signer?: Signer) => Promise<Contract>;
export declare function makeChangeProxyAdmin(hre: HardhatRuntimeEnvironment, defenderModule: boolean): ChangeAdminFunction;
export declare function makeTransferProxyAdminOwnership(hre: HardhatRuntimeEnvironment, defenderModule: boolean): TransferProxyAdminOwnershipFunction;
export {};
//# sourceMappingURL=admin.d.ts.map