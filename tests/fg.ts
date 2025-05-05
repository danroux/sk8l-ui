import { FactoryGirl, ObjectAdapter } from 'factory-girl-ts';
import type { ObjectMeta, Time } from "../src/components/protos/k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.ts";

import { create } from "@bufbuild/protobuf";
import { TimestampSchema } from "@/components/protos/k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.ts";
import {
  type Timestamp,
  timestampNow,
  timestampFromDate,
  timestampFromMs,
  timestampDate,
  timestampMs,
} from "@bufbuild/protobuf/wkt";

FactoryGirl.setAdapter(new ObjectAdapter());

const exampleTime: Time = createTimeFromDate(new Date('2025-01-01T00:00:00Z')) as unknown as Time;

export const uncountedTerminatedPodsFactory = FactoryGirl.define<UncountedTerminatedPods>('UncountedTerminatedPods', () => ({
  succeeded: ['pod-uid-1', 'pod-uid-2'],
  failed: ['pod-uid-3'],
}));

export const jobConditionCompleteFactory = FactoryGirl.define<JobCondition>('JobConditionComplete', () => ({
  type: 'Complete',
  status: 'True',
  lastProbeTime: exampleTime,
  lastTransitionTime: exampleTime,
  reason: 'JobCompleted',
  message: 'The job completed successfully.',
}));

export const jobConditionRunningFactory = FactoryGirl.define<JobCondition>('JobConditionRunning', () => ({
  type: 'Running',
  status: 'True',
  lastProbeTime: '2025-01-01T01:30:00Z' as unknown as Time,
  lastTransitionTime: '2025-01-01T01:30:00Z' as unknown as Time,
  reason: 'JobRunning',
  message: 'The job is currently running.',
}));

export const jobConditionFailedFactory = FactoryGirl.define<JobCondition>('JobConditionFailed', () => ({
  type: 'Failed',
  status: 'False',
  lastProbeTime: exampleTime,
  lastTransitionTime: exampleTime,
  reason: 'JobFailed',
  message: 'The job failed due to an error.',
}));

export const jobStatusCompletedFactory = FactoryGirl.define<JobStatus>('JobStatusCompleted', async (buildOptions) => ({
  conditions: [await jobConditionCompleteFactory.build()],
  startTime: exampleTime,
  completionTime: buildOptions.completionTime || createTimeFromDate(new Date('2025-03-01T00:00:00Z')) as unknown as Time,
  active: 0,
  succeeded: 5,
  failed: 0,
  terminating: 0,
  completedIndexes: '0-4',
  failedIndexes: '',
  uncountedTerminatedPods: await uncountedTerminatedPodsFactory.build(),
  ready: 0,
}));

export const jobStatusRunningFactory = FactoryGirl.define<JobStatus>('JobStatusRunning', async () => ({
  conditions: [await jobConditionRunningFactory.build()],
  startTime: '2025-01-01T01:30:00Z' as unknown as Time,
  active: 1,
  succeeded: 0,
  failed: 0,
  terminating: 0,
  completedIndexes: '',
  failedIndexes: '',
  ready: 1,
}));

export const jobSpecFactory = FactoryGirl.define<JobSpec>('JobSpec', () => ({
  parallelism: 2,
  completions: 5,
  activeDeadlineSeconds: BigInt(3600),
  backoffLimit: 6,
  backoffLimitPerIndex: 3,
  maxFailedIndexes: 1,
  manualSelector: false,
  ttlSecondsAfterFinished: 100,
  completionMode: 'Indexed',
  suspend: false,
  podReplacementPolicy: 'Failed',
  managedBy: 'job-controller',
}));

export const objectMetaFactory = FactoryGirl.define<ObjectMeta>('ObjectMeta', (buildOptions) => ({
  name: buildOptions.name || 'example-name',
  namespace: buildOptions.namespace || 'default',
  labels: buildOptions.labels || { app: 'batch-processor' },
}));

export const jobFactory = FactoryGirl.define<Job>('Job', async (buildOptions) => ({
  metadata: await objectMetaFactory.build({
    name: buildOptions?.metadata?.name,
    namespace: buildOptions?.metadata?.namespace,
    labels: buildOptions?.metadata?.labels,
  }),
  spec: await jobSpecFactory.build(),
  status: buildOptions?.status || await jobStatusCompletedFactory.build(),
}));

export const jobTemplateSpecFactory = FactoryGirl.define<JobTemplateSpec>('JobTemplateSpec', async (buildOptions) => ({
  metadata: await objectMetaFactory.build({
    name: buildOptions?.metadata?.name,
    namespace: buildOptions?.metadata?.namespace,
    labels: buildOptions?.metadata?.labels,
  }),
  spec: buildOptions?.spec || await jobSpecFactory.build(),
}));

