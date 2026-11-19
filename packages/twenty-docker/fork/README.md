# Self-hosted fork customizations

`enterprise-unlock.cjs` is a Node preload for deployments that run a prebuilt
Twenty server image rather than rebuilding this fork. It applies the same
enterprise-license behaviour as the source patch in
`packages/twenty-server/src/engine/core-modules/enterprise/services/enterprise-plan.service.ts`.

Mount it read-only and start Node with:

```text
NODE_OPTIONS=--require /app/enterprise-unlock.cjs
```

This is for self-hosted deployments of this fork only.
