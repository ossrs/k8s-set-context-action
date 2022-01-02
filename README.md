# k8s-set-context

GitHub Action for setting context before deploying to Kubernetes clusters.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

## Action inputs

<table>
  <thead>
    <tr>
      <th>Action inputs</th>
      <th>Description</th>
    </tr>
  </thead>

  <tr>
    <td>`kubeconfig`</td>
    <td>(Required) Credentials required to authenticate with Azure. Steps to obtain these credentials are provided below</td>
  </tr>
  <tr>
    <td><code>resource-group</code><br/>Resource group</td>
    <td>(Required) Resource group containing the AKS cluster</td>
  </tr>
  <tr>
    <td><code>cluster-name</code><br/>Cluster name</td>
    <td>(Required) Name of the AKS cluster</td>
  </tr>
</table>

## Example

```yaml
- name: Set K8s context
  uses: ossrs/k8s-set-context@v1
  with:
    kubeconfig: '${{ secrets.KUBECONFIG }'

- name: Run K8s
  run: |-
    kubectl cluster-info
```
