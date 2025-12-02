---
url: "https://formbricks.com/docs/self-hosting/setup/monitoring"
title: "Monitoring - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/setup/monitoring#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Setup

Monitoring

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### Self Hosting

- [Self-Hosting](https://formbricks.com/docs/self-hosting/overview)

##### Setup

- [One-Click Setup](https://formbricks.com/docs/self-hosting/setup/one-click)
- [Docker Setup](https://formbricks.com/docs/self-hosting/setup/docker)
- [Monitoring](https://formbricks.com/docs/self-hosting/setup/monitoring)
- [Cluster Setup](https://formbricks.com/docs/self-hosting/setup/cluster-setup)
- [Kubernetes Deployment](https://formbricks.com/docs/self-hosting/setup/kubernetes)

##### Configuration

- [Custom SSL Certificate](https://formbricks.com/docs/self-hosting/configuration/custom-ssl)
- [Environment Variables](https://formbricks.com/docs/self-hosting/configuration/environment-variables)
- [SMTP Configuration](https://formbricks.com/docs/self-hosting/configuration/smtp)
- [File Uploads Configuration](https://formbricks.com/docs/self-hosting/configuration/file-uploads)
- [Domain Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration)
- [Custom Subpath](https://formbricks.com/docs/self-hosting/configuration/custom-subpath)
- Auth & SSO

- Integrations


##### Advanced

- [Migration](https://formbricks.com/docs/self-hosting/advanced/migration)
- [License](https://formbricks.com/docs/self-hosting/advanced/license)
- [License Activation](https://formbricks.com/docs/self-hosting/advanced/license-activation)
- Enterprise Features

- [Rate Limiting](https://formbricks.com/docs/self-hosting/advanced/rate-limiting)

On this page

- [Logging](https://formbricks.com/docs/self-hosting/setup/monitoring#logging)
- [Log Levels](https://formbricks.com/docs/self-hosting/setup/monitoring#log-levels)
- [Log Format](https://formbricks.com/docs/self-hosting/setup/monitoring#log-format)
- [Example Log Entry](https://formbricks.com/docs/self-hosting/setup/monitoring#example-log-entry)
- [Configuring Log Levels](https://formbricks.com/docs/self-hosting/setup/monitoring#configuring-log-levels)
- [AccessDocker Container Logs](https://formbricks.com/docs/self-hosting/setup/monitoring#accessdocker-container-logs)
- [Access Kubernetes Pod Logs](https://formbricks.com/docs/self-hosting/setup/monitoring#access-kubernetes-pod-logs)
- [Log Forwarding](https://formbricks.com/docs/self-hosting/setup/monitoring#log-forwarding)
- [OpenTelemetry Integration](https://formbricks.com/docs/self-hosting/setup/monitoring#opentelemetry-integration)
- [Next.js OpenTelemetry for Tracing](https://formbricks.com/docs/self-hosting/setup/monitoring#next-js-opentelemetry-for-tracing)
- [Default Next.js Instrumentation](https://formbricks.com/docs/self-hosting/setup/monitoring#default-next-js-instrumentation)
- [Supported Backends for Tracing](https://formbricks.com/docs/self-hosting/setup/monitoring#supported-backends-for-tracing)
- [Prometheus Integration](https://formbricks.com/docs/self-hosting/setup/monitoring#prometheus-integration)
- [Configuration](https://formbricks.com/docs/self-hosting/setup/monitoring#configuration)
- [Available Metrics](https://formbricks.com/docs/self-hosting/setup/monitoring#available-metrics)
- [Collecting Metrics](https://formbricks.com/docs/self-hosting/setup/monitoring#collecting-metrics)
- [Resource Attributes](https://formbricks.com/docs/self-hosting/setup/monitoring#resource-attributes)
- [Health Checks](https://formbricks.com/docs/self-hosting/setup/monitoring#health-checks)

Setup

# Monitoring

Monitoring your Formbricks installation for optimal performance.

## [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#logging)  Logging

Formbricks follows Next.js best practices with all logs being written to stdout/stderr, making it easy to collect and forward logs to your preferred logging solution.

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#log-levels)  Log Levels

- `debug`: Detailed information for debugging purposes.
- `info`: General information about the system’s operation.
- `warn`: Potential issues that may require attention.
- `error`: Errors that occur during the operation of the system.
- `fatal`: Critical errors that cause the system to crash.

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#log-format)  Log Format

Formbricks uses JSON format for logs, which is structured and easy to parse. Each log entry includes:

- `level`: The log level (e.g., info, error).
- `time`: Timestamp of the log entry in milliseconds since epoch.
- `pid`: Process ID of the application.
- `hostname`: Hostname of the server where the log was generated.
- `requestId`: Unique identifier for the request (if applicable).
- `userId`: Unique identifier for the user (if applicable).
- `msg`: The log message.
- `stack`: Stack trace (if applicable).
- `data`: Additional data related to the log entry.

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#example-log-entry)  Example Log Entry

Copy

```
{
  "hostname": "server-1",
  "level": 30,
  "msg": "User logged in successfully",
  "pid": 12345,
  "requestId": "abc-123",
  "time": 1710000000000,
  "userId": "user-789"
}
```

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#configuring-log-levels)  Configuring Log Levels

You can configure the minimum log level using the `LOG_LEVEL` environment variable. Valid values: `debug`, `info`, `warn`, `error`, `fatal`.
The default log level in production environments is `warn`, while in development environments it is `debug`.

Copy

```
LOG_LEVEL=debug
```

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#accessdocker-container-logs)  AccessDocker Container Logs

Copy

```
# One-Click setup
cd formbricks
docker compose logs

# Standard Docker commands
docker logs <container-name>
docker logs -f <container-name> # Follow logs
```

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#access-kubernetes-pod-logs)  Access Kubernetes Pod Logs

Copy

```
kubectl logs <pod-name> -n <namespace>
kubectl logs -f <pod-name> -n <namespace> # Follow logs
```

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#log-forwarding)  Log Forwarding

Since all logs are written to stdout/stderr, you can integrate with various logging solutions:

- ELK Stack (Elasticsearch, Logstash, Kibana)
- Fluentd/Fluent Bit
- Datadog
- Splunk
- CloudWatch Logs (AWS)

## [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#opentelemetry-integration)  OpenTelemetry Integration

Formbricks offers two complementary observability approaches:

1. **Next.js OpenTelemetry** \- For tracing and APM integration
2. **Prometheus Integration** \- For metrics collection and monitoring

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#next-js-opentelemetry-for-tracing)  Next.js OpenTelemetry for Tracing

Formbricks leverages Next.js’s built-in OpenTelemetry instrumentation for tracing and APM integration. When enabled, it automatically instruments various aspects of your application, providing detailed insights into request flows and performance.To enable Next.js OpenTelemetry, set the following environment variables:

Copy

```
OTEL_ENABLED=true
OTEL_ENDPOINT=<your-collector-endpoint> # e.g., http://localhost:4318/v1/traces for OTLP HTTP
OTEL_SERVICE_NAME=formbricks
NEXT_OTEL_VERBOSE=1 # Optional: enables detailed tracing
```

#### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#default-next-js-instrumentation)  Default Next.js Instrumentation

The Next.js OpenTelemetry integration automatically tracks:

- HTTP requests and responses
- Route rendering
- API route execution
- Server-side operations
- Database queries
- External API calls

#### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#supported-backends-for-tracing)  Supported Backends for Tracing

OpenTelemetry trace data can be exported to various observability platforms:

##### Tracing Backends

- Jaeger
- Zipkin
- Tempo

##### APM & Full-Stack Observability Platforms

- New Relic
- Datadog
- Dynatrace
- Azure Monitor
- AWS X-Ray
- Google Cloud Trace

## [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#prometheus-integration)  Prometheus Integration

Formbricks implements a dedicated Prometheus metrics exporter using OpenTelemetry. This integration runs a metrics server on a separate port and exposes metrics in Prometheus format for scraping. It focuses specifically on host and runtime metrics rather than application-specific traces.

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#configuration)  Configuration

To enable and configure the Prometheus exporter, set the following environment variables:

Copy

```
PROMETHEUS_ENABLED=1
PROMETHEUS_EXPORTER_PORT=9464  # Optional, defaults to 9464
```

The `PROMETHEUS_ENABLED` environment variable must be set to `1` to enable metrics collection. The `PROMETHEUS_EXPORTER_PORT` variable is optional and defaults to 9464 if not specified.The exporter listens on all network interfaces (0.0.0.0) and exposes metrics at the `/metrics` endpoint.

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#available-metrics)  Available Metrics

The metrics exported by the Prometheus integration include:

- **Host Metrics**:  - CPU usage (user, system, idle)
  - Memory usage (used, free, cached)
  - Disk I/O (reads, writes)
  - Network I/O (bytes in/out, packets in/out)
- **HTTP Metrics**:  - Request counts
  - Request durations
  - Error rates
- **Runtime Metrics**:  - Garbage collection frequency and duration
  - Event loop lag
  - Heap statistics (size, used, available)

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#collecting-metrics)  Collecting Metrics

You can scrape metrics from your Prometheus server by adding the following to your Prometheus configuration:

Copy

```
scrape_configs:
  - job_name: "formbricks"
    static_configs:
      - targets: ["your-formbricks-host:9464"]
```

### [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#resource-attributes)  Resource Attributes

The metrics include resource attributes automatically detected from:

- Environment variables
- Process information
- Host information

These attributes can help you filter and group metrics in your dashboards.

## [​](https://formbricks.com/docs/self-hosting/setup/monitoring\#health-checks)  Health Checks

Available endpoints:

Copy

```
GET /health
```

Use these endpoints for monitoring system health in container orchestration and monitoring tools.

Was this page helpful?

YesNo

[Docker Setup](https://formbricks.com/docs/self-hosting/setup/docker) [Cluster Setup](https://formbricks.com/docs/self-hosting/setup/cluster-setup)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.