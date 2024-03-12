import '@nomicfoundation/hardhat-ethers';
import '../dist/type-extensions';
import type { silenceWarnings } from '@openzeppelin/upgrades-core';
import type { DeployFunction } from '../dist/deploy-proxy';
import type { PrepareUpgradeFunction } from '../dist/prepare-upgrade';
import type { UpgradeFunction } from '../dist/upgrade-proxy';
import type { DeployBeaconFunction } from '../dist/deploy-beacon';
import type { DeployBeaconProxyFunction } from '../dist/deploy-beacon-proxy';
import type { UpgradeBeaconFunction } from '../dist/upgrade-beacon';
import type { ForceImportFunction } from '../dist/force-import';
import type { ChangeAdminFunction, TransferProxyAdminOwnershipFunction } from '../dist/admin';
import type { ValidateImplementationFunction } from '../dist/validate-implementation';
import type { ValidateUpgradeFunction } from '../dist/validate-upgrade';
import type { DeployImplementationFunction } from '../dist/deploy-implementation';
import type { DeployContractFunction } from '../dist/deploy-contract';
import type { ProposeUpgradeWithApprovalFunction } from '../dist/defender/propose-upgrade-with-approval';
import type { GetDeployApprovalProcessFunction, GetUpgradeApprovalProcessFunction } from '../dist/defender/get-approval-process';
import type { ProposeUpgradeFunction } from '../dist/defender-v1/propose-upgrade';
import type { VerifyDeployFunction, VerifyDeployWithUploadedArtifactFunction, GetVerifyDeployArtifactFunction, GetVerifyDeployBuildInfoFunction, GetBytecodeDigestFunction } from '../dist/defender-v1/verify-deployment';
export interface HardhatUpgrades {
    deployProxy: DeployFunction;
    upgradeProxy: UpgradeFunction;
    validateImplementation: ValidateImplementationFunction;
    validateUpgrade: ValidateUpgradeFunction;
    deployImplementation: DeployImplementationFunction;
    prepareUpgrade: PrepareUpgradeFunction;
    deployBeacon: DeployBeaconFunction;
    deployBeaconProxy: DeployBeaconProxyFunction;
    upgradeBeacon: UpgradeBeaconFunction;
    forceImport: ForceImportFunction;
    silenceWarnings: typeof silenceWarnings;
    admin: {
        changeProxyAdmin: ChangeAdminFunction;
        transferProxyAdminOwnership: TransferProxyAdminOwnershipFunction;
    };
    erc1967: {
        getAdminAddress: (proxyAdress: string) => Promise<string>;
        getImplementationAddress: (proxyAdress: string) => Promise<string>;
        getBeaconAddress: (proxyAdress: string) => Promise<string>;
    };
    beacon: {
        getImplementationAddress: (beaconAddress: string) => Promise<string>;
    };
}
export interface DefenderV1HardhatUpgrades {
    proposeUpgrade: ProposeUpgradeFunction;
    verifyDeployment: VerifyDeployFunction;
    verifyDeploymentWithUploadedArtifact: VerifyDeployWithUploadedArtifactFunction;
    getDeploymentArtifact: GetVerifyDeployArtifactFunction;
    getDeploymentBuildInfo: GetVerifyDeployBuildInfoFunction;
    getBytecodeDigest: GetBytecodeDigestFunction;
}
export interface DefenderHardhatUpgrades extends HardhatUpgrades, DefenderV1HardhatUpgrades {
    deployContract: DeployContractFunction;
    proposeUpgradeWithApproval: ProposeUpgradeWithApprovalFunction;
    getDeployApprovalProcess: GetDeployApprovalProcessFunction;
    getUpgradeApprovalProcess: GetUpgradeApprovalProcessFunction;
    /**
     * @deprecated Use `getUpgradeApprovalProcess` instead.
     */
    getDefaultApprovalProcess: GetUpgradeApprovalProcessFunction;
}
export { UpgradeOptions } from '../dist/utils/options';
//# sourceMappingURL=index.d.ts.map