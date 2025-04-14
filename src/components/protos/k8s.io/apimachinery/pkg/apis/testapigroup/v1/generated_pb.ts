//
//Copyright The Kubernetes Authors.
//
//Licensed under the Apache License, Version 2.0 (the "License");
//you may not use this file except in compliance with the License.
//You may obtain a copy of the License at
//
//http://www.apache.org/licenses/LICENSE-2.0
//
//Unless required by applicable law or agreed to in writing, software
//distributed under the License is distributed on an "AS IS" BASIS,
//WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//See the License for the specific language governing permissions and
//limitations under the License.

// This file was autogenerated by go-to-protobuf. Do not edit it manually!

// @generated by protoc-gen-es v2.2.5 with parameter "target=ts,import_extension=.ts"
// @generated from file k8s.io/apimachinery/pkg/apis/testapigroup/v1/generated.proto (package k8s.io.apimachinery.pkg.apis.testapigroup.v1, syntax proto2)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { ListMeta, ObjectMeta, Time } from "../../meta/v1/generated_pb.ts";
import { file_k8s_io_apimachinery_pkg_apis_meta_v1_generated } from "../../meta/v1/generated_pb.ts";
import { file_k8s_io_apimachinery_pkg_runtime_generated } from "../../../runtime/generated_pb.ts";
import { file_k8s_io_apimachinery_pkg_runtime_schema_generated } from "../../../runtime/schema/generated_pb.ts";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file k8s.io/apimachinery/pkg/apis/testapigroup/v1/generated.proto.
 */
export const file_k8s_io_apimachinery_pkg_apis_testapigroup_v1_generated: GenFile = /*@__PURE__*/
  fileDesc("CjxrOHMuaW8vYXBpbWFjaGluZXJ5L3BrZy9hcGlzL3Rlc3RhcGlncm91cC92MS9nZW5lcmF0ZWQucHJvdG8SLGs4cy5pby5hcGltYWNoaW5lcnkucGtnLmFwaXMudGVzdGFwaWdyb3VwLnYxItoBCgRDYXJwEkIKCG1ldGFkYXRhGAEgASgLMjAuazhzLmlvLmFwaW1hY2hpbmVyeS5wa2cuYXBpcy5tZXRhLnYxLk9iamVjdE1ldGESRAoEc3BlYxgCIAEoCzI2Lms4cy5pby5hcGltYWNoaW5lcnkucGtnLmFwaXMudGVzdGFwaWdyb3VwLnYxLkNhcnBTcGVjEkgKBnN0YXR1cxgDIAEoCzI4Lms4cy5pby5hcGltYWNoaW5lcnkucGtnLmFwaXMudGVzdGFwaWdyb3VwLnYxLkNhcnBTdGF0dXMi2QEKDUNhcnBDb25kaXRpb24SDAoEdHlwZRgBIAEoCRIOCgZzdGF0dXMYAiABKAkSQQoNbGFzdFByb2JlVGltZRgDIAEoCzIqLms4cy5pby5hcGltYWNoaW5lcnkucGtnLmFwaXMubWV0YS52MS5UaW1lEkYKEmxhc3RUcmFuc2l0aW9uVGltZRgEIAEoCzIqLms4cy5pby5hcGltYWNoaW5lcnkucGtnLmFwaXMubWV0YS52MS5UaW1lEg4KBnJlYXNvbhgFIAEoCRIPCgdtZXNzYWdlGAYgASgJIo8BCghDYXJwTGlzdBJACghtZXRhZGF0YRgBIAEoCzIuLms4cy5pby5hcGltYWNoaW5lcnkucGtnLmFwaXMubWV0YS52MS5MaXN0TWV0YRJBCgVpdGVtcxgCIAMoCzIyLms4cy5pby5hcGltYWNoaW5lcnkucGtnLmFwaXMudGVzdGFwaWdyb3VwLnYxLkNhcnAitQMKCENhcnBTcGVjEhUKDXJlc3RhcnRQb2xpY3kYAyABKAkSJQoddGVybWluYXRpb25HcmFjZVBlcmlvZFNlY29uZHMYBCABKAMSHQoVYWN0aXZlRGVhZGxpbmVTZWNvbmRzGAUgASgDEl4KDG5vZGVTZWxlY3RvchgHIAMoCzJILms4cy5pby5hcGltYWNoaW5lcnkucGtnLmFwaXMudGVzdGFwaWdyb3VwLnYxLkNhcnBTcGVjLk5vZGVTZWxlY3RvckVudHJ5EhoKEnNlcnZpY2VBY2NvdW50TmFtZRgIIAEoCRIWCg5zZXJ2aWNlQWNjb3VudBgJIAEoCRIQCghub2RlTmFtZRgKIAEoCRITCgtob3N0TmV0d29yaxgLIAEoCBIPCgdob3N0UElEGAwgASgIEg8KB2hvc3RJUEMYDSABKAgSEAoIaG9zdG5hbWUYECABKAkSEQoJc3ViZG9tYWluGBEgASgJEhUKDXNjaGVkdWxlcm5hbWUYEyABKAkaMwoRTm9kZVNlbGVjdG9yRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASLsAQoKQ2FycFN0YXR1cxINCgVwaGFzZRgBIAEoCRJPCgpjb25kaXRpb25zGAIgAygLMjsuazhzLmlvLmFwaW1hY2hpbmVyeS5wa2cuYXBpcy50ZXN0YXBpZ3JvdXAudjEuQ2FycENvbmRpdGlvbhIPCgdtZXNzYWdlGAMgASgJEg4KBnJlYXNvbhgEIAEoCRIOCgZob3N0SVAYBSABKAkSDgoGY2FycElQGAYgASgJEj0KCXN0YXJ0VGltZRgHIAEoCzIqLms4cy5pby5hcGltYWNoaW5lcnkucGtnLmFwaXMubWV0YS52MS5UaW1lQi5aLGs4cy5pby9hcGltYWNoaW5lcnkvcGtnL2FwaXMvdGVzdGFwaWdyb3VwL3Yx", [file_k8s_io_apimachinery_pkg_apis_meta_v1_generated, file_k8s_io_apimachinery_pkg_runtime_generated, file_k8s_io_apimachinery_pkg_runtime_schema_generated]);

