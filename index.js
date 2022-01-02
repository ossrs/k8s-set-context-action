const core = require('@actions/core');

const path = require('path');
const fs = require('fs');

async function run() {
  const kubeconfig = core.getInput('kubeconfig', { required: true });
  const runnerTempDirectory = process.env['RUNNER_TEMP']; // Using process.env until the core libs are updated
  const kubeconfigPath = path.join(runnerTempDirectory, `kubeconfig_${Date.now()}`);

  core.debug(`Writing kubeconfig contents to ${kubeconfigPath}`);
  fs.writeFileSync(kubeconfigPath, kubeconfig);

  fs.chmodSync(kubeconfigPath, '600');

  core.exportVariable('KUBECONFIG', kubeconfigPath);
  console.log('KUBECONFIG environment variable is set');
}
run();