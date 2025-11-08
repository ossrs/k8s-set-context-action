# k8s-set-context-action

**IMPORTANT NOTE**: This repository is depreacated and archived, please use [srs-cdk](https://github.com/ossrs/srs-cdk) instead. CDK is the future of default and recommended deployment for SRS and Oryx.

GitHub Action for setting context before deploying to Kubernetes clusters.

## Action inputs

| Action inputs | Description |
| --- | --- |
| `kubeconfig` | (Required) The K8s kubeconfig |

## Example

```yaml
- name: Set K8s context
  uses: ossrs/k8s-set-context-action@v1
  with:
    kubeconfig: '${{ secrets.KUBECONFIG }}'

- name: Run K8s
  run: |-
    kubectl cluster-info
```
