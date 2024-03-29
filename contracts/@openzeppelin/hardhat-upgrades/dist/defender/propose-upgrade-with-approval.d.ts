import '../../dist/type-extensions';
import { ContractFactory, ethers } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DefenderDeployOptions, UpgradeOptions } from '../../dist/utils';
export interface UpgradeProposalResponse {
    proposalId: string;
    url?: string;
    txResponse?: ethers.TransactionResponse;
}
export type ProposeUpgradeWithApprovalFunction = (proxyAddress: string, contractNameOrImplFactory: string | ContractFactory, opts?: ProposalOptions) => Promise<UpgradeProposalResponse>;
export interface ProposalOptions extends UpgradeOptions, DefenderDeployOptions {
    approvalProcessId?: string;
}
export declare function makeProposeUpgradeWithApproval(hre: HardhatRuntimeEnvironment, defenderModule: boolean): ProposeUpgradeWithApprovalFunction;
//# sourceMappingURL=propose-upgrade-with-approval.d.ts.map