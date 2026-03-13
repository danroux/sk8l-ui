import { FactoryGirl, ObjectAdapter } from 'factory-girl-ts';

FactoryGirl.setAdapter(new ObjectAdapter());

export function createTimeFromDate(date: Date): string {
  return date.toISOString();
}

const eightDaysAgoAtMidnight = new Date(new Date().setDate(new Date().getDate() - 8)).toISOString().replace(/T.+/, 'T00:00:00.000Z');
const specificDate = new Date(Date.UTC(2025, 3, 25, 12, 0, 0));
const exampleTime = createTimeFromDate(new Date('2025-01-01T00:00:00Z'));

export const uncountedTerminatedPodsFactory = FactoryGirl.define('UncountedTerminatedPods', () => ({
  succeeded: ['pod-uid-1', 'pod-uid-2'],
  failed: ['pod-uid-3'],
}));

export const jobConditionCompleteFactory = FactoryGirl.define('JobConditionComplete', () => ({
  type: 'Complete',
  status: 'True',
  lastProbeTime: exampleTime,
  lastTransitionTime: exampleTime,
  reason: 'JobCompleted',
  message: 'The job completed successfully.',
}));

export const jobConditionRunningFactory = FactoryGirl.define('JobConditionRunning', () => ({
  type: 'Running',
  status: 'True',
  lastProbeTime: '2025-01-01T01:30:00Z',
  lastTransitionTime: '2025-01-01T01:30:00Z',
  reason: 'JobRunning',
  message: 'The job is currently running.',
}));

export const jobConditionFailedFactory = FactoryGirl.define('JobConditionFailed', () => ({
  type: 'Failed',
  status: 'False',
  lastProbeTime: exampleTime,
  lastTransitionTime: exampleTime,
  reason: 'JobFailed',
  message: 'The job failed due to an error.',
}));

export const jobStatusCompletedFactory = FactoryGirl.define('JobStatusCompleted', async (buildOptions: any) => ({
  conditions: [await jobConditionCompleteFactory.build()],
  startTime: exampleTime,
  completionTime: buildOptions?.completionTime || createTimeFromDate(new Date('2025-03-01T00:00:00Z')),
  active: 0,
  succeeded: 5,
  failed: 0,
  terminating: 0,
  completedIndexes: '0-4',
  failedIndexes: '',
  uncountedTerminatedPods: await uncountedTerminatedPodsFactory.build(),
  ready: 0,
  startTimeInS: BigInt(0),
  completionTimeInS: BigInt(0),
}));

export const jobStatusRunningFactory = FactoryGirl.define('JobStatusRunning', async () => ({
  conditions: [await jobConditionRunningFactory.build()],
  startTime: '2025-01-01T01:30:00Z',
  completionTime: '',
  active: 1,
  succeeded: 0,
  failed: 0,
  terminating: 0,
  completedIndexes: '',
  failedIndexes: '',
  ready: 1,
  startTimeInS: BigInt(0),
  completionTimeInS: BigInt(0),
}));

export const jobSpecFactory = FactoryGirl.define('JobSpec', () => ({
  parallelism: 2,
  completions: 5,
  activeDeadlineSeconds: BigInt(3600),
  backoffLimit: 6,
  completionMode: 'Indexed',
  suspend: false,
}));

export const objectMetaFactory = FactoryGirl.define('ObjectMeta', (buildOptions: any) => ({
  name: buildOptions?.name || 'example-name',
  namespace: buildOptions?.namespace || 'default',
  uid: buildOptions?.uid || '550e8400-e29b-41d4-a716-446655440000',
  labels: buildOptions?.labels || { app: 'batch-processor' },
  annotations: buildOptions?.annotations || {},
  creationTimestamp: buildOptions?.creationTimestamp || exampleTime,
  generation: BigInt(1),
  ownerReferences: [],
}));

export const cronJobSpecFactory = FactoryGirl.define('CronJobSpec', (buildOptions: any) => ({
  schedule: buildOptions?.schedule || '0 0 * * *',
  timezone: buildOptions?.timezone || 'UTC',
  concurrencyPolicy: buildOptions?.concurrencyPolicy || 'Forbid',
  suspend: buildOptions?.suspend ?? false,
  successfulJobsHistoryLimit: buildOptions?.successfulJobsHistoryLimit ?? 3,
  failedJobsHistoryLimit: buildOptions?.failedJobsHistoryLimit ?? 1,
}));

export const containerStateTerminatedFactory = FactoryGirl.define('ContainerStateTerminated', () => ({
  exitCode: 0,
  signal: 0,
  reason: 'Completed',
  message: 'Container terminated successfully',
  startedAt: exampleTime,
  finishedAt: createTimeFromDate(specificDate),
  containerID: 'docker://1234567890abcdef',
}));

export const terminationReasonFactory = FactoryGirl.define('TerminationReason', async () => ({
  terminationDetails: await containerStateTerminatedFactory.build(),
  containerName: 'my-container',
}));

export const jobResponseFactory = FactoryGirl.define('JobResponse', async (buildOptions: any) => ({
  metadata: buildOptions?.metadata || await objectMetaFactory.build(),
  spec: buildOptions?.spec || await jobSpecFactory.build(),
  jobStatus: buildOptions?.jobStatus || await jobStatusCompletedFactory.build(),
  name: buildOptions?.name || 'example-job-response',
  namespace: buildOptions?.namespace || 'default',
  creationTimestamp: buildOptions?.creationTimestamp || exampleTime,
  Uuid: buildOptions?.Uuid || '550e8400-e29b-41d4-a716-446655440000',
  generation: buildOptions?.generation ?? BigInt(1),
  duration: buildOptions?.duration || '1h0m0s',
  durationInS: buildOptions?.durationInS ?? BigInt(3600),
  status: buildOptions?.status || await jobStatusCompletedFactory.build(),
  succeeded: buildOptions?.succeeded ?? true,
  failed: buildOptions?.failed ?? false,
  failureCondition: buildOptions?.failureCondition ?? null,
  pods: buildOptions?.pods || [],
  terminationReasons: buildOptions?.terminationReasons || [],
  withSidecarContainers: buildOptions?.withSidecarContainers ?? false,
}));

export const cronJobResponseFactory = FactoryGirl.define('CronjobResponse', async (buildOptions: any) => ({
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
  lastDuration: buildOptions?.lastDuration ?? BigInt(3600),
  currentDuration: buildOptions?.currentDuration ?? BigInt(1800),
  spec: buildOptions?.spec || await cronJobSpecFactory.build(),
  failed: buildOptions?.failed ?? false,
}));