/**
 * Carp is a collection of containers, used as either input (create, update) or as output (list, get).
 *
 * @generated from message k8s.io.apimachinery.pkg.apis.testapigroup.v1.Carp
 */
export type Carp = Message<"k8s.io.apimachinery.pkg.apis.testapigroup.v1.Carp"> & {
  /**
   * Standard object's metadata.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
   */
  metadata?: ObjectMeta;

  /**
   * Specification of the desired behavior of the carp.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpSpec spec = 2;
   */
  spec?: CarpSpec;

  /**
   * Most recently observed status of the carp.
   * This data may not be up to date.
   * Populated by the system.
   * Read-only.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpStatus status = 3;
   */
  status?: CarpStatus;
};

/**
 * Describes the message k8s.io.apimachinery.pkg.apis.testapigroup.v1.Carp.
 * Use `create(CarpSchema)` to create a new message.
 */
export const CarpSchema: GenMessage<Carp> = /*@__PURE__*/
  messageDesc(file_k8s_io_apimachinery_pkg_apis_testapigroup_v1_generated, 0);

/**
 * @generated from message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpCondition
 */
export type CarpCondition = Message<"k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpCondition"> & {
  /**
   * Type is the type of the condition.
   * Currently only Ready.
   * More info: http://kubernetes.io/docs/user-guide/carp-states#carp-conditions
   *
   * @generated from field: optional string type = 1;
   */
  type: string;

  /**
   * Status is the status of the condition.
   * Can be True, False, Unknown.
   * More info: http://kubernetes.io/docs/user-guide/carp-states#carp-conditions
   *
   * @generated from field: optional string status = 2;
   */
  status: string;

  /**
   * Last time we probed the condition.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastProbeTime = 3;
   */
  lastProbeTime?: Time;

  /**
   * Last time the condition transitioned from one status to another.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.Time lastTransitionTime = 4;
   */
  lastTransitionTime?: Time;

  /**
   * Unique, one-word, CamelCase reason for the condition's last transition.
   * +optional
   *
   * @generated from field: optional string reason = 5;
   */
  reason: string;

  /**
   * Human-readable message indicating details about last transition.
   * +optional
   *
   * @generated from field: optional string message = 6;
   */
  message: string;
};

