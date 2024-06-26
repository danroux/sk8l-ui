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

// @generated by protoc-gen-es v1.9.0 with parameter "target=ts,import_extension=.ts"
// @generated from file k8s.io/apimachinery/pkg/apis/testapigroup/v1/generated.proto (package k8s.io.apimachinery.pkg.apis.testapigroup.v1, syntax proto2)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";
import { ListMeta, ObjectMeta, Time } from "../../meta/v1/generated_pb.ts";

/**
 * Carp is a collection of containers, used as either input (create, update) or as output (list, get).
 *
 * @generated from message k8s.io.apimachinery.pkg.apis.testapigroup.v1.Carp
 */
export class Carp extends Message<Carp> {
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

  constructor(data?: PartialMessage<Carp>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.apimachinery.pkg.apis.testapigroup.v1.Carp";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: ObjectMeta, opt: true },
    { no: 2, name: "spec", kind: "message", T: CarpSpec, opt: true },
    { no: 3, name: "status", kind: "message", T: CarpStatus, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Carp {
    return new Carp().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Carp {
    return new Carp().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Carp {
    return new Carp().fromJsonString(jsonString, options);
  }

  static equals(a: Carp | PlainMessage<Carp> | undefined, b: Carp | PlainMessage<Carp> | undefined): boolean {
    return proto2.util.equals(Carp, a, b);
  }
}

/**
 * @generated from message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpCondition
 */
export class CarpCondition extends Message<CarpCondition> {
  /**
   * Type is the type of the condition.
   * Currently only Ready.
   * More info: http://kubernetes.io/docs/user-guide/carp-states#carp-conditions
   *
   * @generated from field: optional string type = 1;
   */
  type?: string;

  /**
   * Status is the status of the condition.
   * Can be True, False, Unknown.
   * More info: http://kubernetes.io/docs/user-guide/carp-states#carp-conditions
   *
   * @generated from field: optional string status = 2;
   */
  status?: string;

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
  reason?: string;

  /**
   * Human-readable message indicating details about last transition.
   * +optional
   *
   * @generated from field: optional string message = 6;
   */
  message?: string;

  constructor(data?: PartialMessage<CarpCondition>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpCondition";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "status", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "lastProbeTime", kind: "message", T: Time, opt: true },
    { no: 4, name: "lastTransitionTime", kind: "message", T: Time, opt: true },
    { no: 5, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CarpCondition {
    return new CarpCondition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CarpCondition {
    return new CarpCondition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CarpCondition {
    return new CarpCondition().fromJsonString(jsonString, options);
  }

  static equals(a: CarpCondition | PlainMessage<CarpCondition> | undefined, b: CarpCondition | PlainMessage<CarpCondition> | undefined): boolean {
    return proto2.util.equals(CarpCondition, a, b);
  }
}

/**
 * CarpList is a list of Carps.
 *
 * @generated from message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpList
 */
export class CarpList extends Message<CarpList> {
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
  items: Carp[] = [];

  constructor(data?: PartialMessage<CarpList>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpList";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: ListMeta, opt: true },
    { no: 2, name: "items", kind: "message", T: Carp, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CarpList {
    return new CarpList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CarpList {
    return new CarpList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CarpList {
    return new CarpList().fromJsonString(jsonString, options);
  }

  static equals(a: CarpList | PlainMessage<CarpList> | undefined, b: CarpList | PlainMessage<CarpList> | undefined): boolean {
    return proto2.util.equals(CarpList, a, b);
  }
}

/**
 * CarpSpec is a description of a carp
 *
 * @generated from message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpSpec
 */
export class CarpSpec extends Message<CarpSpec> {
  /**
   * Restart policy for all containers within the carp.
   * One of Always, OnFailure, Never.
   * Default to Always.
   * More info: http://kubernetes.io/docs/user-guide/carp-states#restartpolicy
   * +optional
   *
   * @generated from field: optional string restartPolicy = 3;
   */
  restartPolicy?: string;

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
  terminationGracePeriodSeconds?: bigint;

  /**
   * Optional duration in seconds the carp may be active on the node relative to
   * StartTime before the system will actively try to mark it failed and kill associated containers.
   * Value must be a positive integer.
   * +optional
   *
   * @generated from field: optional int64 activeDeadlineSeconds = 5;
   */
  activeDeadlineSeconds?: bigint;

  /**
   * NodeSelector is a selector which must be true for the carp to fit on a node.
   * Selector which must match a node's labels for the carp to be scheduled on that node.
   * More info: http://kubernetes.io/docs/user-guide/node-selection/README
   * +optional
   *
   * @generated from field: map<string, string> nodeSelector = 7;
   */
  nodeSelector: { [key: string]: string } = {};

  /**
   * ServiceAccountName is the name of the ServiceAccount to use to run this carp.
   * More info: https://kubernetes.io/docs/concepts/security/service-accounts/
   * +optional
   *
   * @generated from field: optional string serviceAccountName = 8;
   */
  serviceAccountName?: string;

  /**
   * DeprecatedServiceAccount is a depreciated alias for ServiceAccountName.
   * Deprecated: Use serviceAccountName instead.
   * +k8s:conversion-gen=false
   * +optional
   *
   * @generated from field: optional string serviceAccount = 9;
   */
  serviceAccount?: string;

  /**
   * NodeName is a request to schedule this carp onto a specific node. If it is non-empty,
   * the scheduler simply schedules this carp onto that node, assuming that it fits resource
   * requirements.
   * +optional
   *
   * @generated from field: optional string nodeName = 10;
   */
  nodeName?: string;

  /**
   * Host networking requested for this carp. Use the host's network namespace.
   * If this option is set, the ports that will be used must be specified.
   * Default to false.
   * +k8s:conversion-gen=false
   * +optional
   *
   * @generated from field: optional bool hostNetwork = 11;
   */
  hostNetwork?: boolean;

  /**
   * Use the host's pid namespace.
   * Optional: Default to false.
   * +k8s:conversion-gen=false
   * +optional
   *
   * @generated from field: optional bool hostPID = 12;
   */
  hostPID?: boolean;

  /**
   * Use the host's ipc namespace.
   * Optional: Default to false.
   * +k8s:conversion-gen=false
   * +optional
   *
   * @generated from field: optional bool hostIPC = 13;
   */
  hostIPC?: boolean;

  /**
   * Specifies the hostname of the Carp
   * If not specified, the carp's hostname will be set to a system-defined value.
   * +optional
   *
   * @generated from field: optional string hostname = 16;
   */
  hostname?: string;

  /**
   * If specified, the fully qualified Carp hostname will be "<hostname>.<subdomain>.<carp namespace>.svc.<cluster domain>".
   * If not specified, the carp will not have a domainname at all.
   * +optional
   *
   * @generated from field: optional string subdomain = 17;
   */
  subdomain?: string;

  /**
   * If specified, the carp will be dispatched by specified scheduler.
   * If not specified, the carp will be dispatched by default scheduler.
   * +optional
   *
   * @generated from field: optional string schedulername = 19;
   */
  schedulername?: string;

  constructor(data?: PartialMessage<CarpSpec>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpSpec";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 3, name: "restartPolicy", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "terminationGracePeriodSeconds", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 5, name: "activeDeadlineSeconds", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 7, name: "nodeSelector", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 8, name: "serviceAccountName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 9, name: "serviceAccount", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 10, name: "nodeName", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 11, name: "hostNetwork", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 12, name: "hostPID", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 13, name: "hostIPC", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 16, name: "hostname", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 17, name: "subdomain", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 19, name: "schedulername", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CarpSpec {
    return new CarpSpec().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CarpSpec {
    return new CarpSpec().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CarpSpec {
    return new CarpSpec().fromJsonString(jsonString, options);
  }

  static equals(a: CarpSpec | PlainMessage<CarpSpec> | undefined, b: CarpSpec | PlainMessage<CarpSpec> | undefined): boolean {
    return proto2.util.equals(CarpSpec, a, b);
  }
}

/**
 * CarpStatus represents information about the status of a carp. Status may trail the actual
 * state of a system.
 *
 * @generated from message k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpStatus
 */
export class CarpStatus extends Message<CarpStatus> {
  /**
   * Current condition of the carp.
   * More info: http://kubernetes.io/docs/user-guide/carp-states#carp-phase
   * +optional
   *
   * @generated from field: optional string phase = 1;
   */
  phase?: string;

  /**
   * Current service state of carp.
   * More info: http://kubernetes.io/docs/user-guide/carp-states#carp-conditions
   * +optional
   *
   * @generated from field: repeated k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpCondition conditions = 2;
   */
  conditions: CarpCondition[] = [];

  /**
   * A human readable message indicating details about why the carp is in this condition.
   * +optional
   *
   * @generated from field: optional string message = 3;
   */
  message?: string;

  /**
   * A brief CamelCase message indicating details about why the carp is in this state.
   * e.g. 'DiskPressure'
   * +optional
   *
   * @generated from field: optional string reason = 4;
   */
  reason?: string;

  /**
   * IP address of the host to which the carp is assigned. Empty if not yet scheduled.
   * +optional
   *
   * @generated from field: optional string hostIP = 5;
   */
  hostIP?: string;

  /**
   * IP address allocated to the carp. Routable at least within the cluster.
   * Empty if not yet allocated.
   * +optional
   *
   * @generated from field: optional string carpIP = 6;
   */
  carpIP?: string;

  /**
   * RFC 3339 date and time at which the object was acknowledged by the Kubelet.
   * This is before the Kubelet pulled the container image(s) for the carp.
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.Time startTime = 7;
   */
  startTime?: Time;

  constructor(data?: PartialMessage<CarpStatus>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.apimachinery.pkg.apis.testapigroup.v1.CarpStatus";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 1, name: "phase", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "conditions", kind: "message", T: CarpCondition, repeated: true },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "hostIP", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "carpIP", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 7, name: "startTime", kind: "message", T: Time, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CarpStatus {
    return new CarpStatus().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CarpStatus {
    return new CarpStatus().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CarpStatus {
    return new CarpStatus().fromJsonString(jsonString, options);
  }

  static equals(a: CarpStatus | PlainMessage<CarpStatus> | undefined, b: CarpStatus | PlainMessage<CarpStatus> | undefined): boolean {
    return proto2.util.equals(CarpStatus, a, b);
  }
}