export const cronJobSpecFactory = FactoryGirl.define<CronJobSpec>('CronJobSpec', async (buildOptions) => ({
  schedule: buildOptions?.schedule || '0 2 * * *',
  timeZone: buildOptions?.timeZone || 'UTC',
  startingDeadlineSeconds: buildOptions?.startingDeadlineSeconds || BigInt(60),
  concurrencyPolicy: buildOptions?.concurrencyPolicy || 'Forbid',
  suspend: buildOptions?.suspend ?? false,
  jobTemplate: buildOptions?.jobTemplate || await jobTemplateSpecFactory.build(),
  successfulJobsHistoryLimit: buildOptions?.successfulJobsHistoryLimit ?? 3,
  failedJobsHistoryLimit: buildOptions?.failedJobsHistoryLimit ?? 1,
}));

export const terminationReasonFactory = FactoryGirl.define<TerminationReason>('TerminationReason',  async (buildOptions) => ({
    terminationDetails: await containerStateTerminatedFactory.build(),
    containerName: 'my-container',
  })
);

export const jobResponseFactory = FactoryGirl.define<JobResponse>('JobResponse', async (buildOptions) => ({
  metadata: buildOptions?.metadata || await objectMetaFactory.build(),
  spec: buildOptions?.spec || await jobSpecFactory.build(),
  jobStatus: buildOptions?.jobStatus || await jobStatusCompletedFactory.build(),
  name: buildOptions?.name || 'example-job-response',
  namespace: buildOptions?.namespace || 'default',
  creationTimestamp: buildOptions?.creationTimestamp || '2025-01-01T00:00:00Z',
  Uuid: buildOptions?.Uuid || '550e8400-e29b-41d4-a716-446655440000',
  generation: buildOptions?.generation ?? BigInt(1),
  duration: buildOptions?.duration || '1h0m0s',
  durationInS: buildOptions?.durationInS ?? BigInt(3600),
  status: buildOptions?.status || await jobStatusCompletedFactory.build(),
  succeeded: buildOptions?.succeeded ?? true,
  failed: buildOptions?.failed ?? false,
  failureCondition: buildOptions?.failureCondition || await jobConditionFailedFactory.build(),
  pods: buildOptions?.pods || [],
  terminationReasons: buildOptions?.terminationReasons || [await terminationReasonFactory.build()],
  withSidecarContainers: buildOptions?.withSidecarContainers ?? false,
}));

const eightDaysAgoAtMidnight = new Date(new Date().setDate(new Date().getDate() - 8)).toISOString().replace(/T.+/, 'T00:00:00.000Z');

export const cronJobResponseFactory = FactoryGirl.define<CronjobResponse>('CronjobResponse', async (buildOptions) => ({
  name: buildOptions?.name || 'example-cronjob',
  namespace: buildOptions?.namespace || 'default',
  uid: buildOptions?.uid || '550e8400-e29b-41d4-a716-446655440000',
  containerCommands: buildOptions?.containerCommands || {},
  creationTimestamp: buildOptions?.creationTimestamp || eightDaysAgoAtMidnight,
  definition: buildOptions?.definition || '0 0 * * *',
  lastSuccessfulTime: buildOptions?.lastSuccessfulTime || eightDaysAgoAtMidnight,
  lastScheduleTime: buildOptions?.lastScheduleTime || '2025-01-01T00:00:00Z',
  active: buildOptions?.active ?? true,
  jobs: buildOptions?.jobs || [
    await jobResponseFactory.build({ name: 'job-001' }),
    await jobResponseFactory.build({ name: 'job-002' }),
  ],
  runningJobs: buildOptions?.runningJobs || [],
  runningJobsPods: buildOptions?.runningJobsPods || [],
  jobsPods: buildOptions?.jobsPods || [],
  lastDuration: buildOptions?.lastDuration || BigInt(3600_000_000_000),
  currentDuration: buildOptions?.currentDuration || BigInt(1800_000_000_000),
  spec: buildOptions?.spec || await cronJobSpecFactory.build(),
  failed: buildOptions?.failed ?? false,
}));

export function createTimeFromDate(date: Date): Time {
    const tsFromDate: Timestamp = timestampFromDate(date);
    return tsFromDate;
};

const specificDate = new Date(Date.UTC(2025, 3, 25, 12, 0, 0));

export const containerStateTerminatedFactory = FactoryGirl.define<ContainerStateTerminated>(
  'ContainerStateTerminated',
  () => ({
    exitCode: 0,
    signal: 0,
    reason: 'Completed',
    message: 'Container terminated successfully',
    startedAt: undefined,
    finishedAt: createTimeFromDate(specificDate),
    containerID: 'docker://1234567890abcdef',
  })
);