/**
 * Describes the message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpCondition.
 * Use `create(CarpConditionSchema)` to create a new message.
 */
export const CarpConditionSchema: GenMessage<CarpCondition> = /*@__PURE__*/
  messageDesc(file_k8s_io_apimachinery_pkg_apis_testapigroup_v1_generated, 1);

/**
 * CarpList is a list of Carps.
 *
 * @generated from message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpList
 */
export type CarpList = Message<"k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpList"> & {
  /**
   * Standard list metadata.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
   */
  metadata?: ListMeta;

  /**
   * List of carps.
   * More info: http://kubernetes.io/docs/user-guide/carps
   *
   * @generated from field: repeated k8s.io.apimachinery.pkg.apis.testapigroup.v1.Carp items = 2;
   */
  items: Carp[];
};

/**
 * Describes the message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpList.
 * Use `create(CarpListSchema)` to create a new message.
 */
export const CarpListSchema: GenMessage<CarpList> = /*@__PURE__*/
  messageDesc(file_k8s_io_apimachinery_pkg_apis_testapigroup_v1_generated, 2);

/**
 * CarpSpec is a description of a carp
 *
 * @generated from message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpSpec
 */
export type CarpSpec = Message<"k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpSpec"> & {
  /**
   * Restart policy for all containers within the carp.
   * One of Always, OnFailure, Never.
   * Default to Always.
   * More info: http://kubernetes.io/docs/user-guide/carp-states#restartpolicy
   * +optional
   *
   * @generated from field: optional string restartPolicy = 3;
   */
  restartPolicy: string;

  /**
   * Optional duration in seconds the carp needs to terminate gracefully. May be decreased in delete request.
   * Value must be non-negative integer. The value zero indicates delete immediately.
   * If this value is nil, the default grace period will be used instead.
   * The grace period is the duration in seconds after the processes running in the carp are sent
   * a termination signal and the time when the processes are forcibly halted with a kill signal.
   * Set this value longer than the expected cleanup time for your process.
   * Defaults to 30 seconds.
   * +optional
   *
   * @generated from field: optional int64 terminationGracePeriodSeconds = 4;
   */
  terminationGracePeriodSeconds: bigint;

  /**
   * Optional duration in seconds the carp may be active on the node relative to
   * StartTime before the system will actively try to mark it failed and kill associated containers.
   * Value must be a positive integer.
   * +optional
   *
   * @generated from field: optional int64 activeDeadlineSeconds = 5;
   */
  activeDeadlineSeconds: bigint;

  /**
   * NodeSelector is a selector which must be true for the carp to fit on a node.
   * Selector which must match a node's labels for the carp to be scheduled on that node.
   * More info: http://kubernetes.io/docs/user-guide/node-selection/README
   * +optional
   *
   * @generated from field: map<string, string> nodeSelector = 7;
   */
  nodeSelector: { [key: string]: string };

  /**
   * ServiceAccountName is the name of the ServiceAccount to use to run this carp.
   * More info: https://kubernetes.io/docs/concepts/security/service-accounts/
   * +optional
   *
   * @generated from field: optional string serviceAccountName = 8;
   */
  serviceAccountName: string;

  /**
   * DeprecatedServiceAccount is a deprecated alias for ServiceAccountName.
   * Deprecated: Use serviceAccountName instead.
   * +k8s:conversion-gen=false
   * +optional
   *
   * @generated from field: optional string serviceAccount = 9;
   */
  serviceAccount: string;

  /**
   * NodeName is a request to schedule this carp onto a specific node. If it is non-empty,
   * the scheduler simply schedules this carp onto that node, assuming that it fits resource
   * requirements.
   * +optional
   *
   * @generated from field: optional string nodeName = 10;
   */
  nodeName: string;

  /**
   * Host networking requested for this carp. Use the host's network namespace.
   * If this option is set, the ports that will be used must be specified.
   * Default to false.
   * +k8s:conversion-gen=false
   * +optional
   *
   * @generated from field: optional bool hostNetwork = 11;
   */
  hostNetwork: boolean;

  /**
   * Use the host's pid namespace.
   * Optional: Default to false.
   * +k8s:conversion-gen=false
   * +optional
   *
   * @generated from field: optional bool hostPID = 12;
   */
  hostPID: boolean;

  /**
   * Use the host's ipc namespace.
   * Optional: Default to false.
   * +k8s:conversion-gen=false
   * +optional
   *
   * @generated from field: optional bool hostIPC = 13;
   */
  hostIPC: boolean;

  /**
   * Specifies the hostname of the Carp
   * If not specified, the carp's hostname will be set to a system-defined value.
   * +optional
   *
   * @generated from field: optional string hostname = 16;
   */
  hostname: string;

  /**
   * If specified, the fully qualified Carp hostname will be "<hostname>.<subdomain>.<carp namespace>.svc.<cluster domain>".
   * If not specified, the carp will not have a domainname at all.
   * +optional
   *
   * @generated from field: optional string subdomain = 17;
   */
  subdomain: string;

  /**
   * If specified, the carp will be dispatched by specified scheduler.
   * If not specified, the carp will be dispatched by default scheduler.
   * +optional
   *
   * @generated from field: optional string schedulername = 19;
   */
  schedulername: string;
};

