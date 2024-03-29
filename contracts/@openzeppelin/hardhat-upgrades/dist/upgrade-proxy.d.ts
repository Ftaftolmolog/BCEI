/// <reference types="debug" />
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import type { ContractFactory, Contract } from 'ethers';
import { UpgradeProxyOptions, ContractAddressOrInstance } from '../dist/utils';
export type UpgradeFunction = (proxy: ContractAddressOrInstance, ImplFactory: ContractFactory, opts?: UpgradeProxyOptions) => Promise<Contract>;
export declare function makeUpgradeProxy(hre: HardhatRuntimeEnvironment, defenderModule: boolean, log?: import("debug").Debugger): UpgradeFunction;
//# sourceMappingURL=upgrade-proxy.d.ts.map