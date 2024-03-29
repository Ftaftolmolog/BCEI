import '../../dist/type-extensions';
import { AdminClient } from '@openzeppelin/defender-admin-client';
import { Artifact, BuildInfo, CompilerOutputBytecode, HardhatRuntimeEnvironment } from 'hardhat/types';
export type VerificationResponse = Awaited<ReturnType<AdminClient['verifyDeployment']>>;
type ExtendedArtifact = Artifact & {
    immutableReferences: CompilerOutputBytecode['immutableReferences'];
};
export type VerifyDeployFunction = (address: string, contractName: string, referenceUrl: string) => Promise<VerificationResponse>;
export type VerifyDeployWithUploadedArtifactFunction = (address: string, contractName: string, artifactUri: string) => Promise<VerificationResponse>;
export type GetVerifyDeployArtifactFunction = (contractName: string) => Promise<ExtendedArtifact>;
export type GetVerifyDeployBuildInfoFunction = (contractName: string) => Promise<BuildInfo>;
export type GetBytecodeDigestFunction = (contractName: string) => Promise<string>;
export declare function makeVerifyDeploy(hre: HardhatRuntimeEnvironment): VerifyDeployFunction;
export declare function makeVerifyDeployWithUploadedArtifact(hre: HardhatRuntimeEnvironment): VerifyDeployWithUploadedArtifactFunction;
export declare function makeGetVerifyDeployArtifact(hre: HardhatRuntimeEnvironment): GetVerifyDeployArtifactFunction;
export declare function makeGetVerifyDeployBuildInfo(hre: HardhatRuntimeEnvironment): GetVerifyDeployBuildInfoFunction;
export declare function makeGetBytecodeDigest(hre: HardhatRuntimeEnvironment): (contractName: string) => Promise<string>;
export {};
//# sourceMappingURL=verify-deployment.d.ts.map