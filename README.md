# k8s-set-context

GitHub Action for setting context before deploying to Kubernetes clusters.

## Action inputs

| Action inputs | Description |
| --- | --- |
| `kubeconfig` | (Required) The K8s kubeconfig |

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
