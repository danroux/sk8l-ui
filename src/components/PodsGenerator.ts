// const {Timestamp} = require('google-protobuf/google/protobuf/timestamp_pb');
// https://github.com/protobufjs/protobuf.js/issues/437
// Define the shape of our processed container status
interface ProcessedContainerStatus {
  state: string;
  reason?: string;
}

// Define the shape of the pod object the UI expects
export interface UIWrappedPod {
  namespace: string;
  name: string;
  jobName: string;
  uid: string;
  startTime: any; // Ideally this matches your Protobuf Timestamp type
  finishedAt: any;
  podIPs: string[];
  podIP: string;
  hostIP: string;
  nodeName: string;
  containerStatuses: ProcessedContainerStatus[];
  initContainerStatuses: ProcessedContainerStatus[];
  ephemeralContainerStatuses: ProcessedContainerStatus[];
  failed: boolean;
  terminationReasons: string[];
  waiting: ProcessedContainerStatus[];
  failing: ProcessedContainerStatus[];
  started: ProcessedContainerStatus[];
}

// Extend the Array to include our custom filter properties
export interface PodsCollection extends Array<UIWrappedPod> {
  failingPods: UIWrappedPod[];
  readyPods: UIWrappedPod[];
  waitingPods: UIWrappedPod[];
}

const PodsGenerator = {
  pods(jobPods: any[]): PodsCollection {
    const pods = [] as unknown as PodsCollection;

    jobPods.forEach((jobPod) => {
      const pod: Partial<UIWrappedPod> = {};

      // Basic Metadata
      pod.namespace = jobPod.metadata?.namespace;
      pod.name = jobPod.metadata?.name;
      pod.jobName = jobPod.metadata?.labels?.['job-name'];
      pod.uid = jobPod.metadata?.uid;

      // Networking & Nodes
      pod.startTime = jobPod.status?.startTime;
      pod.finishedAt = jobPod.finishedAt;
      pod.podIPs = jobPod.status?.podIPs || [];
      pod.podIP = jobPod.status?.podIP;
      pod.hostIP = jobPod.status?.hostIP;
      pod.nodeName = jobPod.spec?.nodeName;

      // Container Status Processing
      pod.containerStatuses = this.containerStatuses(jobPod.status?.containerStatuses || []);
      pod.initContainerStatuses = this.containerStatuses(jobPod.status?.initContainerStatuses || []);
      pod.ephemeralContainerStatuses = this.containerStatuses(jobPod.status?.ephemeralContainerStatuses || []);

      pod.failed = jobPod.failed;
      pod.terminationReasons = jobPod.terminationReasons || [];

      // Categorizing container states
      const filterWaiting = (s: ProcessedContainerStatus) => s.state === "waiting";

      pod.waiting = [
        ...pod.containerStatuses.filter(filterWaiting),
        ...pod.initContainerStatuses.filter(filterWaiting),
        ...pod.ephemeralContainerStatuses.filter(filterWaiting)
      ];

      pod.failing = [
        ...pod.containerStatuses.filter(this.errorReason),
        ...pod.initContainerStatuses.filter(this.errorReason),
        ...pod.ephemeralContainerStatuses.filter(this.errorReason)
      ];

      pod.started = [
        ...pod.containerStatuses.filter(this.runningState),
        ...pod.initContainerStatuses.filter(this.runningState),
        ...pod.ephemeralContainerStatuses.filter(this.runningState)
      ];

      pods.push(pod as UIWrappedPod);
    });

    // Attach metadata properties to the array
    pods.failingPods = this.failingPods(pods);
    pods.readyPods = this.readyPods(pods);
    pods.waitingPods = this.waitingPods(pods);

    return pods;
  },

  runningState(status: ProcessedContainerStatus): boolean {
    return status.state === 'running';
  },

  errorReason(status: ProcessedContainerStatus): boolean {
    return status.reason === 'Error' || status.reason === "CreateContainerConfigError";
  },

  failingPods(pods: UIWrappedPod[]): UIWrappedPod[] {
    return pods.filter((pod) => pod.failing.length > 0);
  },

  waitingPods(pods: UIWrappedPod[]): UIWrappedPod[] {
    return pods.filter((pod) => pod.waiting.length > 0);
  },

  readyPods(pods: UIWrappedPod[]): UIWrappedPod[] {
    return pods.filter((pod) => pod.failing.length === 0 && pod.waiting.length === 0);
  },

  containerStatuses(containerStatuses: any[]): ProcessedContainerStatus[] {
    return containerStatuses.flatMap((cs) => this.processStatus(cs));
  },

  processStatus(containerStatus: any): ProcessedContainerStatus[] {
    if (!containerStatus?.state) return [];

    // Extract properties while ignoring the internal Protobuf $typeName
    const { "$typeName": _, ...properties } = containerStatus.state;
    const statePropsEntries = Object.entries(properties);

    if (statePropsEntries.length === 0) return [];

    const stateKey = statePropsEntries[0][0]; // e.g., 'waiting', 'running', 'terminated'
    const stateAttrs = statePropsEntries[0][1] as any;

    return [{
      state: stateKey,
      reason: stateAttrs?.reason
    }];
  },
};

export { PodsGenerator as default };
