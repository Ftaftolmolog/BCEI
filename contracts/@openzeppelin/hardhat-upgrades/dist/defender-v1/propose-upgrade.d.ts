import '../../dist/type-extensions';
import { ProposalResponse, CreateProposalRequest } from '@openzeppelin/defender-admin-client';
import { ContractFactory, ethers } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import type { VerificationResponse } from '../../dist/defender-v1/verify-deployment';
import { UpgradeOptions } from '../../dist/utils/options';
export interface ExtendedProposalResponse extends ProposalResponse {
    txResponse?: ethers.TransactionResponse;
    verificationResponse?: VerificationResponse;
}
export type ProposeUpgradeFunction = (proxyAddress: string, contractNameOrImplFactory: string | ContractFactory, opts?: ProposalOptions) => Promise<ExtendedProposalResponse>;
export interface ProposalOptions extends UpgradeOptions {
    title?: string;
    description?: string;
    proxyAdmin?: string;
    multisig?: string;
    multisigType?: CreateProposalRequest['viaType'];
    bytecodeVerificationReferenceUrl?: string;
}
export declare function makeProposeUpgrade(hre: HardhatRuntimeEnvironment): ProposeUpgradeFunction;
//# sourceMappingURL=propose-upgrade.d.ts.map