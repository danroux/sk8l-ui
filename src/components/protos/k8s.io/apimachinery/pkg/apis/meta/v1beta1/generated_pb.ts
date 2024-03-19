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

// @generated by protoc-gen-es v1.8.0 with parameter "target=ts,import_extension=.ts"
// @generated from file k8s.io/apimachinery/pkg/apis/meta/v1beta1/generated.proto (package k8s.io.apimachinery.pkg.apis.meta.v1beta1, syntax proto2)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto2 } from "@bufbuild/protobuf";
import { ListMeta, PartialObjectMetadata } from "../v1/generated_pb.ts";

/**
 * PartialObjectMetadataList contains a list of objects containing only their metadata.
 * +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
 *
 * @generated from message k8s.io.apimachinery.pkg.apis.meta.v1beta1.PartialObjectMetadataList
 */
export class PartialObjectMetadataList extends Message<PartialObjectMetadataList> {
  /**
   * Standard list metadata.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * +optional
   *
   * @generated from field: optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 2;
   */
  metadata?: ListMeta;

  /**
   * items contains each of the included items.
   *
   * @generated from field: repeated k8s.io.apimachinery.pkg.apis.meta.v1.PartialObjectMetadata items = 1;
   */
  items: PartialObjectMetadata[] = [];

  constructor(data?: PartialMessage<PartialObjectMetadataList>) {
    super();
    proto2.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto2 = proto2;
  static readonly typeName = "k8s.io.apimachinery.pkg.apis.meta.v1beta1.PartialObjectMetadataList";
  static readonly fields: FieldList = proto2.util.newFieldList(() => [
    { no: 2, name: "metadata", kind: "message", T: ListMeta, opt: true },
    { no: 1, name: "items", kind: "message", T: PartialObjectMetadata, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PartialObjectMetadataList {
    return new PartialObjectMetadataList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PartialObjectMetadataList {
    return new PartialObjectMetadataList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PartialObjectMetadataList {
    return new PartialObjectMetadataList().fromJsonString(jsonString, options);
  }

  static equals(a: PartialObjectMetadataList | PlainMessage<PartialObjectMetadataList> | undefined, b: PartialObjectMetadataList | PlainMessage<PartialObjectMetadataList> | undefined): boolean {
    return proto2.util.equals(PartialObjectMetadataList, a, b);
  }
}

