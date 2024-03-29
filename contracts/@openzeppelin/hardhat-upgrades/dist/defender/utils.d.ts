import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { RemoteDeployment, DeployOpts } from '@openzeppelin/upgrades-core';
import { Network } from '@openzeppelin/defender-sdk-base-client';
import { TxOverrides } from '@openzeppelin/defender-sdk-deploy-client';
import { HardhatDefenderConfig } from '../../dist/type-extensions';
import { DefenderDeploy } from '../../dist/utils';
import { Overrides } from 'ethers';
export declare function getDefenderApiKey(hre: HardhatRuntimeEnvironment): HardhatDefenderConfig;
export declare function getNetwork(hre: HardhatRuntimeEnvironment): Promise<Network>;
export declare function enableDefender<T extends DefenderDeploy>(hre: HardhatRuntimeEnvironment, defenderModule: boolean, opts: T): T;
/**
 * Disables Defender for a function that does not support it.
 * If opts.useDefenderDeploy or defenderModule is true, throws an error.
 * If hre.config.defender.useDefenderDeploy is true, logs a debug message and passes (to allow fallback to Hardhat signer).
 *
 * @param hre The Hardhat runtime environment
 * @param defenderModule Whether the function was called from the defender module
 * @param opts The options passed to the function
 * @param unsupportedFunction The name of the function that does not support Defender
 */
export declare function disableDefender(hre: HardhatRuntimeEnvironment, defenderModule: boolean, opts: DefenderDeploy, unsupportedFunction: string): void;
/**
 * Gets the remote deployment response for the given id.
 *
 * @param hre The Hardhat runtime environment
 * @param remoteDeploymentId The deployment id.
 * @returns The remote deployment response, or undefined if the deployment is not found.
 * @throws Error if the deployment response could not be retrieved.
 */
export declare function getRemoteDeployment(hre: HardhatRuntimeEnvironment, remoteDeploymentId: string): Promise<RemoteDeployment | undefined>;
/**
 * Waits indefinitely for the deployment until it is completed or failed.
 * Returns the last known transaction hash seen from the remote deployment, or undefined if the remote deployment was not retrieved.
 */
export declare function waitForDeployment(hre: HardhatRuntimeEnvironment, opts: DeployOpts, address: string, remoteDeploymentId: string): Promise<string | undefined>;
export declare function parseTxOverrides(overrides?: Overrides): TxOverrides | undefined;
//# sourceMappingURL=utils.d.ts.map