/**
 * Describes the message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpSpec.
 * Use `create(CarpSpecSchema)` to create a new message.
 */
export const CarpSpecSchema: GenMessage<CarpSpec> = /*@__PURE__*/
  messageDesc(file_k8s_io_apimachinery_pkg_apis_testapigroup_v1_generated, 3);

/**
 * CarpStatus represents information about the status of a carp. Status may trail the actual
 * state of a system.
 *
 * @generated from message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpStatus
 */
export type CarpStatus = Message<"k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpStatus"> & {
  /**
   * Current condition of the carp.
   * More info: http://kubernetes.io/docs/user-guide/carp-states#carp-phase
   * +optional
   *
   * @generated from field: optional string phase = 1;
   */
  phase: string;

  /**
   * Current service state of carp.
   * More info: http://kubernetes.io/docs/user-guide/carp-states#carp-conditions
   * +optional
   *
   * @generated from field: repeated k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpCondition conditions = 2;
   */
  conditions: CarpCondition[];

  /**
   * A human readable message indicating details about why the carp is in this condition.
   * +optional
   *
   * @generated from field: optional string message = 3;
   */
  message: string;

  /**
   * A brief CamelCase message indicating details about why the carp is in this state.
   * e.g. 'DiskPressure'
   * +optional
   *
   * @generated from field: optional string reason = 4;
   */
  reason: string;

  /**
   * IP address of the host to which the carp is assigned. Empty if not yet scheduled.
   * +optional
   *
   * @generated from field: optional string hostIP = 5;
   */
  hostIP: string;

  /**
   * IP address allocated to the carp. Routable at least within the cluster.
   * Empty if not yet allocated.
   * +optional
   *
   * @generated from field: optional string carpIP = 6;
   */
  carpIP: string;

  /**
   * RFC 3339 date and time at which the object was acknowledged by the Kubelet.
   * This is before the Kubelet pulled the container image(s) for the carp.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 7;
   */
  startTime?: Time;
};

/**
 * Describes the message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpStatus.
 * Use `create(CarpStatusSchema)` to create a new message.
 */
export const CarpStatusSchema: GenMessage<CarpStatus> = /*@__PURE__*/
  messageDesc(file_k8s_io_apimachinery_pkg_apis_testapigroup_v1_generated, 4);

