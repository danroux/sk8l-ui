export interface JobSpec {
  parallelism: number;
  completions: number;
  activeDeadlineSeconds: bigint;
  backoffLimit: number;
  backoffLimitPerIndex: number;
  maxFailedIndexes: number;
  manualSelector: boolean;
  ttlSecondsAfterFinished: number;
  completionMode: string;
  suspend: boolean;
  podReplacementPolicy: string;
  managedBy: string;
}

export interface JobTemplateSpec {
  metadata: {
    name: string;
    namespace: string;
    labels: Record<string, string>;
  };
  spec: JobSpec;
}

export interface CronJobSpec {
  schedule: string;
  timeZone: string;
  startingDeadlineSeconds: bigint;
  concurrencyPolicy: string;
  suspend: boolean;
  jobTemplate: JobTemplateSpec;
  successfulJobsHistoryLimit: number;
  failedJobsHistoryLimit: number;
}

export interface CronjobResponse {
  name: string;
  namespace: string;
  uid: string;
  containerCommands: Record<string, string>;
  creationTimestamp: string;
  definition: string;
  lastSuccessfulTime: string;
  lastScheduleTime: string;
  active: boolean;
  jobs: any[]; // define a JobResponse interface
  runningJobs: any[];
  runningJobsPods: any[];
  jobsPods: any[];
  lastDuration: bigint;
  currentDuration: bigint;
  spec: CronJobSpec;
  failed: boolean;
}
