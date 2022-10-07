import {
  createBrowserUmdBuildConfig,
  createSlimBrowserUmdBuildConfig,
  createModuleBuild,
  createBrowserTestBuild,
  createEmptyModuleDist
} from './rollup-config-factory';

// For some reason, this does not trigger properly inside build config
// so I trigger it manually - otherwise built package fails
createEmptyModuleDist()().ongenerate()


export default [
  createBrowserUmdBuildConfig(),
  createSlimBrowserUmdBuildConfig(),
  createModuleBuild(),
  createBrowserTestBuild(),
];
