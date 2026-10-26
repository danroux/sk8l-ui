# sk8l

sk8l/skål

Monitor your cronjobs activity. Use the exported prometheus metrics to get alerts when your cronjob fails, takes longer than expected or does not start when it should.

- Get an overview of your cronjobs running in a namespace
- See which cronjobs run more often
- Get a quick glimpse of a cronjob, job or pod configuration via the UI
- Use the exported prometheus metrics:
  - Total registered cronjobs
  - Total completed cronjobs
  - Total cronjobs failures
  - Amount of current running cronjobs
  - Total completions of a cronjobs
  - Current duration of a running cronjob
  - Total failures of a cronjob
- Familiar UI, based on the open source Primer framework by github.
  - https://primer.style/
  - https://github.com/primer

## Screenshots

https://sk8l.io/

### HELM Chart

https://artifacthub.io/packages/helm/sk8l/sk8l

```
helm repo add sk8l https://sk8l.io/charts
helm repo update

helm search repo sk8l

helm upgrade --install [RELEASE_NAME] sk8l/sk8l \
--set namespace=[NAMESPACE] \
--set serviceAccount.metadata.namespace=[NAMESPACE]
```

## Supported Kubernetes versions
The Kubernetes community releases minor versions roughly every three months. These are the versions currently supported and tested against.

| Version       | Tested Version |
| ------------- | -------------- |
| v1.37         | v1.37.0        |
| v1.36         | v1.36.4        |
| v1.35         | v1.35.8        |
| v1.34         | v1.34.11       |
